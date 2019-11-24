-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2019 at 11:01 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `engi_cinema`
--

-- --------------------------------------------------------

--
-- Table structure for table `cookies`
--

CREATE TABLE `cookies` (
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cookies`
--

INSERT INTO `cookies` (`token`) VALUES
('$2y$10$PaD6D4My3XZQ6MP2ge0w/..2HHka1om6WPXCvCxyHlENhF1U61rBK');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id_review` int(11) NOT NULL,
  `scheduleID` int(15) NOT NULL,
  `userID` int(15) NOT NULL,
  `movieID` int(11) NOT NULL,
  `userRating` float DEFAULT NULL,
  `userReview` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `scheduleID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `scheduleDate` date NOT NULL,
  `scheduleTime` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `seat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`scheduleID`, `movieID`, `scheduleDate`, `scheduleTime`, `seat`) VALUES
(1, 330457, '2019-11-20', '03.50 PM', 30),
(2, 330457, '2019-11-21', '10.40 AM', 30),
(3, 330457, '2019-11-22', '11.30 AM', 30),
(4, 330457, '2019-11-23', '04.35 PM', 30),
(5, 330457, '2019-11-24', '03.25 PM', 30),
(6, 611207, '2019-11-21', '02.45 PM', 30),
(7, 611207, '2019-11-22', '09.20 PM', 30),
(8, 611207, '2019-11-23', '11.55 PM', 30),
(9, 611207, '2019-11-24', '06.15 PM', 30),
(10, 611207, '2019-11-25', '02.50 PM', 30),
(11, 501907, '2019-11-22', '11.15 PM', 30),
(12, 501907, '2019-11-23', '04.10 PM', 30),
(13, 501907, '2019-11-24', '06.10 PM', 30),
(14, 501907, '2019-11-25', '08.15 PM', 30),
(15, 501907, '2019-11-26', '11.25 AM', 30),
(16, 621191, '2019-11-22', '06.15 PM', 30),
(17, 621191, '2019-11-23', '11.00 PM', 30),
(18, 621191, '2019-11-24', '05.50 PM', 30),
(19, 621191, '2019-11-25', '10.20 AM', 30),
(20, 621191, '2019-11-26', '10.05 AM', 30),
(21, 566220, '2019-11-22', '06.45 PM', 30),
(22, 566220, '2019-11-23', '01.35 PM', 30),
(23, 566220, '2019-11-24', '04.50 PM', 30),
(24, 566220, '2019-11-25', '11.40 AM', 30),
(25, 566220, '2019-11-26', '09.35 PM', 30),
(26, 634571, '2019-11-21', '10.40 AM', 30),
(27, 634571, '2019-11-22', '10.10 PM', 30),
(28, 634571, '2019-11-23', '03.35 PM', 30),
(29, 634571, '2019-11-24', '02.15 PM', 30),
(30, 634571, '2019-11-25', '10.20 AM', 30),
(31, 567598, '2019-11-22', '01.20 PM', 30),
(32, 567598, '2019-11-23', '11.15 AM', 30),
(33, 567598, '2019-11-24', '11.15 AM', 30),
(34, 567598, '2019-11-25', '11.50 AM', 30),
(35, 567598, '2019-11-26', '05.15 PM', 30),
(36, 630018, '2019-11-22', '09.40 PM', 30),
(37, 630018, '2019-11-23', '06.45 PM', 30),
(38, 630018, '2019-11-24', '11.05 AM', 30),
(39, 630018, '2019-11-25', '12.35 PM', 30),
(40, 630018, '2019-11-26', '11.25 AM', 30),
(41, 604790, '2019-11-21', '11.20 AM', 30),
(42, 604790, '2019-11-22', '07.50 PM', 30),
(43, 604790, '2019-11-23', '05.00 PM', 30),
(44, 604790, '2019-11-24', '10.15 PM', 30),
(45, 604790, '2019-11-25', '09.35 PM', 30),
(46, 384756, '2019-11-21', '09.45 PM', 30),
(47, 384756, '2019-11-22', '03.50 PM', 30),
(48, 384756, '2019-11-23', '02.45 PM', 30),
(49, 384756, '2019-11-24', '07.15 PM', 30),
(50, 384756, '2019-11-25', '10.15 PM', 30),
(51, 630900, '2019-11-17', '11.05 AM', 30),
(52, 630900, '2019-11-18', '12.10 PM', 30),
(53, 630900, '2019-11-19', '01.35 PM', 30),
(54, 630900, '2019-11-20', '06.35 PM', 30),
(55, 630900, '2019-11-21', '01.45 PM', 30),
(56, 585561, '2019-11-21', '09.55 PM', 30),
(57, 585561, '2019-11-22', '05.30 PM', 30),
(58, 585561, '2019-11-23', '05.30 PM', 30),
(59, 585561, '2019-11-24', '08.00 PM', 30),
(60, 585561, '2019-11-25', '10.30 PM', 30),
(61, 642738, '2019-11-19', '11.30 PM', 30),
(62, 642738, '2019-11-20', '11.30 PM', 30),
(63, 642738, '2019-11-21', '08.30 PM', 30),
(64, 642738, '2019-11-22', '03.15 PM', 30),
(65, 642738, '2019-11-23', '06.15 PM', 30),
(66, 592739, '2019-11-21', '04.40 PM', 30),
(67, 592739, '2019-11-22', '04.55 PM', 30),
(68, 592739, '2019-11-23', '06.20 PM', 30),
(69, 592739, '2019-11-24', '10.25 PM', 30),
(70, 592739, '2019-11-25', '03.05 PM', 30),
(71, 575314, '2019-11-21', '11.35 PM', 30),
(72, 575314, '2019-11-22', '10.55 AM', 30),
(73, 575314, '2019-11-23', '07.35 PM', 30),
(74, 575314, '2019-11-24', '07.15 PM', 30),
(75, 575314, '2019-11-25', '05.45 PM', 30),
(76, 504582, '2019-11-21', '09.20 PM', 30),
(77, 504582, '2019-11-22', '08.55 PM', 30),
(78, 504582, '2019-11-23', '04.30 PM', 30),
(79, 504582, '2019-11-24', '10.30 PM', 30),
(80, 504582, '2019-11-25', '08.45 PM', 30),
(81, 574982, '2019-11-21', '12.10 PM', 30),
(82, 574982, '2019-11-22', '06.30 PM', 30),
(83, 574982, '2019-11-23', '02.30 PM', 30),
(84, 574982, '2019-11-24', '02.25 PM', 30),
(85, 574982, '2019-11-25', '07.05 PM', 30),
(86, 630382, '2019-11-21', '01.00 PM', 30),
(87, 630382, '2019-11-22', '10.20 PM', 30),
(88, 630382, '2019-11-23', '12.15 PM', 30),
(89, 630382, '2019-11-24', '10.50 AM', 30),
(90, 630382, '2019-11-25', '11.50 AM', 30),
(91, 565235, '2019-11-21', '04.30 PM', 30),
(92, 565235, '2019-11-22', '12.05 PM', 30),
(93, 565235, '2019-11-23', '12.05 PM', 30),
(94, 565235, '2019-11-24', '02.00 PM', 30),
(95, 565235, '2019-11-25', '09.10 PM', 30),
(96, 589976, '2019-11-20', '02.30 PM', 30),
(97, 589976, '2019-11-21', '01.35 PM', 30),
(98, 589976, '2019-11-22', '07.55 PM', 30),
(99, 589976, '2019-11-23', '11.05 AM', 30),
(100, 589976, '2019-11-24', '04.45 PM', 30);

