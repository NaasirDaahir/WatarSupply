<?php
header("Content-Type: application/json");
include('../config/conn.php');

if(isset($_POST['action'])){
    $action = $_POST['action'];
}else{
    echo "Heyeey!! error aya ka jira hakan";
}

function load_customer_invoice($conn){
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



function fill_customers($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT * FROM customers";
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


function fetch_customer_invoice($conn){
    extract($_POST);
    $data=array();
    $res_data=[];
    $query="select * from invoice where house_no='$house_no'";
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



if(isset($action)){
    $action($conn);
}

?>