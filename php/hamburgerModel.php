<?php
class Hamburger {
    public $name;
    public $description;
    public $image;
    public $price;

    function __construct($name, $description, $image, $price) {
        $this->name = $name;
        $this->description = $description;
        $this->image = $image;
        $this->price = $price;
    }
}
?>