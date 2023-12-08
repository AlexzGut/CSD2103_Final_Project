-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307:3307
-- Generation Time: Dec 08, 2023 at 10:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `type`) VALUES
(1, 'Dill-i-cio', 'Panko battered and fried pickle, fiery Sriracha, savoury bacon, garlic aioli, lettuce, and tomato.', 'Action_Hero_Burger.png', 10.99, 'burger'),
(2, 'Cheese Burger', 'Red onion , pickles, lettuce, tomatoes with our tasty garlic aioli.', 'Battered_Atlantic_Haddock.png', 8.99, 'burger'),
(3, 'Big Cheese Burger', 'With 12 oz beef patty, red onion, pickles, lettuce, tomato, garlic aioli and double cheddar cheese', 'Blue_Moon.png', 16.99, 'burger'),
(4, 'Lamby Burger', 'Grilled red peppers and goat cheese with smoky chipotle aioli, bacon, arugula and tomatoes.', 'Egg_Burger.png', 11.99, 'burger'),
(5, 'The Grilled Cheese Bacon Burger', 'Cheddar, mozzarella, lettuce, tomato and savoury bacon, with our smoky chipotle aioli.', 'Heavy_Hitter.png', 14.99, 'burger'),
(6, 'Jerk Chicken Burger', 'Grilled chicken breast, jerk sauce, jalapenos, red onion, lettuce, and tomato.', 'Signature_Burger.png', 13.99, 'burger'),
(7, 'Red Melt Burger', 'Roasted red peppers, mozarella cheese, chipotle aioli, lettuce, tomato', 'skip-NOTCO-plant-based-burger.png', 13.99, 'burger'),
(10, 'Ultimate Fries', 'Handcrafted and panko-breaded onions, cooked in trans-fat free oil.', 'Ultimate_Fries.png', 3.95, 'side'),
(11, 'Sweet Potato Fries', 'Fresh cut Sweet Potato fries, cooked in trans-fat free oil.', 'Sweet_Potato_Fries.png', 4.95, 'side'),
(12, 'Oninon Rings', 'Handcrafted and panko-breaded onions, cooked in trans-fat free oil.', 'Onion_Rings.png', 7.95, 'side'),
(13, 'Poutine', 'Fresh cut fries, Quebec cheese curds, and gravy.', 'Poutine.png', 6.65, 'side'),
(14, 'Mushroom Poutine', 'Fresh cut fries, Portobello mushrooms, Quebec cheese curds, and gravy.', 'Mushroom_Poutine.png', 8.95, 'side'),
(15, 'Crunchy Chicken Strips', 'Handcrafted and panko-breaded Chicken Strips with dipping sauce, cooked in trans-fat free oil.', 'Crunchy-Chicken-Strips.png', 8.25, 'side');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
