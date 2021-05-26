<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>
<div class="">


    <div id="usersModal" class="modal fade">
        <div class="modal-dialog ">
            <div class="modal-content"style="width: 600px;">
                <div class="modal-header">
                    <h2 class="modal-title">Users Manager</h2>
                    
                </div>
                <form action="" id="usersForm" enctype="multipart/form-data">
                    <div class="modal-body " >
                    <div class="alert alert-success" id="sucessMessage" role="alert" style="display:none;">     
                    </div>
                    <div class="alert alert-danger" id="errorMessage" role="alert" style="display:none;"> 
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <input type="hidden"name="update_id"id="update_id">
                    
                                <!-- <img class="img-profile rounded-circle" src="../uploads/" id="img" name="img"> -->
                                <!-- <img src=""  alt="user iamge"> -->
                                <input type="text" class="form-control" placeholder="Fullname" id="name" name="name" required="true"><br>
                             
                                <input type="text" class="form-control" placeholder="Username" name="username" id="username"required="true"><br>
                                <input type="password" class="form-control" placeholder="Password"name="password" id="password" required="true"><br>
                                <select name="gender" id="gender" class="form-control">
                                    <option value="0">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select><br>
                                <input type="number" class="form-control"placeholder="Phone" id="phone" name="phone"><br>
                                <div class="form-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" name="image" >
                                        <label class="custom-file-label" for="customFile">Choose Image</label>
                                    </div>
                                </div>
                                

                            </div>
                           
                         
                        </div>
                        </div>
                    </div>
                    
                        
                    <div class="modal-footer">
                        <input type="submit" value="Save" class="btn btn-success" id="btnSave">
                        <input type="button" value="Close" class="btn btn-info" id="close_modal">
                    </div>
                </form>
            </div>
        </div>
    </div>


       <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Users Table </h6>
            <button type="button" class="btn btn-primary btn-icon-split btn-sm float-right mt-n4"> 
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span><span class="text" id="adduser" value="Add Student">Register User </span>
            </button>
         
        </div>
        <div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <table id="userstable" class="table table-bordered dt-responsive nowrap" style="border-collapse:          collapse; border-spacing: 0; width: 100%;">
                        <thead>                   
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Fullname</th>
                            <th>Action</th>
                    </tr> 
                        </thead>
                        <tbody>                                                  
                        </tbody>
                </table>
            </div>
        </div>
    </div>                       
</div>
</div>



</div>






<?php
include('footer.php');
?>
<script src="../js/users.js"></script>