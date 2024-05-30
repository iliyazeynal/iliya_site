<?php
$db=mysqli_connect('localhost','root','','quiz');
if ($db) {
    echo "connected!";
}
else {
    echo "disconnected!";
}
?>