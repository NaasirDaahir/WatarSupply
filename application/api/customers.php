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
    $query = "SELECT id,fullname,gender,phone ,district,sector,village,house_no from customers";
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


function register_customer($conn){
    extract($_POST);
    $data = array();
    $query = "CALL customers_sp('','$name','$gender','$Phone','$District','$Sector','$Village','$houseNo')";
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
// function register_customer($conn){
//     extract($_POST);
//     $data = array();
//     $query = "CALL customers_sp('','$fullname','$gender','$Phone','$district','$sector','$village,houseNo')";
//     // $query ="INSERT INTO students_tbl(std_id,std_name,class_id,phone,image)VALUES('$newId','$name',$class,$phone,'$new_user_id')";
//      $result = $conn->query($query);
//      $row='';
//     if($result){
//         $data = array("status"=> true, "Message"=> "Registered Successfully");
//          }
//     echo  json_encode($data);
// }

//generate id functionflutere
// function genId($conn){
//     $data = array();
//     $res_data = [];
//     $query = "SELECT `std_id` FROM `students_tbl` ORDER BY std_id DESC LIMIT 1";
//     $result = $conn->query($query);
//     if($result){
//         $num_rows = $result->num_rows;
//         if($num_rows > 0){
//             $row = $result->fetch_assoc();
//              $newId =  $row['std_id'];
//              return ++$newId;
//         }else{
//              return "C117001";
//         }
//     }else{
//          $data = array("status"=>false,"Message"=>$conn->error);
//     }
// }
//delete function
function delete_customer($conn){
    extract($_POST);
    $data = array();
    $res_data = [];
    $query = "DELETE  FROM customers WHERE id = '$id'";
    $result = $conn->query($query);
    if($result){
           $data = array("status"=>true,"Message"=>"deletedd...");   
    }else{
        $data = array("status"=>false,"Message"=>$conn->error);
    }
    echo json_encode($data);
}

//update function
function update_customer($conn){
    extract($_POST);
    $data = array();
    $query = "CALL customers_sp('$update_id','$name','$gender','$Phone','$District','$Sector','$Village','$houseNo')";
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
    $query="select * from customers where id='$id'";
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




// function stdCount($conn){
//     extract($_POST);
//     $data=array();
//     $res_data=[];
//     $query="SELECT COUNT(*)  FROM  users";
//     $result = $conn->query($query);
//     if($result){
    
//     $data = array("status"=>true,"Message"=>$res_data);
//     print_r($res_data);
           
//     }else{
//         $data=array("status"=>false ,"message"=>$conn->error);
//     }
//     echo json_encode($data);

//  }




if(isset($action)){
    $action($conn);
}

?>