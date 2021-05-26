 
    var btnAction = 'insert';           
    fillStaffs();
    loadsalary();
    
  
    $("#staffs").on('change',function(){
        let fullname=$("#staffs").val();
        fetch_salary_staff(fullname);
    })
    function fillStaffs() {
        let userData = {
            "action": "fill_staffs"
        }
        let html = '';
        $.ajax({
            url: "../api/salary.php",
            dataType: "JSON",
            method: "POST",
            data: userData,
            success: function (data) {
                let status = data.status;
                let message = data.Message;
                if (status == true) {
                    html += `<option value="0">Select Staff</option>`;
                    message.forEach(function (element) {
                        html += `<option value="${element['fullname']}">${element['fullname']}</option>`;
                    });
                    $("#staffs").html(html);

                } else {
                    console.log(message);
                }
            },
            error: function (data) {
                console.log(data.responseText);
            }
        })
        }
    
        function fetch_salary_staff(fullname) {
            let userData = {
            "action": "fetch_staffSalary",
            "fullname": fullname
             }
            let html = '';
            $.ajax({
                url: "../api/salary.php",
                dataType: "JSON",
                method: "POST",
                data: userData,
                success: function (data) {
                    let status = data.status;
                    let message = data.Message;
                    if (status == true) {
                        message.forEach(function (element) {
                            $("#salary").val(element['salary']);
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
         
        
         
     function loadsalary() {
       $("#salaryTable tbody").html('');
       let userData = {
           "action": "load_salary"
       }
       let tableBody = '';
       let html = '';
       $.ajax({
           url: "../api/salary.php",
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
                      <a class="btn  delete_info" delete_id ="${element.id}" ><i class="fa fa-trash text-danger"></i></a></td>`;
                      tableBody += '</tr>';
                   });
                  $("#salaryTable tbody").append(tableBody);
                $('#salaryTable').DataTable({
           
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

  
  
 
    $("#salaryForm").on('submit', function (e) {
                e.preventDefault();
        let formData = new FormData($("#salaryForm")[0]);
        
        formData.append('action', 'register_salary');
        formData.append("salary",$("#salary").val())
                if(btnAction == "insert"){
                    $.ajax({
                        url: "../api/salary.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            let status = data.status;
                            let message = data.Message;  
                           
                                    $("#salaryForm")[0].reset();
                                    $('#salaryTable').DataTable().destroy();
                                  
                                    Swal.fire({
                                        title:' Data Has been Saved Successfully',
                                        type:'success',
                                        showConfirmButton:false,
                                        timer:1500
                                    }) 
                             
                       
                        }
                        
                    })
                }else{
                    let formData = new FormData($("#salaryForm")[0]);
                    formData.append('action','update_salary');
                    $.ajax({ 
                        url: "../api/salary.php",
                        method: "POST",
                        dataType: "JSON",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (formData) {
                            let status = formData.status;
                            let message = formData.Message;
                            if (status == true) {
                                $("#btnSave").val("Save");
                                $("#salaryForm")[0].reset();
                                $('#salaryTable').DataTable().destroy();
                                loadsalary();
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
                            console.log(postData);
                            if (postData.status == 200) {
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
        loadsalary();
});
            
            
            
 
 $("#salaryTable").on('click', "a.delete_info", function (e) {
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
            deleteSalary(id);
           Swal.fire({
            title:'Deleted Successfully',
            type:'success',
            showConfirmButton:false,
            timer:1500
            })     
        }
    })
     });
     function deleteSalary(id) {
         let userData = {
             "action": "delete_salary",
             "id": id
         }
         let html = '';
         $.ajax({
             url: "../api/salary.php",
             dataType: "JSON",
             method: "POST",
             data: userData,
             success: function (data) {
                 let status = data.status;
                 let message = data.Message;
                 if (status == true) {   
                        // alert("Deleted Succesfully");
                        $('#salaryTable').DataTable().destroy();
                        loadsalary();
                 } else {
                     console.log(message);
                 }   
             },
             error: function (data) {
                 console.log(data.responseText);
             }
         })
     }

   
 $("#salaryTable").on('click',"a.edit_info",function(e){
    let id=$(this).attr("edit_id");
    fetch_salary(id);
})
function fetch_salary(id) {
    let userData = {
    "action": "fetch_salary",
    "id": id
     }
    let html = '';
    $.ajax({
        url: "../api/salary.php",
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
                    $('#staffs').val(element['name']);
                    $("#salary").val(element['salary']);
                    $("#date").val(element['date']);
                    $("#btnSave").val("Update Info");
                 
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
 
