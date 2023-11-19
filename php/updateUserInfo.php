<?php
session_start();
if (session_status() == PHP_SESSION_ACTIVE) {
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
        $username = $_SESSION['username'];
        $updatesqlstatement = "UPDATE users SET x WHERE username = '$username'";
        if ($conn->query($updatesqlstatement) === TRUE) {
            echo "Record updated successfully";
          } else {
            echo "Error updating record: " . $conn->error;
          }
    } else {
        header('location: ../html/signin.html');
    }
}
mysqli_close($conn);