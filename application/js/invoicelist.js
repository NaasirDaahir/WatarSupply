$(document).ready(function(){   
    $("#print").on('click', function (e) {
        $("#PrintModal").modal('show');
        var id=document.getElementById("invoiceNO").value;
         fetch_print_invoice(id);
    });
    $("#close_modal").on('click', function (e) {
        $("#PrintModal").modal('hide');
    });

    loadInvoice();
  
   
   function loadInvoice() {
   $("#invoiceTable tbody").html('');
   let userData = {
       "action": "load_Invoice"
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
                  tableBody += `<td><a class="btn btn-info edit_info"  edit_id="${element.invoice_id}"><i class="fa fa-share text-white"></i></a> 
                  </td>`;
                  tableBody += '</tr>';
               });
              $("#invoiceTable tbody").append(tableBody);
            $('#invoiceTable').DataTable({
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
   
  
 $("#invoiceTable").on('click',"a.edit_info",function(e){
    let id=$(this).attr("edit_id");
    fetch_invoice(id);
    
})

function fetch_invoice(id) {
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

function fetch_print_invoice(id) {
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
                    $('#print_invoiceNO').val(element['invoice_id']);
                    $("#print_House_number").val(element['house_no']);
                    $("#print_date").val(element['date']);
                    $("#print_fullname").val(element['name']);
                    $("#print_prevKW").val(element['prev_kw']);
                    $("#print_newKW").val(element['new_kw']);
                    $("#print_distance").val(element['distance']);
                    $("#print_price").val(element['price']);
                    $("#print_ex-loan").val(element['ex_loan']);
                    $("#print_Total").val(element['total']);
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






 
 //paid customer fee form
$("#invoice_form").on('submit', function (e) {
    e.preventDefault();
    let formData = new FormData($("#invoice_form")[0]);
    formData.append('action','paid_invoice');
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
                       title:'Data Has been Saved',
                       type:'success',
                       showConfirmButton:false,
                       timer:1500
                   })
                    $("#invoice_form")[0].reset();
                    $('#invoiceTable').DataTable().destroy();
                    loadInvoice();
                 
                            
                } else {
                    alert("eroor");

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
