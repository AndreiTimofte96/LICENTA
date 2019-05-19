-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Gazdă: db
-- Timp de generare: mai 19, 2019 la 08:55 PM
-- Versiune server: 5.6.43
-- Versiune PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `extension`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `preferences`
--

CREATE TABLE `preferences` (
  `preference_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `preference_month` int(11) NOT NULL,
  `preference_year` int(11) NOT NULL,
  `special_events` varchar(500) DEFAULT NULL,
  `weekend_days` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `preferences`
--

INSERT INTO `preferences` (`preference_id`, `user_id`, `preference_month`, `preference_year`, `special_events`, `weekend_days`) VALUES
(13, 18, 5, 2019, '[1557943288157]', 0),
(15, 19, 5, 2019, '[1557608400000, 1558126800000]', 0),
(16, 20, 5, 2019, '[1558731600000]', 0),
(17, 30, 5, 2019, NULL, 0),
(18, 31, 5, 2019, NULL, 0),
(19, 32, 5, 2019, NULL, 0);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `timetable`
--

CREATE TABLE `timetable` (
  `timetable_id` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `table_header` varchar(5000) NOT NULL,
  `table_data` varchar(5000) NOT NULL,
  `month_norm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `mail` varchar(120) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `username` varchar(120) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `password` varchar(120) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `password_changed` enum('false','true') CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL DEFAULT 'false',
  `admin` enum('false','true') CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `users`
--

INSERT INTO `users` (`id`, `mail`, `username`, `password`, `password_changed`, `admin`) VALUES
(17, 'andrei.timofte96@gmail.com', 'Timi', 'parola', 'false', 'false'),
(18, 'olga@yahoo.com', 'Olga', 'parola', 'false', 'false'),
(19, 'paula@yahoo.com', 'Paula', 'parola', 'false', 'false'),
(20, 'mihaela@yahoo.com', 'Mihaela', 'parola', 'false', 'false'),
(30, 'dana@yahoo.com', 'Dana', 'parola', 'false', 'false'),
(31, 'oana@yahoo.com', 'Oana', 'parola', 'false', 'false'),
(32, 'raluca@yahoo.com', 'Raluca', 'parola', 'false', 'false');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `preferences`
--
ALTER TABLE `preferences`
  ADD PRIMARY KEY (`preference_id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`preference_month`);

--
-- Indexuri pentru tabele `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`timetable_id`);

--
-- Indexuri pentru tabele `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `preferences`
--
ALTER TABLE `preferences`
  MODIFY `preference_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pentru tabele `timetable`
--
ALTER TABLE `timetable`
  MODIFY `timetable_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=272;

--
-- AUTO_INCREMENT pentru tabele `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
