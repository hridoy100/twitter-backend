-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 12:46 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twitter`
--

-- --------------------------------------------------------

--
-- Table structure for table `tweet`
--

CREATE TABLE `tweet` (
  `tID` int(11) NOT NULL,
  `tUserID` int(11) NOT NULL,
  `tText` varchar(500) DEFAULT NULL,
  `tCreatedAt` decimal(16,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tweet`
--

INSERT INTO `tweet` (`tID`, `tUserID`, `tText`, `tCreatedAt`) VALUES
(1, 1, 'Hello', '1654886934716'),
(2, 6, 'Hello 6', '1654887071915'),
(3, 1, 'Hello 2', '1654886934716'),
(4, 6, 'Hello alvi 2', '1654887071910'),
(5, 7, 'Papan Tweet 2', '1654887071920'),
(7, 1, 'Hello', '1654893162013'),
(8, 1, 'Hello', '1654893182245'),
(9, 8, 'Hello', '1654894695471'),
(10, 8, 'Hello 100', '1654894705828'),
(11, 8, 'Hello 100', '1654900266928'),
(12, 8, 'Hello 100', '1654900513259');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tweet`
--
ALTER TABLE `tweet`
  ADD PRIMARY KEY (`tID`),
  ADD KEY `tUserID` (`tUserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tweet`
--
ALTER TABLE `tweet`
  MODIFY `tID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
