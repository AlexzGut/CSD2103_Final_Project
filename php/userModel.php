<?php
class User {
    public $firstname;
    public $lastname;
    public $email;
    public $phone;
    public $dob;

    function __construct($firstname, $lastname, $email, $phone, $dob) {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->phone = $phone;
        $this->dob = $dob;
    }
}
?>