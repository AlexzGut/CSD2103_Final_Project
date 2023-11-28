<?php
// Start the session
if (session_status() !== PHP_SESSION_ACTIVE) {
  session_start();
  $userInfo = $_SESSION['JSON_USER_INFO'] ?? 'null';
  echo "<script> localStorage.setItem('userInfo', '$userInfo'); </script>";
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
  <script src="js/header.js"></script>
  <script src="js/userInfo.js"></script>
</head>

<body>

  <header>
    <div id="header-wrapper">
      <nav>
        <img src="img/icons/menu-icon.svg" alt="menu" id="menu-mobile" class="white-icon">
        <ul id="header-list">
          <li><a href="html/menu.html">Menu</a></li>
          <li><a href="html/contact-us">Contact Us</a></li>
          <li><a href="#">Locations</a></li>
        </ul>
      </nav>
      <a href="../Final_Project/index.php" id="brand">
        <h1>Hamburgers</h1>
      </a>
      <div id="header-icons">
        <a href="html/signin.html" id="user-link"><img class="white-icon" src="img/icons/user-icon.svg" alt="sign in icon" width="20">
          <p id="user-name">Sign In</p>
        </a>
        <div id="cart">
          <a href="html/cart.html"><img class="white-icon" src="img/icons/cart-icon.svg" alt="sign in icon" width="20"></a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section id="hero">
      <picture>
        <source media="(min-width: 990px)" srcset="img/hero/burger-hero-desktop.webp">
        <source media="(min-width: 481px)" srcset="img/hero/burger-hero-mobile.jpg">
        <img src="img/hero/burger-hero-mobile.jpg" alt="">
      </picture>
    </section>

    <section id="split-body">
      <div>
        <img src="img/index/burger-1.avif" alt="">
      </div>
      <div class="desc-half">
        <div class="description">
          <h1>Burgers are everything</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati quaerat! In, maxime unde? Debitis ipsam natus cum, repellendus molestiae sapiente ab alias neque ducimus culpa nam laudantium eos corporis.</p>
        </div>
      </div>

      <div class="desc-half">
        <div class="description">
          <h1>French Fries</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati quaerat! In, maxime unde? Debitis ipsam natus cum, repellendus molestiae sapiente ab alias neque ducimus culpa nam laudantium eos corporis.</p>
        </div>
      </div>
      <div>
        <img src="img/index/fries.webp" alt="">
      </div>
    </section>
  </main>
</body>

</html>