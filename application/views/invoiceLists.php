<?php
  
include('head.php');
include('sidebar.php');
include('navbar.php');
?>

       <!-- DataTales Example -->
<div class="row">
    <div class="col-7">
         <div class="card shadow mb-4">
            <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Invoice Lists</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive" >
            <table class="table " id="invoiceTable" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>Invoce No</th> 
                    <th>House No</th>
                    <th>Date</th> 
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
    <div class="col-5">
         <div class="card shadow mb-4">
            <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Invoice</h6>
        
        </div>
        <div class="card-body">
        <form action="" id="invoice_form" enctype="multipart/form-data">
                  <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" placeholder="invoice No" required="true" name="invoiceNO" id="invoiceNO">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="number" class="form-control" required="true" placeholder="House No" name="HouseNO" id="House_number">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <input type="date" class="form-control" required="true"  name="date" id="date">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Fullname" required="true" name="name" id="fullname">
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
                            <input type="text" class="form-control" required="true" placeholder="Distance" name="distance" id="distance"
                           >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                            <input type="number" class="form-control" required="true" placeholder="price" name="price" id="price">
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
                            <input type="number" class="form-control" required="true" placeholder="Total" name="Total" id="Total" >
                            </div>
                        </div>
                    </div>

                <div class="card-footer py-3 ">
                     <input type="button" value="Print" class="btn btn-primary" id="print">   
                    <input type="submit" value="Paid" class="btn btn-success w-50 float-right" id="btnSave">
                </div>
            </form>

<div id="PrintModal" class="modal fade">
    <div class="modal-dialog ">
        <div class="modal-content"style="width: 600px;">
            
            <div class=" text-center">
            <img src="../assets/img/w1.png" width="70" alt="Logo"/>
                <h2 class="modal-title">  Water Supply </h2>
            </div>
            <div class=" text-center">
              <h6>Tell:0618583645 | 0618583645 | Email: waterSupply@gmail.com</h6>
                <hr>
            </div>
            <form action="" id="print_invoice_form">
            <div class="modal-body " >
                  <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">Invoice No</label>
                            <input type="number" class="form-control"  required="true" name="invoiceNO" id="print_invoiceNO">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">House No</label>
                            <input type="number" class="form-control" required="true" name="HouseNO" id="print_House_number">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">Date</label>
                            <input type="date" class="form-control" required="true"  name="print_date" id="print_date">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <label for="">Fullname</label>
                            <input type="text" class="form-control" required="true" name="print_name" id="print_fullname">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">Prev KW</label>
                            <input type="number" class="form-control" required="true" name="print_prevKW" id="print_prevKW">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">New KW</label>
                            <input type="number" class="form-control" required="true" name="print_newKW" id="print_newKW">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">Distance</label>
                            <input type="text" class="form-control" required="true"  name="print_distance" id="print_distance"
                           >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">Price per KW</label>
                            <input type="number" class="form-control" required="true" name="print_price" id="print_price">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                            <label for="">x-Loan</label>
                            <input type="number" class="form-control" required="true" name="print_exloan" id="print_ex-loan">
                            </div>
                        </div>
                        <div class="col-4">
                        <div class="form-group">
                            <label for="">Total</label>
                            <input type="number" class="form-control" required="true"name="print_Total" id="print_Total" >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                           
                        </div>
                    </div>

                <div class="card-footer py-3 ">
                    <input type="button" value="Print"   onclick="printJS({
                    printable:'print_invoice_form',type:'html',header:'<h6>test</h6>'})"class="btn btn-primary">
                    <!-- <input type="submit" value="Paid" class="btn btn-success w-50 float-right" id="btnSave"> -->
                </div>
                </div>

            </form>
        </div>
    </div>
</div>
        </div>
        </div>
    </div>
</div>








<?php
include('footer.php');
?>
<script src="../js/invoicelist.js"></script>