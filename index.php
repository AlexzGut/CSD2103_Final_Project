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
  <link rel="stylesheet" href="css/footer.css">
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
          <li><a href="html/contact-us.html">Contact Us</a></li>
          <li><a href="#">Locations</a></li>
        </ul>
      </nav>
      <a href="../Final_Project/index.php" id="brand">
        <h1>One Less Burger</h1>
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
        <source media="(min-width: 968px)" srcset="img/hero/burger-hero-desktop.webp">
        <source media="(min-width: 481px)" srcset="img/hero/burger-hero-mobile.jpg">
        <img src="img/hero/burger-hero-mobile.jpg" alt="">
      </picture>
    </section>

    <section id="split-body">
      <div id="f-image">

      </div>
      <div class="desc-half">
        <div class="description" id="f-desc">
          <h1>Burgers are everything</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati quaerat! In, maxime unde? Debitis ipsam natus cum, repellendus molestiae sapiente ab alias neque ducimus culpa nam laudantium eos corporis.</p>
        </div>
      </div>

      <div class="desc-half">
        <div class="description" id="s-desc">
          <h1>French Fries</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati quaerat! In, maxime unde? Debitis ipsam natus cum, repellendus molestiae sapiente ab alias neque ducimus culpa nam laudantium eos corporis.</p>
        </div>
      </div>
      <div id="s-image">

      </div>
    </section>
  </main>
  <footer>
        <div class="f-col">
            <div class="footer-col">
                <h4>Your Purchase</h4>
                <ul>
                    <li><a href="" target="_self">Terms of Use</a></li>
                    <li><a href="" target="_self">Terms of Sale</a></li>
                    <li><a href="" target="_self">Privacy Policy</a></li>
                    <li><a href="" target="_self">Delivery</a></li>
                    <li><a href="" target="_self">Refunds & Returns</a></li>
                    <li><a href="" target="_self">Intellectual Property Issues</a></li>
                    <li><a href="" target="_self">Help Center</a></li>
                    <li><a href="" target="_self">Earn Rewards</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Explore our Menu</h4>
                <ul>
                    <li><a href="html/menu.html" target="_self">Burgers</a></li>
                    <li><a href="" target="_self">French Fries</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Who We Are</h4>
                <ul>
                    <li><a href="aboutus.html" target="_self">About Us</a></li>
                    <li><a href="contact_us.html" target="_self">Contact Us</a></li>
                    <li><a href="" target="_self">Affiliates</a></li>
                    <li><a href="" target="_self">Carrers</a></li>
                </ul>
            </div>
        </div>

        <div class="last-footer">
            <ul>
                <li><a href="https://www.instagram.com/" target="_blank"><img src="img/logos/instagram-logo.png"
                            alt="instagram" width="30" height="30"></a></li>
                <li><a href="https://www.facebook.com/" target="_blank"><img src="img/logos/facebook-logo-white.png"
                            alt="facebook" width="30" height="30"></a></li>
                <li><a href="https://twitter.com/home" target="_blank"><img src="img/logos/twitter-logo.png"
                            alt="twitter" width="30" height="30"></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><img src="img/logos/youtube-logo.png"
                            alt="youtube" width="30" height="30"></a></li>
            </ul>
            <p>&copy; 2023 One Less Burger, Inc.</p>
        </div>
    </footer>
</body>

</html>