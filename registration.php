<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "login_system";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = md5($_POST['password']); // Hash the password to match the DB

    $sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<script>alert('You are successfully logged in');</script>";
    } else {
        echo "<script>alert('Wrong login credentials! Kindly retry');</script>";
    }
}
?>
