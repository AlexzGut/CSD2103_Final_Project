-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307:3307
-- Generation Time: Dec 08, 2023 at 10:49 PM
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
-- Database: `registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(6) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `date_of_birth` date NOT NULL,
  `address` varchar(100) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `date_of_birth`, `address`, `username`, `password`) VALUES
(3, 'Tatiana', 'Marquez', 'tatiana@gmail.com', '12312312', '2023-11-01', '', 'tatto', '$2y$10$y9JGQ3HxYHAgXIZkQrdZte00H294B6tQatNfx7cCYV428LtcaYE5.'),
(5, 'Alexander', 'Gutierrez', 'alexander.gutierrez@gmail.com', '6478601662', '2023-11-02', '347 Lawson Rd, Scarborough', 'alex', '$2y$10$jwe2fT3FEph/iUipdLNHwu1CJFfxamkZhSTJy3aDLMyzSsZL559mO'),
(18, 'John', 'Gutierrez', 'john.gutierrez@gmail.com', '4478601663', '1995-10-17', '', 'johnguti', '$2y$10$6BMzQU3QDEcOT1UiEPuqlu2EQn84rS3VXbIMvR6fNUMaVGcaGtCFq'),
(19, '', '', '', '', '0000-00-00', '', '', '$2y$10$eyBYW/kfJGUABgtmqCUJ.OJ2ZlPSCFxb.BZhB8nmct9a/J5Fpi0SG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
