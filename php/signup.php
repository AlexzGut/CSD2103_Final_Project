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

    $insertsqlstatement = "INSERT INTO users (first_name, last_name, email, phone, date_of_birth, username, password)
                     VALUES ('$firstname', '$lastname', '$email', '$phone', '$dob', '$username', '$hashed_password')";
    mysqli_query($conn, $insertsqlstatement);
    
    $selectsqlstatementID = "SELECT id FROM users WHERE username = '$username'";
    $ID = mysqli_query($conn, $selectsqlstatementID);
    $IDRow = mysqli_fetch_assoc($ID);
    $IDValue = $IDRow['id'];
    $insertsqlstatementCreditCard = "INSERT INTO credit_cards (user_id)
    VALUES ('$IDValue')";
    mysqli_query($conn, $insertsqlstatementCreditCard);

    $selectsqlstatement = "SELECT * FROM users WHERE username = '$username'";
    $resultset = mysqli_query($conn, $selectsqlstatement);

    if (mysqli_num_rows($resultset) > 0) {
        $row = mysqli_fetch_assoc($resultset);

        if (password_verify($password, $row['password'])) {
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;

            $user = new User($row['first_name'], $row['last_name'], $row['email'], $row['phone'], $row['date_of_birth'], $row['address']);

            $_SESSION['JSON_USER_INFO'] = json_encode($user);

            header('location: ../index.php');
        }
      }
}
mysqli_close($conn);
?>