-- --------------------------------------------------------

--
-- Table structure for table `seat`
--

CREATE TABLE `seat` (
  `seatID` int(11) NOT NULL,
  `scheduleID` int(11) NOT NULL,
  `seatNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profilePicture` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bank_account` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `email`, `phone`, `password`, `profilePicture`, `bank_account`, `token`) VALUES
(1, 'test', 'test@gmail.com', '081123456789', '$2y$10$BGoBkEuiMk48rRUrNg/mO.blpLRjPx5KYVR.US5QZVDCnG43a7Xdm', 'assets/profilePicture/test.png', '7777524615', '$2y$10$PaD6D4My3XZQ6MP2ge0w/..2HHka1om6WPXCvCxyHlENhF1U61rBK'),
(2, 'vincentbudianto', '13517137@std.stei.itb.ac.id', '081321554136', '$2y$10$ogyxir5H0awV3kznBgPzUOt/HtbwiJzFXwn576gjOzyAsRyAr3sBu', 'assets/profilePicture/Rimuru Tempest.jpeg', '7772454615', '$2y$10$qaBLh/6tzzw12Xa4hxjmkOgkrulHNMD0nScJZVaQSf1hxhLSxusuu'),
(3, 'xio84', '13517020@std.stei.itb.ac.id', '08115128170', '$2y$10$DuESwipO1trUk8kNOM4LPeGNIlahc.tTISUE0Fz/ed3rS0Qf.rFUG', 'assets/profilePicture/13517020.JPG', '7775884711', '$2y$10$WcdCOxayx0vMpsVw4OTun.PdDm6rHg2o50UQ2C1oKDV7B/Wx8b0Du'),
(4, 'anakduaribu', '13517065@std.stei.itb.ac.id', '081573586855', '$2y$10$sLFfbi9dlb0hPgs2IQT.Tu/01N.3TCU1sH06.UY1ENkQuZ4CQw3qW', 'assets/profilePicture/13517065.JPG', '7772454635', '$2y$10$uu4wge27H5QLrrZlIx1l9OEa/KW3npqvqFjxFfCrya1Q019QBRafS'),
(5, 'willysantoso05', '13517066@std.stei.itb.ac.id', '087787612992', '$2y$10$DlDJmSTbQYoj2VMBgVuQauv4zUemW.PknDteFrYYDeOocTzf0cUT2', 'assets/profilePicture/13517066.JPG', '7772556444', '$2y$10$czONFuI/6gOxm0lDphLYZ./IDuGLQZ1OXmC92Ff0SiKCCV6hrZMFO'),
(6, 'Meyjan', '13517131@std.stei.itb.ac.id', '081223617228', '$2y$10$rS5VtbBMjbOfQ7/b.kS1Z.jDUnHBJZRlA5JlzpqTyjX7xQu2gfx/W', 'assets/profilePicture/13517131.JPG', '7772462248', '$2y$10$9jqX8m48Rti5kbCoOqvFg.UsUTbHo2qoVRLBD6XhmniERHXx5pUYy'),
(7, 'yoelsusanto', '13517014@std.stei.itb.ac.id', '085922835336', '$2y$10$qBKH7nGRgBoPzIA5hulvHu3C9BFwoe9NlGzBbCX.znFyRWg6V7/VG', 'assets/profilePicture/13517014.JPG', '7776524811', '$2y$10$Ig5HdPc4ZUTunnRHaaMIKe65PncY3YrD7p9TVN7TUkyrKs7QiAZYm'),
(8, 'lukaskurnia', '13517006@std.stei.itb.ac.id', '087816045752', '$2y$10$exCgQ1KKQ94kfZjO/2Qo9.sNYvMvDEk8yyN1YOdGMggEqljJj8p3i', 'assets/profilePicture/13517006.JPG', '7779981524', '$2y$10$Yf.csdRJXFGwTKvD4hzIbexbRCpp/tvydqyFYvuYyrNt6XSE649QG'),
(9, 'YangHansen', '13517146@std.stei.itb.ac.id', '087822135407', '$2y$10$mTGU8jVlgPb43Sdnr3ZvHOBY3TsHirlXPGh3vyxdHf2qSVgRrknYq', 'assets/profilePicture/13517146.JPG', '7771516477', '$2y$10$y7Ft./pvvCf94uLtNmy0H.0.IsOat6tAnNVS..gmeybinxy1BOjam'),
(10, 'KevinS27', '13517023@std.stei.itb.ac.id', '089611023888', '$2y$10$l5oNXXoaAxsR4sTwXvy2fOOj/oqOtib0ufdu2N8fN19RBINDX09YS', 'assets/profilePicture/13517023.JPG', '7775562410', '$2y$10$IKwmIbnlkjXrLxCmndSkFeN4bNo6NIofcmYtkpve63A55.b9ykHS6'),
(11, 'kumaken', '13517068@std.stei.itb.ac.id', '08971848770', '$2y$10$iRslvYHu4/pc6QeqvmQBH.E1FbKHXLAoW4k2oUnTjC8r3LcNPtKtG', 'assets/profilePicture/13517068.JPG', '7778654742', '$2y$10$LEvw/aSGghcBYC8WZqRAU.jFai8ilmg67SXLIDjz4pntURARywNne'),
(12, 'hidx1', '13517059@std.stei.itb.ac.id', '089634338403', '$2y$10$hLpV.OrjMp5te68f5H1.mu93An13453PmSCQrFWQzXIeJ2qYeXEK6', 'assets/profilePicture/13517059.JPG', '7772658157', '$2y$10$LKMBgdEaicAnUyO1VsTOsOYfsvrV76DrFnFoOJWbk9AhjYchc0age'),
(13, 'timothy2199', 'darkshadow.itm777@gmail.com', '081294024973', '$2y$10$5T8czt6l0Cq8dMBnmcQlquBlyue5EGPz82Y1pFzAGhMlCc2Al.vMW', 'assets/profilePicture/Screenshot (45).png', '7776512340', '$2y$10$yLig2ZqVC7iVquQ1YXXEBuIo.lLqbVDjSosUR2eyl2pXJMoe4tbjy'),
(14, 'bmusuko', 'bram@gmail.com', '087878787778', '$2y$10$nxH7FYPY.Q0ZJ0P6SvLvr.9Cdxey/NgCGdEmEZ8PUuaJkqQSv2rbi', 'assets/profilePicture/14-Progress-Bar (1).png', '7776545174', '$2y$10$ojxhJ77yEc5sx03GiOvPW.CQAWKKMaiMBRJoCtgHSegZs9lAMksmC'),
(15, 'test_account', 'test_account@gmail.com', '+62845153546', '$2y$10$9XfZTe/DWfLT.hirn4TLzesTsY3QZn6KAirPkfITjVu.UErdCdMXm', 'assets/profilePicture/unnamed.png', '7775162480', '$2y$10$Y7vYrEVyRsm1OOrKR/sqbOwkOvHX3SjlKIBzHdRbrP4IOvY0r2G26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cookies`
--
ALTER TABLE `cookies`
  ADD PRIMARY KEY (`token`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`),
  ADD UNIQUE KEY `scheduleID_3` (`scheduleID`,`userID`),
  ADD KEY `scheduleID` (`scheduleID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `review_ibfk_3` (`movieID`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`scheduleID`),
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`seatID`),
  ADD KEY `scheduleID` (`scheduleID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `token` (`token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `scheduleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `seat`
--
ALTER TABLE `seat`
  MODIFY `seatID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cookies`
--
ALTER TABLE `cookies`
  ADD CONSTRAINT `cookies_ibfk_1` FOREIGN KEY (`token`) REFERENCES `users` (`token`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`scheduleID`) REFERENCES `schedule` (`scheduleID`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `review_ibfk_3` FOREIGN KEY (`movieID`) REFERENCES `schedule` (`movieID`);

--
-- Constraints for table `seat`
--
ALTER TABLE `seat`
  ADD CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`scheduleID`) REFERENCES `schedule` (`scheduleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
