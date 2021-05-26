$(document).ready(function(){   
         
    // load_customers_invoice();
   
    fillcustomers();
    fetch_customer_invioce();
    // fetch_customer_invioce(houseNo);
     function load_customers_invoice() {
       $("#InvoiceReortTbale tbody").html('');
       let userData = {
           "action": "load_customer_invoice"
       }
       let tableBody = '';
       let html = '';
       $.ajax({
           url: "../api/customer_rep.php",
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
                      tableBody += '</tr>';
                   });
                  $("#InvoiceReortTbale tbody").append(tableBody);
                $('#InvoiceReortTbale').DataTable({
           
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
   
   $("#customers").on('change',function(){
    let house_no=$("#customers").val();
    $('#InvoiceReortTbale').DataTable().destroy();
    
    fetch_customer_invioce(house_no);
    })

    function fetch_customer_invioce(house_no) {
        let userData = {
        "action": "fetch_customer_invoice",
        "house_no": house_no
         }
        let html = '';
        $.ajax({
            url: "../api/customer_rep.php",
            dataType: "JSON",
            method: "POST",
            data: userData,
            success: function (data) {
                let status = data.status;
                let message = data.Message;
                if (status == true) {
                  
                    tableBody = '<tr>';
                    message.forEach(function (element) {
                       for(singleElement in element){
                          tableBody += `<td>${element[singleElement]}</td>`;
                       }
                       tableBody += '</tr>';
                    });
                  
                 
                   $("#InvoiceReortTbale tbody").append(tableBody);
                 $('#InvoiceReortTbale').DataTable({
            
                 });
                 $("#InvoiceReortTbale").clear;
                    // $("#InvoiceReortTbale").DataTable().clear;
                } else {
                    console.log(message);
                }
            },
            error: function (data) {
                console.log(data.responseText);
            }
        })
        }
     

    function fillcustomers() {
    let userData = {
        "action": "fill_customers"
    }
    let html = '';
    $.ajax({
        url: "../api/customer_rep.php",
        dataType: "JSON",
        method: "POST",
        data: userData,
        success: function (data) {
            let status = data.status;
            let message = data.Message;
            if (status == true) {
                html += `<option value="0">Select Customer</option>`;
                message.forEach(function (element) {
                    html += `<option value="${element['house_no']}">${element['fullname']}</option>`;
                });
                $("#customers").html(html);

            } else {
                console.log(message);
            }
        },
        error: function (data) {
            console.log(data.responseText);
        }
    })
    }

 
       






    

   
 

// function fetch_customer(id) {
//     let userData = {
//     "action": "fetch_customer_info",
//     "id": id
//      }
//     let html = '';
//     $.ajax({
//         url: "../api/customers.php",
//         dataType: "JSON",
//         method: "POST",
//         data: userData,
//         success: function (data) {
//             let status = data.status;
//             let message = data.Message;
//             if (status == true) {
//                 message.forEach(function (element) {
//                     btnAction = "Update";
//                     $("#update_id").val(element['id']);
//                     $('#name').val(element['fullname']);
//                     $('#Phone').val(element['phone']);
//                     $("#gender").val(element['gender']);
//                     $("#District").val(element['district']);
//                     $("#Village").val(element['village']);
//                     $("#Sector").val(element['sector']);
//                     $("#houseNo").val(element['house_no']);
//                     $("#btnSave").val("Update Info");
//                     $("#customersModal").modal('show');
//                 });
//             } else {
//                 console.log(message);
//             }
//         },
//         error: function (data) {
//             console.log(data.responseText);
//         }
//     })
// }
 
 });