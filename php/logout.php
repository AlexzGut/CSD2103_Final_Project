<?php
session_start();
if (session_status() == PHP_SESSION_ACTIVE) {
    $_SESSION = [];
  }

  header('location: ../index.php');
?>