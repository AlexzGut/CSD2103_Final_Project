<?php
// Start the session
if (session_status() !== PHP_SESSION_ACTIVE) {
  session_start();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Hamburguers</title>
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/index.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script>
    var JSON_USER_INFO = '<?php if (session_status() == PHP_SESSION_ACTIVE) {
                            echo $_SESSION['JSON_USER_INFO'] ?? null;
                          } ?>';
  </script>
  <script src="js/header.js"></script>
  <script src="js/index.js"></script>
</head>

<body>

  <header>
    <div id="header-wrapper">
      <nav>
        <img src="img/icons/menu-icon.svg" alt="menu" id="menu-mobile" class="white-icon">
        <ul id="header-list">
          <li><a href="../html/menu.html">Menu</a></li>
          <li><a href="../html/contact-us">Contact Us</a></li>
          <li><a href="#">Locations</a></li>
        </ul>
      </nav>
      <a href="/" id="brand">
        <h1>Hamburguers</h1>
      </a>
      <div id="header-icons">
        <a href="html/signin.html" id="user-link"><img class="white-icon" src="img/icons/user-icon.svg" alt="sign in icon" width="20">
          <p id="user-name">Sign In</p>
        </a>
        <div id="cart">
          <a href="#"><img class="white-icon" src="img/icons/cart-icon.svg" alt="sign in icon" width="20"></a>
        </div>
      </div>
    </div>
  </header>

  <section id="hero">
    <picture>
      <source media="(min-width: 990px)" srcset="img/hero/burger-hero-desktop.webp">
      <source media="(min-width: 481px)" srcset="img/hero/burger-hero-mobile.jpg">
      <img src="img/hero/burger-hero-mobile.jpg" alt="">
    </picture>
  </section>
</body>

</html>