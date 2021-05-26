$(document).ready(function(){   
    $("#addcustomer").on('click', function (e) {
        $("#customersModal").modal('show');
        $("#btnSave").val("Save");
    });
    $("#close_modal").on('click', function (e) {
        $("#customersModal").modal('hide');
        $("#btnSave").val("Save");
    });

    var btnAction = 'insert';           
    loadCustomers();
    
     function loadCustomers() {
        // $('#customersTable').DataTable().destroy();
       $("#customersTable tbody").html('');
       let userData = {
           "action": "load_customers"
       }
       let tableBody = '';
       let html = '';
       $.ajax({
           url: "../api/customers.php",
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
                      tableBody += `<td><a href="#" class=" edit_info"  edit_id="${element.id}"><i class="fa fa-pen text-info"></i> </a> 
                      <a href="#"  class=" delete_info" delete_id ="${element.id}" ><i class="fa fa-trash text-danger"></i></a></td>`;
                       tableBody += '</tr>';
                    
                   });
                  $("#customersTable tbody").append(tableBody);
                $('#customersTable').DataTable({
           
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
   

 
 
    $("#customers_form").on('submit', function (e) {
                e.preventDefault();
                let formData = new FormData($("#customers_form")[0]);
                formData.append('action','register_customer');
                if(btnAction == "insert"){
                    $.ajax({
                        url: "../api/customers.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                
                            let status = data.status;
                            let message = data.Message;  
                            if (status == true) {
                                $("#customersModal").modal('hide');
                                $('#customersTable').DataTable().destroy();
                                loadCustomers();  
                                $("#customers_form")[0].reset();
                                Swal.fire({
                                    title:' Data Has been Saved Successfully',
                                    type:'success',
                                    showConfirmButton:false,
                                    timer:1500
                                })              
                            } else {
                                Swal.fire({
                                    title:'Error',
                                    type:'warning',
                                    showConfirmButton:false,
                                    // timer:2500
                                }) 
                            }   
                        },
                        error: function (data) {
                            console.log(data);
                            if (data.status == 200) {
                                Swal.fire({
                                    title:'Error',
                                    type:'warning',
                                    showConfirmButton:false,
                                    // timer:2500
                                }) 
                            } else {
                                Swal.fire({
                                    title:'Error',
                                    type:'warning',
                                    showConfirmButton:false,
                                    // timer:2500
                                }) 
                            }
                
                        }
                
                
                    })
               
                }else{
                    let formData = new FormData($("#customers_form")[0]);
                    formData.append('action','update_customer');
                    $.ajax({ 
                        url: "../api/customers.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (formData) {
                            let status = formData.status;
                            let message = formData.Message;
                            if (status == true) {
                                $("#customers_form")[0].reset();
                                $("#customersModal").modal('hide');
                                $('#customersTable').DataTable().destroy();
                                loadCustomers();     
                                $("#submit_btn").val("Save");
                                btnAction = 'insert';
                                Swal.fire({
                                    title:'Updated Successfully',
                                    type:'success',
                                    showConfirmButton:false,
                                    timer:1500
                                }) 
                            } else {
                                Swal.fire({
                                    title:'Error',
                                    type:'warning',
                                    showConfirmButton:false,
                                    // timer:2500
                                }) 
                            }
                        },
                        error: function (formData) {
                            console.log(postData);
                            if (postData.status == 200) {
                                Swal.fire({
                                    title:'Error',
                                    type:'warning',
                                    showConfirmButton:false,
                                    // timer:2500
                                })
                            } else {
                                Swal.fire({
                                    title:'Error',
                                    type:'warning',
                                    showConfirmButton:false,
                                    // timer:2500
                                })
                            }
                
                        }
                    })
                }
});
            
            
 $("#customersTable").on('click', "a.delete_info", function (e) {
     let id = $(this).attr("delete_id");
     Swal.fire({
        title:"Are you sure to Delete?",
        type:"warning",
        showCancelButton:true,
        confirmButtonColor:"#3085d6",
        cancelButtonColor:"#d33",
        confirmButtonText:"Yes , Delete it.",
    }).then((result)=>{
        if(result.value){
            deleteCustomer(id);
           Swal.fire({
            title:'Deleted Successfully',
            type:'success',
            showConfirmButton:false,
            timer:1500
            })     
        }
    })
     });
     function deleteCustomer(id) {
         let userData = {
             "action": "delete_customer",
             "id": id
         }
         let html = '';
         $.ajax({
             url: "../api/customers.php",
             dataType: "JSON",
             method: "POST",
             data: userData,
             success: function (data) {
                 let status = data.status;
                 let message = data.Message;
                 if (status == true) {   
                        // alert("Deleted Succesfully");
                        $('#customersTable').DataTable().destroy();
                        loadCustomers();     
                 } else {
                     console.log(message);
                 }   
             },
             error: function (data) {
                 console.log(data.responseText);
             }
         })
     }

   
 $("#customersTable").on('click',"a.edit_info",function(e){
    let id=$(this).attr("edit_id");
    fetch_customer(id);
})

function fetch_customer(id) {
    let userData = {
    "action": "fetch_customer_info",
    "id": id
     }
    let html = '';
    $.ajax({
        url: "../api/customers.php",
        dataType: "JSON",
        method: "POST",
        data: userData,
        success: function (data) {
            let status = data.status;
            let message = data.Message;
            if (status == true) {
                message.forEach(function (element) {
                    btnAction = "Update";
                    $("#update_id").val(element['id']);
                    $('#name').val(element['fullname']);
                    $('#Phone').val(element['phone']);
                    $("#gender").val(element['gender']);
                    $("#District").val(element['district']);
                    $("#Village").val(element['village']);
                    $("#Sector").val(element['sector']);
                    $("#houseNo").val(element['house_no']);
                    $("#btnSave").val("Update Info");
                    $("#customersModal").modal('show');
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
 
 });