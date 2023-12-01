-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307:3307
-- Generation Time: Nov 27, 2023 at 04:06 PM
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
-- Table structure for table `hamburgers`
--

CREATE TABLE `hamburgers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hamburgers`
--

INSERT INTO `hamburgers` (`id`, `name`, `description`, `image`, `price`) VALUES
(1, 'Dill-i-cio', 'Panko battered and fried pickle, fiery Sriracha, savoury bacon, garlic aioli, lettuce, and tomato.', 'images1.jpg', 10.99),
(2, 'Cheese Burger', 'Red onion , pickles, lettuce, tomatoes with our tasty garlic aioli.', 'images2.jpg', 8.99),
(3, 'Big Cheese Burger', 'With 12 oz beef patty, red onion, pickles, lettuce, tomato, garlic aioli and double cheddar cheese', 'images3.jpg', 16.99),
(4, 'Lamby Burger', 'Grilled red peppers and goat cheese with smoky chipotle aioli, bacon, arugula and tomatoes.', 'images4.jpg', 11.99),
(5, 'The Grilled Cheese Bacon Burger', 'Cheddar, mozzarella, lettuce, tomato and savoury bacon, with our smoky chipotle aioli.', 'images5.jpg', 14.99),
(6, 'Jerk Chicken Burger', 'Grilled chicken breast, jerk sauce, jalapenos, red onion, lettuce, and tomato.', 'images6.jpg', 13.99),
(7, 'Red Melt Burger', 'Roasted red peppers, mozarella cheese, chipotle aioli, lettuce, tomato', 'images7.jpg', 13.99),
(8, 'Riverside Burger', 'Onion ring, mozzarella, bacon, bbq sauce, garlic aioli, lettuce, and tomato.', 'images8.jpg', 14.99),
(9, 'The Big Boy Burger', 'Double beef patty (11 oz) with double cheddar cheese, red onion, pickles, fried egg, jalapeno, garlic ailoli, lettuce, and tomato.', 'images9.jpg', 18.50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hamburgers`
--
ALTER TABLE `hamburgers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hamburgers`
--
ALTER TABLE `hamburgers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
