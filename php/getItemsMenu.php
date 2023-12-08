<?php
require 'productModel.php';

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

if ($_POST['tab'] == 'all') {
    if (empty($_POST['name'])) {
        $sqlstatement = "SELECT * FROM products ORDER BY name";
    } else {
        $filtervalue = mysqli_real_escape_string($conn, $_POST['name']);
        $sqlstatement = "SELECT * FROM products WHERE name LIKE '%$filtervalue%'";
    }
} else {
    $tab = mysqli_real_escape_string($conn, $_POST['tab']);
    if (empty($_POST['name'])) {
        $sqlstatement = "SELECT * FROM products WHERE type = '$tab' ORDER BY name";
    } else {
        $filtervalue = mysqli_real_escape_string($conn, $_POST['name']);
        $sqlstatement = "SELECT * FROM products WHERE type = '$tab' AND name LIKE '%$filtervalue%'";
    }
}

$resultset = mysqli_query($conn, $sqlstatement);

$products = array();

if (mysqli_num_rows($resultset) > 0) {

    while ($row = mysqli_fetch_assoc($resultset)) {

        $product = new Product($row['name'], $row['description'], $row['image'], $row['price'], $row['type']);

        array_push($products, $product);
    }

    echo json_encode($products);
}

mysqli_close($conn);
