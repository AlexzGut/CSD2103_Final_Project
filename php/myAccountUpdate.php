<?php
session_start();
require 'userModel.php';
if (session_status() == PHP_SESSION_ACTIVE) {
  $servername = "localhost";
  $username = "web";
  $password = "web";
  $dbname = "registration";

  $conn = mysqli_connect($servername, $username, $password, $dbname);

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_SESSION['username'];

    $first_name = $_POST['newfName'];
    $last_name = $_POST['newlName'];
    $phone = $_POST['newNumber'];
    $address = $_POST['newAddress'];
    $email = $_POST['newEmail'];

    $updates = [];
    if (!empty($first_name)) {
      $updates[] = "first_name = '$first_name'";
    }
    if (!empty($last_name)) {
      $updates[] = "last_name = '$last_name'";
    }
    if (!empty($phone)) {
      $updates[] = "phone = '$phone'";
    }
    if (!empty($address)) {
      $updates[] = "address = '$address'";
    }
    if (!empty($email)) {
      $updates[] = "email = '$email'";
    }

    if (!empty($updates)) {
      $updatesqlstatement = "UPDATE users SET " . implode(", ", $updates) . " WHERE username = '$username'";

      if ($conn->query($updatesqlstatement) === TRUE) {

        $sqlstatement = "SELECT * FROM users WHERE username = '$username'";
        $resultset = mysqli_query($conn, $sqlstatement);

        if (mysqli_num_rows($resultset) > 0) {
          $row = mysqli_fetch_assoc($resultset);

          $user = new User($row['first_name'], $row['last_name'], $row['email'], $row['phone'], $row['date_of_birth'], $row['address']);

          echo json_encode($user);
        } else {
          echo "Error updating record: " . $conn->error;
        }
      } else {
        echo "No fields to update.";
      }
    } else {
      header('location: ../html/signin.html');
    }

    mysqli_close($conn);
  }
}
