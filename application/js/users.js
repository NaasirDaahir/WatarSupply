$(document).ready(function(){   
    $("#adduser").on('click', function (e) {
        $("#usersModal").modal('show');
        $("#btnSave").val("Save");
    });
    $("#close_modal").on('click', function (e) {
        $("#usersModal").modal('hide');
        $("#btnSave").val("Save");
    });
    
                       
     loadUsers();
    var btnAction = 'insert';
 
 
    $("#usersForm").on('submit', function (e) {
                e.preventDefault();
                let formData = new FormData($("#usersForm")[0]);
                let file = $("#customFile").prop("files")[0];
                formData.append('image',file);
                formData.append('action','register_user');
                if(btnAction == "insert"){
                    $.ajax({
                        url: "../api/users.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                
                            let status = data.status;
                            let message = data.Message;  
                            if (status == true) {
                                    $("#usersForm")[0].reset();
                                    $("#usersModal").modal('hide');
                                    $('#userstable').DataTable().destroy();
                                    loadUsers();
                                    Swal.fire({
                                        title:'Data Has been Saved Successfully',
                                        type:'success',
                                        showConfirmButton:false,
                                        timer:1500
                                    }) 
                                          
                            } else {
                                $("#usersForm")[0].reset();
                                $("#usersModal").modal('hide');
                                $('#userstable').DataTable().destroy();
                                loadUsers();
                                Swal.fire({
                                    title:'Data Has been Saved Successfully',
                                    type:'success',
                                    showConfirmButton:false,
                                    timer:1500
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
                   
                
                    let formData = new FormData($("#usersForm")[0]);
                    let file = $("#customFile").prop("files")[0];
                    formData.append('image',file);
                    formData.append('action','update_user');
                    $.ajax({
                        
                        url: "../api/users.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (postData) {
                            let status = formData.status;
                            let message = formData.Message;
                            if (status == true) {
                                $("#usersForm")[0].reset();
                                $("#usersModal").modal('hide');
                                $('#userstable').DataTable().destroy();
                                $("#submit_btn").val("Save");
                                btnAction = 'insert';
                                Swal.fire({
                                    title:'Updated Successfully',
                                    type:'success',
                                    showConfirmButton:false,
                                    timer:1500
                                }) 
                                loadUsers();
                            } else {
                                $("#usersForm")[0].reset();
                                $("#usersModal").modal('hide');
                                $('#userstable').DataTable().destroy();
                                $("#submit_btn").val("Save");
                                btnAction = 'insert';
                                Swal.fire({
                                    title:'Updated Successfully',
                                    type:'success',
                                    showConfirmButton:false,
                                    timer:1500
                                }) 
                                loadUsers();
                            }                
                        },
                        error: function (postData) {
                            console.log(postData);
                            if (postData.status == 200) {
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
                         
                        }
                
                
                    })
                }
            
                
            
            
});
            
            
            


    function loadUsers() {
     $("#userstable tbody").html('');
     let userData = {
         "action": "load_users"
     }
     let tableBody = '';
     let tableHead = '';
     let html = '';
     $.ajax({
         url: "../api/users.php",
         dataType: "JSON",
         method: "POST",
         data: userData,
         success: function (data) {
             let status = data.status;
             let message = data.Message;
             let img = "";
             if (status == true) {
                 tableBody += '<tr>';   
                 message.forEach(function (element) {
                     for (singleElement in element) {
                       
                         if(singleElement == 'Image'){
                             tableBody += `<td><image style="width:40px;height:40px;border-radius:50%;" src="../uploads/${element[singleElement]}">   ${element["Name"]}</td> `;
                           
                         } else if (singleElement == "Name") {
                         
                         }
                         else {
                             tableBody += `<td>${element[singleElement]}</td>`;
                         }
                     }
                     tableBody += `<td><a href="#" class=" edit_info" edit_info" title="Edit" edit_id ="${element.ID}"><i class="fa fa-edit text-info"></i></a> <a href="#"  class=" delete_info"  delete_id ="${element.ID}" ><i class="fa fa-trash text-danger"></i></a></td>
                 
                     `;
 
                     tableBody += '</tr>';
                     
 
                     // tableBody += `<td>${element['id']}</td>`;
 
                 });
 
 
                 $("#userstable thead").append(tableHead);
                 $("#userstable tbody").append(tableBody);
                 $('#userstable').DataTable({
                       
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
 
 
 $("#userstable").on('click', "a.delete_info", function (e) {
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
            deleteUser(id);
           Swal.fire({
            title:'Deleted Successfully',
            type:'success',
            showConfirmButton:false,
            timer:1500
            })     
        }
    })
     });
     function deleteUser(id) {
         let userData = {
             "action": "delete_user_info",
             "id": id
         }
         let html = '';
         $.ajax({
             url: "../api/users.php",
             dataType: "JSON",
             method: "POST",
             data: userData,
             success: function (data) {
                 let status = data.status;
                 let message = data.Message;
                 if (status == true) {   
                        // alert("Deleted Succesfully");
                        $('#userstable').DataTable().destroy();
                        loadUsers();
                 } else {
                     console.log(message);
                 }   
             },
             error: function (data) {
                 console.log(data.responseText);
             }
         })
     }

   
 $("#userstable").on('click',"a.edit_info",function(e){
    let id=$(this).attr("edit_id");
    fetch_User(id);
})

function fetch_User(id) {
    let userData = {
    "action": "fetch_user_info",
    "id": id
     }
    let html = '';
    $.ajax({
        url: "../api/users.php",
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
                    $('#username').val(element['username']);
                    $("#password").val(element['password']);
                    $("#gender").val(element['gender']);
                    $("#phone").val(element['phone']);
                    $("#btnSave").val("Update Info");
                    $("#usersModal").modal('show');
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