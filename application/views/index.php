<?php
include('head.php');
include('sidebar.php');
include('navbar.php');
?>

 <!-- Page Heading -->
 <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          
          </div>
        
          <!-- Content Row -->
          <div class="row">

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4 ">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body bg-warning">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-light text-uppercase mb-1">Total Customers</div>

                        <?php
                            include('../config/conn.php');
                            $query = "SELECT id from customers order by id";
                            $result = $conn->query($query);
                            $num_rows = $result->num_rows;
                            echo'<h1 class="text-light">'.$num_rows.'</h1>'
                        ?>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-users fa-2x text-light"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body bg-primary">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-light text-uppercase mb-1">Total Users</div>
                      <?php
                            include('../config/conn.php');
                            $query = "SELECT id from users order by id";
                            $result = $conn->query($query);
                            $num_rows = $result->num_rows;
                            echo'<h1 class="text-light">'.$num_rows.'</h1>'
                        ?>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-user fa-2x text-light"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body bg-dark">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-light text-uppercase mb-1">Invoices</div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                        <?php
                            include('../config/conn.php');
                            $query = "SELECT invoice_id from invoice order by invoice_id";
                            $result = $conn->query($query);
                            $num_rows = $result->num_rows;
                            echo'<h1 class="text-light">'.$num_rows.'</h1>'
                        ?>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-light"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body bg-info">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-light text-uppercase mb-1">Staffs</div>
                      <?php
                            include('../config/conn.php');
                            $query = "SELECT id from staffs order by id";
                            $result = $conn->query($query);
                            $num_rows = $result->num_rows;
                            echo'<h1 class="text-light">'.$num_rows.'</h1>'
                        ?>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-fw fa-tools fa-2x text-light"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Row -->

          

<div class="row">
<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Water Usage Calculating </h5>
                                <div class="card-body">
                                    <div id="morris_udateing"></div>
                                </div>
                            </div>
                        </div>


                   
                        

</div>


<?php
include('footer.php');

?>
<script src="../js/dashboard.js"></script>
<script src="../assets/morris-bundle/raphael.min.js"></script>
 <script src="../assets/morris-bundle/morris.js"></script>
 <script src="../assets/morris-bundle/Morrisjs.js"></script>