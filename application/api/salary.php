<?php
header("Content-Type: application/json");
include('../config/conn.php');

if(isset($_POST['action'])){
    $action = $_POST['action'];
}else{
    echo "Heyeey!! error aya ka jira hakan";
}


function fill_staffs($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT * FROM staffs";
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
function load_salary($conn){
    $data = array();
    $res_data = [];
    $query = "SELECT * from salary";
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
function fetch_staffSalary($conn){
    extract($_POST);
    $data=array();
    $res_data=[];
    $query="select * from staffs where fullname='$fullname'";
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


function register_salary($conn){
    extract($_POST);
    $data = array();
    $query = "CALL salary_sp('','$date','$staffs','$salary')";
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
    echo $salary;
}

//delete function
function delete_salary($conn){
    extract($_POST);
    $data = array();
    $res_data = [];
    $query = "DELETE  FROM salary WHERE id = '$id'";
    $result = $conn->query($query);
    if($result){
           $data = array("status"=>true,"Message"=>"deletedd...");   
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}

//update function
function update_salary($conn){
    extract($_POST);
    $data = array();
    $query = "CALL salary_sp('$update_id','$date','$staffs','$salary')";
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

//this function loads the select id data from database and fills into the textbox controls
function fetch_salary($conn){
    extract($_POST);
    $data=array();
    $res_data=[];
    $query="select * from salary where id='$id'";
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