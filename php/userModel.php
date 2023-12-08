<?php
class User {
    public $firstname;
    public $lastname;
    public $email;
    public $phone;
    public $dob;
    public $address;

    function __construct($firstname, $lastname, $email, $phone, $dob, $address) {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->phone = $phone;
        $this->dob = $dob;
        $this->address = $address;
    }
}
?>