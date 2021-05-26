<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>



<!-- Page Heading -->
  <div id="staffsModal" class="modal fade">
    <div class="modal-dialog ">
      <div class="modal-content"style="width: 600px;">
        <div class="modal-header">
          <h2 class="modal-title">Staffs Manager</h2>
        </div>
        <form action="" id="staffs_form" enctype="multipart/form-data">
                <div class="modal-body " >
                  <div class="alert alert-success" id="sucessMessage" role="alert" style="display:none;">     
                  </div>
                  <div class="alert alert-danger" id="errorMessage" role="alert" style="display:none;"> 
                  </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                              <input type="hidden"name="update_id"id="update_id">
                              <input type="text" class="form-control" placeholder="Fullname" required="true" name="name" id="name">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <select name="gender" id="gender" class="form-control">
                                <option value="0">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <input type="number" class="form-control"placeholder="Phone" required="true" name="Phone" id="Phone"><br>
                        </div>
                    </div>
                    <div class="row">
                            <div class="col">
                              <input type="text" class="form-control"placeholder="Address" required="true" name="address" id="address"><br>
                              <input type="text" class="form-control"placeholder="Tilte" required="true" name="title" id="title"><br>
                            </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <input type="number" class="form-control"placeholder="Salary" required="true" name="salary" id="salary"><br>
                      </div>
                      <div class="col-6">
                        <input type="date" class="form-control"  name="date" required="true" id="date"><br>
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
    <h6 class="m-0 font-weight-bold text-primary">Staffs Table</h6>
    <button type="button" class="btn btn-primary btn-icon-split btn-sm float-right mt-n4"> 
        <span class="icon text-white-50">
           <i class="fas fa-user"></i>
          </span><span class="text" id="addStaff" value="addStaff">Register Staff</span>
      </button>

  </div>
  <div class="card-body">
    <div class="table-responsive" >
      <table class="table " id="staffsTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Title</th>
              <th>Salary</th>
              <th>Join Date</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  </div>
</div>







<?php
include('footer.php');
?>
<script src="../js/staffs.js"></script>