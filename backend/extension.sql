-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Gazdă: db
-- Timp de generare: mai 15, 2019 la 08:58 PM
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
  `nights_per_week` tinyint(11) NOT NULL DEFAULT '0',
  `free_weekends` tinyint(1) NOT NULL DEFAULT '-1',
  `night_shifts` tinyint(11) NOT NULL DEFAULT '-1',
  `special_events` varchar(500) DEFAULT NULL,
  `timetable_configurator` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `preferences`
--

INSERT INTO `preferences` (`preference_id`, `user_id`, `preference_month`, `nights_per_week`, `free_weekends`, `night_shifts`, `special_events`, `timetable_configurator`) VALUES
(2, 17, 5, 2, -1, -1, '[1557948881057,1557943288157]', '{\"free_days\":12,\"nights\":5,\"8_hours\":4,\"12_hours\":13,\"norm\":168}'),
(12, 18, 5, 3, 3, 2, '[1557943288157]', '{\"free_days\":5,\"nights\":3,\"8_hours\":4,\"12_hours\":13,\"norm\":170}');

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
(18, 'olgics@yahoo.com', 'olgics', 'parola', 'false', 'false');

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
  MODIFY `preference_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pentru tabele `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
