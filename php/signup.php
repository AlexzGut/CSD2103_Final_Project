<?php

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
echo "Connected successfully";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = mysqli_real_escape_string($conn, $_POST['first-name']);
    $lastname = mysqli_real_escape_string($conn, $_POST['last-name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $dob = mysqli_real_escape_string($conn, $_POST['date-of-birth']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $sqlstatement = "INSERT INTO users (first_name, last_name, email, phone, date_of_birth, username, password)
                     VALUES ('$firstname', '$lastname', '$email', '$phone', '$dob', '$username', '$hashed_password')";
    mysqli_query($conn, $sqlstatement);
}
// $result = mysqli_query($conn, $sqlstatement);
// if ($result) {
//   echo "Data inserted successfully!";
// }

header('location:../html/signup.html');
mysqli_close($conn);
