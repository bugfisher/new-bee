-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2019 at 11:41 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newbiee`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Cat_Id` int(11) NOT NULL,
  `CategoryName` text NOT NULL,
  `CategoryDescription` text NOT NULL,
  `CategoryImage` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Cat_Id`, `CategoryName`, `CategoryDescription`, `CategoryImage`) VALUES
(1, 'Sports', 'This Category contains all the sports', 'sports.jpg'),
(2, 'Programming', 'This Category contains All the programming groups', 'programming.jpg'),
(3, 'Music', 'This Category Contains groups related to Music', 'music.jpg'),
(4, 'Dance', 'This category contains group related to dance', 'dance.jpg'),
(5, 'Photography', 'This category contains all the group related to photography', 'photography.jpg'),
(6, 'Health And Wellness', 'This group contains all the groups related to health and wellness', 'health.jpg'),
(8, 'Art', 'This group contains all groups related to arts', 'art.jpg'),
(9, 'Books', 'This group contains all the groups related to books.', 'books.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `G_Id` int(11) NOT NULL,
  `GroupName` text NOT NULL,
  `GroupAdmin` int(11) NOT NULL,
  `GroupDescription` text NOT NULL,
  `CategoryId` int(11) NOT NULL,
  `TotalMembers` mediumint(11) NOT NULL,
  `CalenderId` int(11) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `G_Image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`G_Id`, `GroupName`, `GroupAdmin`, `GroupDescription`, `CategoryId`, `TotalMembers`, `CalenderId`, `Status`, `G_Image`) VALUES
(2, 'Java', 1, 'Welcome to Java Group', 2, 16, 2, 1, ''),
(6, 'Glass Painting', 5, 'we will have events related to glass painting.', 8, 0, 0, 1, ''),
(7, 'Zumba', 5, 'this group is for Zumba people', 4, 0, 0, 1, ''),
(8, 'Yoga', 11, 'In this group we will learn yoga', 6, 1, 0, 1, ''),
(14, 'Badminton', 5, 'This group contains events related to badminton.', 1, 0, 0, 1, 'Badminton.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `N_Id` int(11) NOT NULL,
  `Text` mediumtext NOT NULL,
  `Date` datetime NOT NULL,
  `U_Id` int(11) DEFAULT NULL,
  `G_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`N_Id`, `Text`, `Date`, `U_Id`, `G_Id`) VALUES
(11, 'Congratulations!,Your Group Request For Group Id-2.', '2019-09-12 17:33:31', 1, 2),
(12, 'Congratulations!,Your Group Request For Group Id-7.', '2019-09-12 17:33:31', 5, 7),
(13, 'Congratulations!,Your Group Request For Group Id-6.', '2019-09-12 17:33:31', 5, 6),
(14, 'Congratulations!,Your Group Request For Group Id-8.', '2019-09-12 17:33:31', 11, 8),
(15, 'Sorry!,Your Group Request cannot be accepted for Group Id-13.', '2019-09-12 17:33:31', 5, 13),
(16, 'Congratulations!,Your Group Request has been accepted for Group Id-14.', '2019-09-12 17:33:31', 5, 14),
(17, 'Sorry!,Your Group Request cannot be accepted for Group Id-10.', '2019-09-12 17:33:31', 11, 10);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `U_Id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Contact` bigint(10) NOT NULL,
  `Password` varchar(300) NOT NULL,
  `Gender` tinyint(1) NOT NULL,
  `ProfilePic` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`U_Id`, `Name`, `Username`, `Email`, `Contact`, `Password`, `Gender`, `ProfilePic`) VALUES
(1, 'Vivek Darak', 'vivek', 'vivekdarak1000@gmail.com', 9834008822, '123', 0, 'vivek.jpg'),
(2, 'mohan sharma', 'mohan', 'mohan@gmail.com', 1234567890, '1234', 0, ''),
(3, 'Rutuja', 'ru', 'ru@gmail.com', 9878767665, '12345', 1, ''),
(5, 'piyusha', 'piyu', 'piyu@gmail.com', 1234567899, '123', 1, ''),
(6, 'vivek', 'hello', 'vvv@gmail.com', 1234, '1212121212', 0, ''),
(8, 'user', 'useri', 'user@gmail.com', 1234547778, '123', 0, ''),
(10, 'anushka', 'anu', 'anu@gmail.com', 1234563400, '1234', 0, ''),
(11, 'shubham', 'shubhu', 'shu@gmail.com', 1231678976, '12345', 0, ''),
(12, 'khushi', 'khu', 'khu@gmail.com', 1234512345, '12345', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE `user_group` (
  `U_Id` int(11) NOT NULL,
  `G_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_group`
--

INSERT INTO `user_group` (`U_Id`, `G_Id`) VALUES
(5, 14),
(5, 6),
(5, 8),
(5, 7),
(5, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Cat_Id`),
  ADD UNIQUE KEY `CategoryName` (`CategoryName`(100));

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`G_Id`),
  ADD UNIQUE KEY `GroupName` (`GroupName`(100)),
  ADD KEY `c_id` (`CategoryId`),
  ADD KEY `g_admin` (`GroupAdmin`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`N_Id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`U_Id`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Contact` (`Contact`);

--
-- Indexes for table `user_group`
--
ALTER TABLE `user_group`
  ADD KEY `U_Id` (`U_Id`),
  ADD KEY `G_Id` (`G_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Cat_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `G_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `N_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `U_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `c_id` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`Cat_Id`),
  ADD CONSTRAINT `g_admin` FOREIGN KEY (`GroupAdmin`) REFERENCES `user` (`U_Id`);

--
-- Constraints for table `user_group`
--
ALTER TABLE `user_group`
  ADD CONSTRAINT `user_group_ibfk_1` FOREIGN KEY (`U_Id`) REFERENCES `user` (`U_Id`),
  ADD CONSTRAINT `user_group_ibfk_2` FOREIGN KEY (`G_Id`) REFERENCES `groups` (`G_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
