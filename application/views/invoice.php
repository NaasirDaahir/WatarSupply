<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>



<!-- Page Heading -->
<!-- <div id="customersModal" class="modal fade">
    <div class="modal-dialog ">
        <div class="modal-content"style="width: 600px;">
            <div class="modal-header">
                <h2 class="modal-title">Customers Manager</h2>
            </div>
            <form action="" id="customers_form" enctype="multipart/form-data">
                <div class="modal-body " >
                  <div class="alert alert-success" id="sucessMessage" role="alert" style="display:none;">     
                  </div>
                  <div class="alert alert-danger" id="errorMessage" role="alert" style="display:none;"> 
                  </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input type="hidden"name="update_id"id="update_id">
                            <input type="text" class="form-control" placeholder="Fullname"  name="name" id="name">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                          <input type="number" class="form-control"placeholder="Phone" name="Phone" id="Phone"><br>
                          <input type="text" class="form-control"placeholder="District" name="District" id="District"><br>
                          <input type="text" class="form-control"placeholder="Village"  name="Village" id="Village"><br>

                          </div>
                          <div class="col-6">
                          <select name="gender" id="gender" class="form-control">
                              <option value="0">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                          </select><br>
                          <input type="text" class="form-control"placeholder="Sector" name="Sector" id="Sector"><br>
                          <input type="text" class="form-control"placeholder="House No" name="houseNo" id="houseNo"><br>

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
</div> -->

       <!-- DataTales Example -->
<div class="row">
   
    <div class="col-6">
         <div class="card shadow mb-4">
            <div class="card-header py-3">
                 <h6 class="m-0 font-weight-bold text-primary">Invoice</h6>
            </div>
        <div class="card-body">
        <form action="" id="invoice_form" name="invoice_form">
                  <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="invoice No" name="invoiceNO" id="invoiceNO" disabled ="true">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="House No" required="true" name="HouseNO" id="House_number">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="date" class="form-control" value="<?php echo Date("Y-m-d")?>" name="date" id="date" required="true">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Fullname"  required="true" name="name" id="fullname">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" required="true" placeholder="Prev KW" name="prevKW" id="prevKW">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" required="true" placeholder="New KW" name="newKW" id="newKW">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="text" class="form-control" required="true" placeholder="Distance" name="distance" id="distance" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                            <input type="float" class="form-control" required="true" placeholder="price" name="price" id="price">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                            <input type="number" class="form-control" required="true" placeholder="Ex-Loan" name="exloan" id="ex-loan">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input type="number" class="form-control" required="true" placeholder="Total" name="Total" id="Total"  >
                            </div>
                        </div>
                    </div>

              
                    <input type="submit" value="Save" class="btn btn-success w-50 float-right" id="btnSave">
               
            </form>
        </div>
        </div>
    </div>
    <div class="col-6">
         <div class="card shadow mb-4">
            <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Customers Table</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive" >
            <table class="table " id="customersTable" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>House No</th>
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








<?php
include('footer.php');
?>
<script src="../js/invoice.js"></script>