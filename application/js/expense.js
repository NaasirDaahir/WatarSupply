$(document).ready(function(){   
    $("#addExpense").on('click', function (e) {
        $("#expensemodal").modal('show');
        $("#btnSave").val("Save");
    });
    $("#close_modal").on('click', function (e) {
        $("#expensemodal").modal('hide');
        $("#btnSave").val("Save");
    });

    var btnAction = 'insert';           
    loadExpense();
    
     function loadExpense() {
       $("#expenseTable tbody").html('');
       let userData = {
           "action": "load_expense"
       }
       let tableBody = '';
       let html = '';
       $.ajax({
           url: "../api/expense.php",
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
                      tableBody += `<td><a class="btn  edit_info"  edit_id="${element.id}"><i class="fa fa-pen text-info"></i></a> 
                      <a class="btn delete_info" delete_id ="${element.id}" ><i class="fa fa-trash text-danger"></i></a></td>`;
                      tableBody += '</tr>';
                   });
                  $("#expenseTable tbody").append(tableBody);
                $('#expenseTable').DataTable({
           
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
   

    $("#expense_form").on('submit', function (e) {
                e.preventDefault();
                let formData = new FormData($("#expense_form")[0]);
                formData.append('action','register_expense');
                if(btnAction == "insert"){
                    $.ajax({
                        url: "../api/expense.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            let status = data.status;
                            let message = data.Message;  
                            if (status == true) {
                                    $("#expense_form")[0].reset();
                                    $("#expensemodal").modal('hide');
                                    $('#expenseTable').DataTable().destroy();
                                    loadExpense();
                                    Swal.fire({
                                        title:'Data Has been Saved Successfully',
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
                    let formData = new FormData($("#expense_form")[0]);
                    formData.append('action','update_expense');
                    $.ajax({ 
                        url: "../api/expense.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (formData) {
                            let status = formData.status;
                            let message = formData.Message;
                            if (status == true) {        
                                    $("#expense_form")[0].reset();
                                    $("#expensemodal").modal('hide');
                                    $('#expenseTable').DataTable().destroy();
                                    loadExpense();
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
            
            
            


 
 $("#expenseTable").on('click', "a.delete_info", function (e) {
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
             "action": "delete_expense",
             "id": id
         }
         let html = '';
         $.ajax({
             url: "../api/expense.php",
             dataType: "JSON",
             method: "POST",
             data: userData,
             success: function (data) {
                 let status = data.status;
                 let message = data.Message;
                 if (status == true) {   
                        // alert("Deleted Succesfully");
                        $('#expenseTable').DataTable().destroy();
                        loadExpense();
                 } else {
                     console.log(message);
                 }   
             },
             error: function (data) {
                 console.log(data.responseText);
             }
         })
     }

   
 $("#expenseTable").on('click',"a.edit_info",function(e){
    let id=$(this).attr("edit_id");
    fetch_expense(id);
})

function fetch_expense(id) {
    let userData = {
    "action": "fetch_expense",
    "id": id
     }
    let html = '';
    $.ajax({
        url: "../api/expense.php",
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
                    $('#name').val(element['name']);
                    $("#amount").val(element['amount']);
                    $("#date").val(element['date']);
                    $("#discription").val(element['description']);
                    $("#btnSave").val("Update Info");
                    $("#expensemodal").modal('show');
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