<?php
header("Content-Type: application/json");
include('../config/conn.php');

if(isset($_POST['action'])){
    $action = $_POST['action'];
}else{
    echo "Heyeey!! error aya ka jira hakan";
}

function load_customers($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT house_no,fullname from customers";
    $result = $conn->query($query);
    if($result){
        $num_rows = $result->num_rows;
        if($num_rows > 0){
            while($row = $result->fetch_assoc()){
                $res_data[] = $row;
            }
           $data = array("status"=>true,"Message"=>$res_data);
        }else{
           $data = array("status"=>false,"Message"=>"Data Not Found...");
        }
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}
function load_Invoice($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT invoice_id,house_no,date,name from invoice where paid='no'";
    $result = $conn->query($query);
    if($result){
        $num_rows = $result->num_rows;
        if($num_rows > 0){
            while($row = $result->fetch_assoc()){
                $res_data[] = $row;
            }
           $data = array("status"=>true,"Message"=>$res_data);
        }else{
           $data = array("status"=>false,"Message"=>"Data Not Found...");
        }
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}
function load_Invoice_info($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT * from invoice";
    $result = $conn->query($query);
    if($result){
        $num_rows = $result->num_rows;
        if($num_rows > 0){
            while($row = $result->fetch_assoc()){
                $res_data[] = $row;
            }
           $data = array("status"=>true,"Message"=>$res_data);
        }else{
           $data = array("status"=>false,"Message"=>"Data Not Found...");
        }
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}



function register_invoice($conn){
    extract($_POST);
    $query = "SELECT SUM(total) AS 'Balance' FROM invoice WHERE name='$name'";
        $resultB = $conn->query($query);
         $balance="";
       if ($resultB){
        $rowsB=$resultB->fetch_assoc();
        $balance=$rowsB["Balance"]+$Total;
     }
    
    $data = array();
    $query = "CALL invoice_sp('','$HouseNO','$date','$name','$prevKW','$newKW','$distance','$price','$exloan','$Total','$balance','no')";
    $result = $conn->query($query);
    if($result){
       $row = $result->fetch_assoc(); 
       if($row['Message'] == "Registered"){
        $data = array("status"=> true, "Message"=> "Registered Successfully");
       }
    }else{
       $data = array("status"=>false,"Message"=>$conn->error); 
    }
     echo  json_encode($data);
}

function paid_invoice($conn){
    extract($_POST);
    $data = array();
    $query = "SELECT SUM(total) AS 'Balance' FROM invoice WHERE name='$name'";
    $resultB = $conn->query($query);
     $balance="";
   if ($resultB){
    $rowsB=$resultB->fetch_assoc();
    $balance=$rowsB["Balance"]-$Total;
 }
    $query = "CALL invoice_sp('$invoiceNO','$HouseNO','$date','$name','$prevKW','$newKW','$distance','$price','$exloan','$Total',$balance,'yes')";
    $result = $conn->query($query);
    if($result){
       $row = $result->fetch_assoc(); 
       if($row['Message'] == "Updated"){
        $data = array("status"=> true, "Message"=> "Updated Successfully");
       }
    }else{
       $data = array("status"=>false,"Message"=>$conn->error); 
    }
    echo  json_encode($data);
}

function delete_invoice($conn){
    extract($_POST);
    $data = array();
    $res_data = [];
    $query = "DELETE  FROM invoice WHERE invoice_id = '$id'";
    $result = $conn->query($query);
    if($result){
           $data = array("status"=>true,"Message"=>"deletedd...");   
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}


function update_invoice($conn){
    extract($_POST);
    $data = array();
    $query = "SELECT SUM(total) AS 'Balance' FROM invoice WHERE name='$name'";
    $resultB = $conn->query($query);
     $balance="";
   if ($resultB){
    $rowsB=$resultB->fetch_assoc();
    $balance=$rowsB["Balance"]-$Total;
 }
    $query = "CALL invoice_sp('$invoiceNO','$HouseNO','$date','$name','$prevKW','$newKW','$distance','$price','$exloan','$Total',$balance,'$paid')";
    $result = $conn->query($query);
    if($result){
       $row = $result->fetch_assoc(); 
       if($row['Message'] == "Updated"){
        $data = array("status"=> true, "Message"=> "Updated Successfully");
       }
    }else{
       $data = array("status"=>false,"Message"=>$conn->error); 
    }
    echo  json_encode($data);
}

//this function loads the select id data from database and fills into the model controls
function fetch_customer_info($conn){
    extract($_POST);
    $data=array();
    $res_data=[];
    $query="select * from customers where house_no='$id'";
    $result = $conn->query($query);
    if($result){
        $num_rows =$result->num_rows;
            if($num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $res_data[] = $row;
                }
               $data = array("status"=>true,"Message"=>$res_data);
            }else{
               $data = array("status"=>false,"Message"=>"Data Not Found...");
            }
    }else{
        $data=array("status"=>false ,"message"=>$conn->error);
    }
    echo json_encode($data);

}
function fetch_invoice($conn){
    extract($_POST);
    $data=array();
    $res_data=[];
    $query="select * from invoice where invoice_id='$id'";
    $result = $conn->query($query);
    if($result){
        $num_rows =$result->num_rows;
            if($num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $res_data[] = $row;
                }
               $data = array("status"=>true,"Message"=>$res_data);
            }else{
               $data = array("status"=>false,"Message"=>"Data Not Found...");
            }
    }else{
        $data=array("status"=>false ,"message"=>$conn->error);
    }
    echo json_encode($data);

}

//load paid invoices lis
function load_paid_list($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT * FROM invoice where paid='yes'";
    $result = $conn->query($query);
    if($result){
        $num_rows = $result->num_rows;
        if($num_rows > 0){ 
            while($row = $result->fetch_assoc()){
                $res_data[] = $row;
            }
           $data = array("status"=>true,"Message"=>$res_data);
        }else{
           $data = array("status"=>false,"Message"=>"Data Not Found...");
        }
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}

//load Unpaid invoice list
function load_Unpaid_list($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT * FROM invoice where paid='no'";
    $result = $conn->query($query);
    if($result){
        $num_rows = $result->num_rows;
        if($num_rows > 0){ 
            while($row = $result->fetch_assoc()){
                $res_data[] = $row;
            }
           $data = array("status"=>true,"Message"=>$res_data);
        }else{
           $data = array("status"=>false,"Message"=>"Data Not Found...");
        }
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}







if(isset($action)){
    $action($conn);
}

?>