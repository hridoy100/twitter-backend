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
-- Table structure for table `follower`
--

CREATE TABLE `follower` (
  `fUserID` int(11) NOT NULL,
  `fFollowingID` int(11) NOT NULL,
  `fFollowedDate` decimal(16,0) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `follower`
--

INSERT INTO `follower` (`fUserID`, `fFollowingID`, `fFollowedDate`) VALUES
(1, 2, '1654893973426'),
(1, 3, '1654894004468'),
(1, 4, '1654894394694'),
(1, 5, '1654894443917'),
(1, 6, '1654889562011'),
(1, 7, '1654889562012'),
(1, 8, '1654894620117');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follower`
--
ALTER TABLE `follower`
  ADD UNIQUE KEY `followings` (`fUserID`,`fFollowingID`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
