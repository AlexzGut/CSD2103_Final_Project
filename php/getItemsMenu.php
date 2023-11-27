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

$sqlstatement = "SELECT * FROM hamburgers";
$resultset = mysqli_query($conn, $sqlstatement);

$products = array();

if (mysqli_num_rows($resultset) > 0) {

    while($row = mysqli_fetch_assoc($resultset)) {

        $product = new Hamburger($row['name'], $row['description'], $row['image'], $row['price']);

        array_push($products, $product);
    }

    $productInfo = json_encode($products);
    echo ("<script> localStorage.setItem('productInfo', '$productInfo'); </script>");
    echo("<script>window.location = '../html/menu.html';</script>");

    } 
    
mysqli_close($conn);