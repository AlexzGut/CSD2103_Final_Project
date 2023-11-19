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

    function set_firstname($firstname) {
        $this->firstname;
    }

    function set_lastname($lastname) {
        $this->lastname;
    }

    function set_email($email) {
        $this->email;
    }

    function set_phone($phone) {
        $this->phone;
    }

    function set_dob($dob) {
        $this->dob;
    }

    function get_firstname() {
        return $this->firstname;
    }

    function get_lastname() {
        return $this->lastname;
    }

    function get_email() {
        return $this->email;
    }

    function get_phone() {
        return $this->phone;
    }

    function get_dob() {
        return $this->dob;
    }
}
?>