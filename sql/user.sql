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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uID` int(11) NOT NULL,
  `uUserName` varchar(20) NOT NULL,
  `uName` varchar(100) NOT NULL,
  `uPassword` varchar(50) NOT NULL,
  `uBirthday` decimal(16,0) DEFAULT NULL,
  `uCreatedAt` decimal(16,0) DEFAULT NULL,
  `uIsDeleted` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uID`, `uUserName`, `uName`, `uPassword`, `uBirthday`, `uCreatedAt`, `uIsDeleted`) VALUES
(1, 'hridoy', 'Hridoy', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, 0),
(6, 'alvi', 'Ahnaf', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, 0),
(7, 'papan', 'Bishal Basak', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, 0),
(8, 'test', 'hridoy', '61daf862f8bf2aaac07d5f356fef3a4c', '1607709600000', '1654892525436', 0),
(12, 'test2', 'Hridoy', '61daf862f8bf2aaac07d5f356fef3a4c', '1607709600000', '1654892717285', 0),
(14, 'test3', 'Hridoy', '61daf862f8bf2aaac07d5f356fef3a4c', '1607709600000', '1654892743475', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uID`) USING BTREE,
  ADD UNIQUE KEY `uUserName` (`uUserName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
