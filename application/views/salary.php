<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>



<!-- Page Heading -->


       <!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Salary Table</h6>
    <form action=""id="salaryForm">
        <div class="row mt-4">
                <div class="col-3">
                    <div class="form-group">
                        <input type="hidden"name="update_id"id="update_id">
                        <input type="date" name="date" id="date" required="true" class="form-control">
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <select class="form-control" name="staffs" required="true" id="staffs" required="true">
                        </select>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <input class="form-control" type="number" required="true" name="salary" id="salary" disabled>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                    <input type="submit" value="Save" class="btn btn-success w-100 " id="btnSave">
                    </div>
                </div> 
        </div>
    </form>
  </div>
  <div class="card-body">
    <div class="table-responsive" >
      <table class="table " id="salaryTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Fullname</th>
              <th>Salary</th>
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
<script src="../js/salary.js"></script>