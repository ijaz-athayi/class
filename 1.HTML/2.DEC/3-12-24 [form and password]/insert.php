<?php
// Check if all fields are set
if (!empty($_POST['name']) && !empty($_POST['age']) && !empty($_POST['mobile']) && !empty($_POST['email']) && !empty($_POST['city'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $city = $_POST['city'];

    // Database connection
    $host = "localhost";
    $dbUsername = "ijaz";
    $dbPassword = "ijaz";
    $dbname = "ijaz_login_page";

    // Create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die('Connect error (' . $conn->connect_errno . ')' . $conn->connect_error);
    } else {
        // Prepare select statement
        $SELECT = "SELECT email FROM register WHERE email = ? LIMIT 1";
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($result);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum == 0) {
            // Prepare insert statement
            $insert = "INSERT INTO register (name, age, mobile, email, city) VALUES (?, ?, ?, ?, ?)";
            $stmt->close();
            $stmt = $conn->prepare($insert);
            $stmt->bind_param("siiss", $name, $age, $mobile, $email, $city);
            $stmt->execute();
            echo "New record inserted successfully";
        } else {
            echo "Someone already registered with this email";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>
