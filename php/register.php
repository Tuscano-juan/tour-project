<?php
include "db.php";

if (isset($_POST['register'])) {

    $fullname = mysqli_real_escape_string($conn, $_POST['fullname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $check = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $check);

    if (mysqli_num_rows($result) > 0) {
        echo "<script>alert('Email already registered');</script>";
    } else {
        $query = "INSERT INTO users (fullname, email, password)
                  VALUES ('$fullname', '$email', '$password')";

        if (mysqli_query($conn, $query)) {
            echo "<script>alert('Registration successful');</script>";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
}
?>
