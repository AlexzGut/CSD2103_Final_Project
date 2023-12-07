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

        $creditcardNumber = $_POST['creditcardNumber'];
        $creditcardExpiry = $_POST['creditcardExpiry'];
        $creditcardVerification = $_POST['creditcardVerification'];

        function validateCreditCard($cardNumber) {
            return is_numeric($cardNumber) && strlen($cardNumber) === 16;
        }

        function validateExpiry($expiryDate) {
            $pattern = '/^(0[1-9]|1[0-2])\/[0-9]{2}$/';
            return preg_match($pattern, $expiryDate);
        }

        function validateCVV($cvv) {
            return is_numeric($cvv) && (strlen($cvv) === 3 || strlen($cvv) === 4);
        }

        if (validateCreditCard($creditcardNumber) && validateExpiry($creditcardExpiry) && validateCVV($creditcardVerification)) {
            $updateCreditCard = "UPDATE credit_cards SET 
                            card_number = '$creditcardNumber', 
                            expiry_date = '$creditcardExpiry', 
                            cvv = '$creditcardVerification'
                            WHERE user_id = (SELECT id FROM users WHERE username = '$username')";

            if ($conn->query($updateCreditCard) === TRUE) {
                echo "Credit card information updated successfully";
            } else {
                echo "Error updating credit card information: " . $conn->error;
            }
        } else {
            echo "Invalid credit card information.";
        }
    } else {
        header('location: ../html/signin.html');
    }

    mysqli_close($conn);
}
?>
