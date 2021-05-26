// $(document).ready(function(){   
    $("#addStaff").on('click', function (e) {
        $("#staffsModal").modal('show');
        $("#btnSave").val("Save");
    });
    $("#close_modal").on('click', function (e) {
        $("#staffsModal").modal('hide');
        $("#btnSave").val("Save");
    });

    var btnAction = 'insert';           
     loadStaffs();

     function loadStaffs() {
       $("#staffsTable tbody").html('');
       let userData = {
           "action": "load_staffs"
       }
       let tableBody = '';
       let html = '';
       $.ajax({
           url: "../api/staffs.php",
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
                      tableBody += `                     
                      
                      <td>
                      <a href="#" class=" edit_info"  edit_id="${element.id}"><i class="fa fa-pen text-info"></i> </a> 
                      
                      <a href="#"  class=" delete_info" delete_id ="${element.id}" ><i class="fa fa-trash text-danger"></i></a></td>
                                     
                      `;
                      tableBody += '</tr>';
                   });
                  $("#staffsTable tbody").append(tableBody);
                 
                $('#staffsTable').DataTable({
           
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
   
    $("#staffs_form").on('submit', function (e) {
                e.preventDefault();
                let formData = new FormData($("#staffs_form")[0]);
                formData.append('action','register_staff');
                if(btnAction == "insert"){
                    $.ajax({
                        url: "../api/staffs.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            let status = data.status;
                            let message = data.Message;  
                            if (status == true) {
                                $("#staffs_form")[0].reset();
                                $("#staffsModal").modal('hide');
                                $('#staffsTable').DataTable().destroy();
                                loadStaffs();
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
                    let formData = new FormData($("#staffs_form")[0]);
                    formData.append('action','update_staff');
                    $.ajax({ 
                        url: "../api/staffs.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (formData) {
                            let status = formData.status;
                            let message = formData.Message;
                
                            if (status == true) {
                                $("#staffs_form")[0].reset();
                                $("#staffsModal").modal('hide');
                                $('#staffsTable').DataTable().destroy();
                                loadStaffs();
                                $("#submit_btn").val("Save");
                                btnAction = 'insert';
                                Swal.fire({
                                    title:' Updated Successfully',
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

 
    $("#staffsTable").on('click', "a.delete_info", function (e) {
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
            delteStaff(id);
           Swal.fire({
            title:'Deleted Successfully',
            type:'success',
            showConfirmButton:false,
            timer:1500
            })     
        }
    })
     });
     function delteStaff(id) {
         let userData = {
             "action": "delete_staff",
             "id": id
         }
         let html = '';
         $.ajax({
             url: "../api/staffs.php",
             dataType: "JSON",
             method: "POST",
             data: userData,
             success: function (data) {
                 let status = data.status;
                 let message = data.Message;
                 if (status == true) {   
                        // alert("Deleted Succesfully");
                        $('#staffsTable').DataTable().destroy();
                        loadStaffs();
                 } else {
                     console.log(message);
                 }   
             },
             error: function (data) {
                 console.log(data.responseText);
             }
         })
     }

   
    $("#staffsTable").on('click',"a.edit_info",function(e){
    let id=$(this).attr("edit_id");
    fetch_staff(id);
    })

    function fetch_staff(id) {
    let userData = {
    "action": "fetch_staff",
    "id": id
     }
    let html = '';
    $.ajax({
        url: "../api/staffs.php",
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
                    $("#address").val(element['address']);
                    $("#title").val(element['title']);
                    $("#salary").val(element['salary']);
                    $("#date").val(element['date']);
                    $("#btnSave").val("Update Info");
                    $("#staffsModal").modal('show');
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
 
//  });