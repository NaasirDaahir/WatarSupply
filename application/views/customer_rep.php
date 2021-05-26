<?php
include('./head.php');
include('./sidebar.php');
include('./navbar.php');
?>

<!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Customer Invoice</h6>
                <div class="row mt-4">
                    <div class="col-9">
                        <div class="form-group">
                            <select class="form-control" name="customers" id="customers" required="true">
                            <!-- <option value="All">All</option>
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option> -->
                            </select>
                        </div>
                    </div>
                <div class="col-3">
                    <div class="form-group">
                    <input type="submit" value="Submit" class="btn btn-success w-100 " id="btnSave">
                    </div>
                </div> 
            </div>
  </div>
  <div class="card-body">
    <div class="table-responsive" >
      <table class="table " id="InvoiceReortTbale" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>Invoice ID</th>
              <th>House No</th>
              <th>Date</th>
              <th>Fullname</th>
              <th>Prev KW</th>
              <th>New KW</th>
              <th>Distance</th>
              <th>Price</th>
              <th>Ex Loan</th>
              <th>Total</th>
              <th>Paid</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  </div>
</div>


<?php
include('./footer.php');
?>
<script src="../js/customer_rept.js"></script>