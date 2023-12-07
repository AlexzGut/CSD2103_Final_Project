<?php
session_start();

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
    $delivery_address = $_POST['newAddress'];
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
    if (!empty($delivery_address)) {
      $updates[] = "delivery_address = '$delivery_address'";
    }
    if (!empty($email)) {
      $updates[] = "email = '$email'";
    }

    if (!empty($updates)) {
      $updatesqlstatement = "UPDATE users SET " . implode(", ", $updates) . " WHERE username = '$username'";

      if ($conn->query($updatesqlstatement) === TRUE) {
        echo "Record updated successfully";
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
?>
