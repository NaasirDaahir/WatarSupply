<?php
include('head.php');
include('sidebar.php');
include('navbar.php');
?>

<style>
.headerimage{
    background:url("../assets/img/head.jpg");
    width:100%;
    height:250px;
    background-repeat:no-repeat;
    background-size:cover;
    margin:0;
}
#profileimg{
    height:200px;
    width:200px;
    padding:10px;
    margin-top:12%;
   
}
#name{
    margin-top:8%;
    margin-left:3%;
    color:black;
    font-weight:bold
}
#name2{
   
    color:gray;
    font-weight:normal
}
</style>

 <!-- Page Heading -->
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Profile</h1>
          
          </div>
        
          <!-- Content Row -->
          <div class="row">
          <div class="col-xl-12 col-md-12 mb-12 ">
         <div class="headerimage" >
              <img src="../uploads/<?php  echo $_SESSION['image']?>"  class="rounded-circle" id="profileimg" alt="" >
             </div>
             <h4 id="name">Name: <span id="name2"><?php  echo $_SESSION['username']; ?></span></h4>
          </div>

         </div>
       
         <form >
          <div class="row mt-4">
          <div class="col-sm-12">
          <div class="card">
          <div class="card-header text-center">
          Profile information
          </div>
          <div class="card-body text-center">
          <div class="form-group">
          <input type="text" name="" placeholder="Enter Fullname" value="<?php  echo $_SESSION['name']; ?>" class="form-control" id="" > 
          </div>
          <div class="form-group">
          <input type="text" name="" placeholder="Enter Name" value="<?php  echo $_SESSION['username']; ?>" class="form-control" id="">
          </div>
          <div class="form-group">
          <select name="gender" id="gender" class="form-control">
           <option value="0"><?php  echo $_SESSION['gender']; ?></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
         </select>
          </div>

          <div class="form-group">
          <input type="password" class="form-control" placeholder="Password"name="password" id="password" required="true" value="<?php  echo $_SESSION['password']; ?>">
          </div>

          <div class="form-group">
          <input type="number" class="form-control"placeholder="Phone" id="phone" name="phone" value="<?php  echo $_SESSION['phone']; ?>">
          </div>
          <div class="form-group">
                                  
          </div>
        
          </div>
          </div>
          </div>
          
          </form>
          <!-- Content Row -->

          




<?php
include('footer.php');

?>
<script src="../js/dashboard.js"></script>