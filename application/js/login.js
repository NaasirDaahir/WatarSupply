
    $("#loginForm").on('submit', function (e) {
        e.preventDefault();
        let username=$("#username").val();
        let password=$("#password").val();
        let posData={
                "action":"login",
                "username":username,
                "password":password
            }
            $.ajax({
                url:"../api/login.php",
                method:"POST",
                dataType:"JSON",
                data:posData,
                success: function(data){
                    let status=data.status;
                    let Message=data.Message; 
                    if(status==true){
                        window.location.href="../views/index.php"
                    }else{
                        Swal.fire({
                            title:Message,
                            type:'warning',
                            showConfirmButton:true,
                            // timer:1500
                        }) 
                        // alert(Message);
                    }
                },
                error:function(data){

                }


            })
  
      
});

