<?php
require 'hamburgerModel.php';

$servername = "localhost";
$username = "web";
$password = "web";
$dbname = "products";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


//echo $filtervalue;

if (empty($_POST['name'])) {
    $sqlstatement = "SELECT * FROM hamburgers";
} else {
    $filtervalue = $_POST['name'];
    $sqlstatement = "SELECT * FROM hamburgers WHERE name LIKE '%$filtervalue%'";
}

$resultset = mysqli_query($conn, $sqlstatement);

$products = array();

if (mysqli_num_rows($resultset) > 0) {

    while($row = mysqli_fetch_assoc($resultset)) {

        $product = new Hamburger($row['name'], $row['description'], $row['image'], $row['price']);

        array_push($products, $product);
    }

    echo json_encode($products);

    } 
    
mysqli_close($conn);
?>