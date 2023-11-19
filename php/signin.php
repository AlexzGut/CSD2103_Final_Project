<?php
require 'userModel.php';

$servername = "localhost";
$username = "web";
$password = "web";
$dbname = "registration";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sqlstatement = "SELECT * FROM users WHERE username = '$username'";
    $resultset = mysqli_query($conn, $sqlstatement);

    if (mysqli_num_rows($resultset) > 0) {
        $row = mysqli_fetch_assoc($resultset);

        if (password_verify($password, $row['password'])) {
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;

            $user = new User($row['first_name'], $row['last_name'], $row['email'], $row['phone'], $row['date_of_birth']);

            $_SESSION['JSON_USER_INFO'] = json_encode($user);

            header('location: ../index.php');
        } else {
            header('location: ../html/signin.html');
        }
    } else {
        header('location: ../html/signin.html');
    }
}

mysqli_close($conn);
