<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>



<!-- Page Heading -->
<div id="invoiceModal" class="modal fade">
    <div class="modal-dialog ">
        <div class="modal-content"style="width: 600px;">
            <div class="modal-header">
                <h2 class="modal-title">Invoice Manager</h2>
            </div>
            <form action="" id="invoice_info_form" enctype="multipart/form-data">
                <div class="modal-body " >
                  <div class="alert alert-success" id="sucessMessage" role="alert" style="display:none;">     
                  </div>
                  <div class="alert alert-danger" id="errorMessage" role="alert" style="display:none;"> 
                  </div>
                  <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="invoice No" name="invoiceNO" id="invoiceNO">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="House No" name="HouseNO" id="House_number">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="date" class="form-control" value="<?php echo Date("Y-m-d")?>" name="date" id="date">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Fullname" name="name" id="fullname">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="Prev KW" name="prevKW" id="prevKW">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="New KW" name="newKW" id="newKW">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Distance" name="distance" id="distance"
                           >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="price" name="price" id="price">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="Ex-Loan" name="exloan" id="ex-loan">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                    <div class="col-6">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="Total" name="Total" id="Total" >
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                            <select name="paid" id="paid" class="form-control">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
                   
                    
                <div class="modal-footer">
                    <input type="submit" value="Update" class="btn btn-success" id="btnUpdate">
                    <input type="button" value="Close" class="btn btn-info" id="close_modal">
                </div>
            </form>
        </div>
    </div>
</div>

       <!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Invoice Information</h6>
                <div class="row mt-4">
                    <div class="col">
                        <div class="form-group">
                            <select class="form-control" name="paidState" id="paidState" required="true">
                            <option value="All">All</option>
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                            </select>
                        </div>
                    </div>
                </div>
          
  </div>
  <div class="card-body">
    <div class="table-responsive" >
      <table class="table " id="InvoiceTableInfo" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>Inv ID</th>
              <th>Hos No</th>
              <th>Date</th>
              <th>Fullname</th>
              <th>Prev KW</th>
              <th>New KW</th>
              <th>Distance</th>
              <th>Price</th>
              <th>Ex Loan</th>
              <th>Total</th>
              <th>Balace</th>
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
<script src="../js/invoice_information.js"></script>