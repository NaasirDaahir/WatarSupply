$(document).ready(function(){   
             
    loadCustomers();
    
    $("#newKW").on('blur',function(){
         var oldKW=$("#prevKW").val();
         var newKW=$("#newKW").val();
        var distance=parseInt(newKW)-parseInt(oldKW);
        $("#distance").val(distance);

        $("#ex-loan").on('blur',function(){
            var Exloan=$("#ex-loan").val();         
            var price=$("#price").val();         
            var total=parseInt(price)*parseInt(distance)+parseInt(Exloan);
            $("#Total").val(total);
        })
    })
    





     function loadCustomers() {
       $("#customersTable tbody").html('');
       let userData = {
           "action": "load_customers"
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
                      tableBody += `<td><a class="btn btn-primary edit_info"  edit_id="${element.house_no}"><i class="fas fa-file-invoice-dollar text-white"></i></a> 
                      </td>`;
                      tableBody += '</tr>';
                   });
                  $("#customersTable tbody").append(tableBody);
                $('#customersTable').DataTable({
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
   

   

 
 
    $("#invoice_form").on('submit', function (e) {
                e.preventDefault();
                let formData = new FormData($("#invoice_form")[0]);
                formData.append('action','register_invoice');
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
                    $('#fullname').val(element['fullname']);
                    $("#House_number").val(element['house_no']);
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