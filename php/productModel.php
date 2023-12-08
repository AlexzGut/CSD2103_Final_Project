<?php
class Product {
    public $name;
    public $description;
    public $image;
    public $price;
    public $type;

    function __construct($name, $description, $image, $price, $type) {
        $this->name = $name;
        $this->description = $description;
        $this->image = $image;
        $this->price = $price;
        $this->type = $type;
    }
}
?>