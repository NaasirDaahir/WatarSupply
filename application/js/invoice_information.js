$(document).ready(function(){   
    $("#addcustomer").on('click', function (e) {
        $("#invoiceModal").modal('show');
        $("#btnSave").val("Save");
    });
    $("#close_modal").on('click', function (e) {
        $("#invoiceModal").modal('hide');
        $("#btnSave").val("Save");
    });


    $("#paidState").on('change',function(){
        let state=$("#paidState").val();
        if(state =='Paid'){
             $('#InvoiceTableInfo').DataTable().destroy();
            $("#InvoiceTableInfo tbody").empty();
            paid_invoice();
        }else if(state=="Unpaid"){
            $('#InvoiceTableInfo').DataTable().destroy();
            $("#InvoiceTableInfo tbody").empty();
            Unpaid_invoice();
        }
        else{
            $('#InvoiceTableInfo').DataTable().destroy();
            $("#InvoiceTableInfo tbody").empty();
            loadInvoice_information();
        }
    })

    loadInvoice_information();


   
  
        //function about paid invoice
    function paid_invoice() {
        $("#InvoiceTableInfo tbody").html('');
        let userData = {
            "action": "load_paid_list"
        }
        let tableBody = '';
        let html = '';
        $.ajax({
            url: "../api/invoice.php",
            dataType: "JSON",
            method: "POST",
            data: userData,
            success: function (data) {
                let status = data.status;
                let message = data.Message;
                if (status == true) {
                    tableBody += '<tr>';
                    message.forEach(function (element) {
                       for(singleElement in element){
                          tableBody += `<td>${element[singleElement]}</td>`;
                       }
                       tableBody += `<td><a class="btn  edit_info"  edit_id="${element.invoice_id}"><i class="fa fa-pen text-info"></i></a> 
                       <a class="btn  delete_info" delete_id ="${element.invoice_id}" ><i class="fa fa-trash text-danger"></i></a></td>`;
                       tableBody += '</tr>';
                    });
                   $("#InvoiceTableInfo tbody").append(tableBody);
                 $('#InvoiceTableInfo').DataTable({
            //    paging: false
                 });
     
                } else {
                    console.log(message);
                }
            },
            error: function (data) {
                console.log(data.responseText);
            }
        })
     }
        //function about Unpaid  invoice list
    function Unpaid_invoice() {
        $("#InvoiceTableInfo tbody").html('');
        let userData = {
            "action": "load_Unpaid_list"
        }
        let tableBody = '';
        let html = '';
        $.ajax({
            url: "../api/invoice.php",
            dataType: "JSON",
            method: "POST",
            data: userData,
            success: function (data) {
                let status = data.status;
                let message = data.Message;
                if (status == true) {
                    tableBody += '<tr>';
                    message.forEach(function (element) {
                       for(singleElement in element){
                          tableBody += `<td>${element[singleElement]}</td>`;
                       }
                       tableBody += `<td><a class="btn btn-info edit_info"  edit_id="${element.invoice_id}"><i class="fa fa-pen text-white"></i></a> 
                       <a class="btn btn-danger delete_info" delete_id ="${element.invoice_id}" ><i class="fa fa-trash text-white"></i></a></td>`;
                       tableBody += '</tr>';
                    });
                   $("#InvoiceTableInfo tbody").append(tableBody);
                 $('#InvoiceTableInfo').DataTable({
           
                 });
                } else {
                    console.log(message);
                }
            },
            error: function (data) {
                console.log(data.responseText);
            }
        })
     }
        // load  full invoice information
    function loadInvoice_information() {
       $("#InvoiceTableInfo tbody").html('');
       let userData = {
           "action": "load_Invoice_info"
       }
       let tableBody = '';
       let html = '';
       $.ajax({
           url: "../api/invoice.php",
           dataType: "JSON",
           method: "POST",
           data: userData,
           success: function (data) {
               
               let status = data.status;
               let message = data.Message;
               if (status == true) {
                   tableBody += '<tr>';
                   let colrs = "success";
                   message.forEach(function (element) {
                       for (singleElement in element) {
                           if (element[singleElement] == "no") {
                              colrs="success"
                           }
                          if (singleElement != "paid") {
                              if (singleElement == "total") {
                                tableBody += `<td class="text-${colrs}">${element[singleElement]}</td>`;
                              } else {
                                tableBody += `<td>${element[singleElement]}</td>`;
                              }
                           
                          
                      }
                      }
                      tableBody += `<td><a  href="#" class="  edit_info"  edit_id="${element.invoice_id}"><i class="fa fa-pen text-info"></i></a> 
                      <a href="#" class=" delete_info" delete_id ="${element.invoice_id}" ><i class="fa fa-trash text-danger"></i></a></td>`;
                       tableBody += '</tr>';
                    
                   });
                  $("#InvoiceTableInfo tbody").append(tableBody);
                $('#InvoiceTableInfo').DataTable({
          
                });
    
               } else {
                   console.log(message);
               }
           },
           error: function (data) {
               console.log(data.responseText);
           }
       })
    }
    
        //delete invoice 
     $("#InvoiceTableInfo").on('click', "a.delete_info", function (e) {
    //   e.preventDefault();
        var id = $(this).attr("delete_id");
        Swal.fire({
            title:"Are you sure to Delete ?",
            type:"warning",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            confirmButtonText:"Yes , delete it.",
        }).then((result)=>{
            if(result.value){
                deleteInvoice(id);
               Swal.fire({
                title:'Deleted Successfully',
                type:'success',
                showConfirmButton:false,
                timer:1500
                })     
            }
        })
        });
        function deleteInvoice(id) {
            let userData = {
                "action": "delete_invoice",
                "id": id
            }
            let html = '';
            $.ajax({
                url: "../api/invoice.php",
                dataType: "JSON",
                method: "POST",
                data: userData,
                success: function (data) {
                    let status = data.status;
                    let message = data.Message;
                    if (status == true) {   
                        // Swal.fire({
                            // title:'deleted Successfully',
                            // type:'success',
                            // showConfirmButton:false,
                            // timer:1500
                        // }) 
                           $('#InvoiceTableInfo').DataTable().destroy();
                           loadInvoice_information();
                    } else {
                        console.log(message);
                    }   
                },
                error: function (data) {
                    console.log(data.responseText);
                }
            })
        }
    
        //fetch data into modal
        $("#InvoiceTableInfo").on('click',"a.edit_info",function(e){
            let id=$(this).attr("edit_id");
            fetch_invoice_information(id);
        })
        function fetch_invoice_information(id) {
            let userData = {
            "action": "fetch_invoice",
            "id": id
             }
            let html = '';
            $.ajax({
                url: "../api/invoice.php",
                dataType: "JSON",
                method: "POST",
                data: userData,
                success: function (data) {
                    let status = data.status;
                    let message = data.Message;
                    if (status == true) {
                        message.forEach(function (element) {
                            btnAction = "Update";
                            $('#invoiceNO').val(element['invoice_id']);
                            $("#House_number").val(element['house_no']);
                            $("#date").val(element['date']);
                            $("#fullname").val(element['name']);
                            $("#prevKW").val(element['prev_kw']);
                            $("#newKW").val(element['new_kw']);
                            $("#distance").val(element['distance']);
                            $("#price").val(element['price']);
                            $("#ex-loan").val(element['ex_loan']);
                            $("#Total").val(element['total']);
                            $("#invoiceModal").modal('show');
                        });
                    } else {
                        console.log(message);
                    }
                },
                error: function (data) {
                    console.log(data.responseText);
                }
            })
        }

        // update invoice information
        $("#invoice_info_form").on('submit', function (e) {
            e.preventDefault();
            let formData = new FormData($("#invoice_info_form")[0]);
            formData.append('action','update_invoice');
                $.ajax({
                    url: "../api/invoice.php",
                    method: "POST",
                    dataType: "JSON",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
            
                        let status = data.status;
                        let message = data.Message;  
                        if (status == true) {
        
                            Swal.fire({
                                title:' Updates Successfully',
                                type:'success',
                                showConfirmButton:false,
                                timer:1500
                            })
                       $("#invoiceModal").modal('hide');
                       $('#InvoiceTableInfo').DataTable().destroy();
                       loadInvoice_information();              
                        } else {
                            alert("error");
                        }   
                    },
                    error: function (data) {
            
                        console.log(data);
            
                        if (data.status == 200) {
                            $("#errorMessage").html(data.responseText);
                            $("#sucessMessage").css('display', 'none');
                            $("#errorMessage").css('display', 'block');
                        } else {
                            $("#errorMessage").html(data.statusText);
                            $("#sucessMessage").css('display', 'none');
                            $("#errorMessage").css('display', 'block');
                        }
            
                    }
            
            
                })      
        
        });
        

   

 


 });
