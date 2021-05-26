<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>



<!-- Page Heading -->
  <div id="expensemodal" class="modal fade">
    <div class="modal-dialog ">
      <div class="modal-content"style="width: 600px;">
        <div class="modal-header">
          <h2 class="modal-title">Expense Manager</h2>
        </div>
        <form action="" id="expense_form" enctype="multipart/form-data">
                <div class="modal-body " >
                  <div class="alert alert-success" id="sucessMessage" role="alert" style="display:none;">     
                  </div>
                  <div class="alert alert-danger" id="errorMessage" role="alert" style="display:none;"> 
                  </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                              <input type="hidden"name="update_id"id="update_id">
                              <input type="text" class="form-control" placeholder="Fullname" required="true" name="name" id="name"><br>
                              <input type="number" class="form-control"placeholder="amount" required="true" name="amount" id="amount"><br>
                              <input type="date" class="form-control" name="date" required="true" id="date"><br>
                              <textarea  class="form-control"placeholder="discription" required="true" name="discription" id="discription" cols="10" required="true" rows="3"></textarea>
                           
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
    <h6 class="m-0 font-weight-bold text-primary">Expense Table</h6>
    <button type="button" class="btn btn-primary btn-icon-split btn-sm float-right mt-n4"> 
        <span class="icon text-white-50">
           <i class="fas fa-plus"></i>
          </span><span class="text" id="addExpense" value="addExpense">Add Expense</span>
      </button>

  </div>
  <div class="card-body">
    <div class="table-responsive" >
      <table class="table " id="expenseTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
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
<script src="../js/expense.js"></script>