-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2019 at 01:47 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

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
  `scheduleID` int(15) NOT NULL,
  `userID` int(15) NOT NULL,
  `userRating` float DEFAULT NULL,
  `userReview` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`scheduleID`, `userID`, `userRating`, `userReview`) VALUES
(1, 1, 5, 'hahha'),
(2, 2, 7, 'hello');

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
(1, 330457, '2019-11-17', '09.20 AM', 30),
(2, 330456, '2019-11-18', '07.40 AM', 30),
(3, 458897, '2019-11-18', '12.35 PM', 30),
(4, 458897, '2019-11-18', '07.20 PM', 30),
(5, 458897, '2019-11-19', '12.25 AM', 30),
(6, 492002, '2019-11-16', '04.25 PM', 30),
(7, 492002, '2019-11-18', '06.50 AM', 30),
(8, 492002, '2019-11-18', '06.00 PM', 30),
(9, 492002, '2019-11-20', '01.20 PM', 30),
(10, 492002, '2019-11-20', '03.55 PM', 30),
(11, 492188, '2019-11-18', '01.10 AM', 30),
(12, 492188, '2019-11-18', '05.25 AM', 30),
(13, 492188, '2019-11-18', '06.55 AM', 30),
(14, 492188, '2019-11-20', '02.55 AM', 30),
(15, 492188, '2019-11-20', '06.40 AM', 30),
(16, 627715, '2019-11-16', '01.00 PM', 30),
(17, 627715, '2019-11-17', '04.20 PM', 30),
(18, 627715, '2019-11-18', '04.35 AM', 30),
(19, 627715, '2019-11-19', '07.50 PM', 30),
(20, 627715, '2019-11-19', '08.10 PM', 30),
(21, 635885, '2019-11-16', '02.00 AM', 30),
(22, 635885, '2019-11-17', '09.50 PM', 30),
(23, 635885, '2019-11-18', '08.40 AM', 30),
(24, 635885, '2019-11-18', '10.40 AM', 30),
(25, 635885, '2019-11-20', '01.15 PM', 30),
(26, 643438, '2019-11-16', '03.45 AM', 30),
(27, 643438, '2019-11-16', '07.10 AM', 30),
(28, 643438, '2019-11-19', '10.50 AM', 30),
(29, 643438, '2019-11-20', '09.25 AM', 30),
(30, 643438, '2019-11-20', '03.15 PM', 30),
(31, 607346, '2019-11-14', '10.45 AM', 30),
(32, 607346, '2019-11-18', '04.35 AM', 30),
(33, 607346, '2019-11-19', '08.10 AM', 30),
(34, 607346, '2019-11-19', '06.05 PM', 30),
(35, 607346, '2019-11-20', '06.00 PM', 30),
(36, 628044, '2019-11-17', '12.45 PM', 30),
(37, 628044, '2019-11-18', '08.15 PM', 30),
(38, 628044, '2019-11-18', '09.10 PM', 30),
(39, 628044, '2019-11-19', '05.45 AM', 30),
(40, 628044, '2019-11-20', '02.55 AM', 30),
(41, 539757, '2019-11-17', '08.15 PM', 30),
(42, 539757, '2019-11-18', '10.25 AM', 30),
(43, 539757, '2019-11-18', '02.10 PM', 30),
(44, 539757, '2019-11-19', '12.55 AM', 30),
(45, 539757, '2019-11-19', '07.30 AM', 30),
(46, 630709, '2019-11-17', '11.45 AM', 30),
(47, 630709, '2019-11-18', '03.20 AM', 30),
(48, 630709, '2019-11-18', '10.20 AM', 30),
(49, 630709, '2019-11-19', '02.15 AM', 30),
(50, 630709, '2019-11-19', '10.50 AM', 30),
(51, 504585, '2019-11-17', '01.30 PM', 30),
(52, 504585, '2019-11-18', '11.10 AM', 30),
(53, 504585, '2019-11-19', '05.50 PM', 30),
(54, 504585, '2019-11-19', '09.40 PM', 30),
(55, 504585, '2019-11-20', '04.05 PM', 30),
(56, 481849, '2019-11-15', '01.30 PM', 30),
(57, 481849, '2019-11-17', '03.00 AM', 30),
(58, 481849, '2019-11-18', '08.55 AM', 30),
(59, 481849, '2019-11-20', '01.40 AM', 30),
(60, 481849, '2019-11-20', '02.35 AM', 30),
(61, 594692, '2019-11-18', '05.10 AM', 30),
(62, 594692, '2019-11-18', '01.10 PM', 30),
(63, 594692, '2019-11-18', '05.00 PM', 30),
(64, 594692, '2019-11-19', '07.20 AM', 30),
(65, 594692, '2019-11-19', '12.15 PM', 30),
(66, 623780, '2019-11-15', '07.30 PM', 30),
(67, 623780, '2019-11-16', '02.30 PM', 30),
(68, 623780, '2019-11-18', '06.00 AM', 30),
(69, 623780, '2019-11-18', '08.00 AM', 30),
(70, 623780, '2019-11-19', '11.45 PM', 30),
(71, 586863, '2019-11-16', '12.55 PM', 30),
(72, 586863, '2019-11-16', '03.35 PM', 30),
(73, 586863, '2019-11-16', '06.05 PM', 30),
(74, 586863, '2019-11-20', '03.10 AM', 30),
(75, 586863, '2019-11-20', '07.35 AM', 30),
(76, 638907, '2019-11-15', '02.30 AM', 30),
(77, 638907, '2019-11-15', '04.35 PM', 30),
(78, 638907, '2019-11-17', '02.00 PM', 30),
(79, 638907, '2019-11-20', '05.25 AM', 30),
(80, 638907, '2019-11-20', '10.30 AM', 30),
(81, 576901, '2019-11-16', '05.20 PM', 30),
(82, 576901, '2019-11-19', '08.50 AM', 30),
(83, 576901, '2019-11-19', '02.10 PM', 30),
(84, 576901, '2019-11-20', '12.40 PM', 30),
(85, 576901, '2019-11-20', '01.55 PM', 30),
(86, 499689, '2019-11-14', '05.00 PM', 30),
(87, 499689, '2019-11-18', '05.55 AM', 30),
(88, 499689, '2019-11-18', '12.25 PM', 30),
(89, 499689, '2019-11-18', '07.50 PM', 30),
(90, 499689, '2019-11-20', '06.55 PM', 30),
(91, 648021, '2019-11-16', '03.05 PM', 30),
(92, 648021, '2019-11-17', '12.05 PM', 30),
(93, 648021, '2019-11-19', '12.40 PM', 30),
(94, 648021, '2019-11-19', '11.00 PM', 30),
(95, 648021, '2019-11-20', '06.05 AM', 30),
(96, 648613, '2019-11-17', '09.20 AM', 30),
(97, 648613, '2019-11-19', '02.55 PM', 30),
(98, 648613, '2019-11-20', '02.15 AM', 30),
(99, 648613, '2019-11-20', '10.45 AM', 30),
(100, 648613, '2019-11-20', '04.10 PM', 30),
(101, 640052, '2019-11-17', '11.20 AM', 30),
(102, 640052, '2019-11-19', '01.10 AM', 30),
(103, 640052, '2019-11-19', '08.30 AM', 30),
(104, 640052, '2019-11-19', '11.50 AM', 30),
(105, 640052, '2019-11-20', '01.00 AM', 30);

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
  ADD KEY `scheduleID` (`scheduleID`),
  ADD KEY `userID` (`userID`);

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
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `scheduleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `seat`
--
ALTER TABLE `seat`
  MODIFY `seatID` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Constraints for table `seat`
--
ALTER TABLE `seat`
  ADD CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`scheduleID`) REFERENCES `schedule` (`scheduleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
