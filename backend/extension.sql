-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Gazdă: db
-- Timp de generare: mai 28, 2019 la 08:54 PM
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
  `special_events` varchar(500) NOT NULL DEFAULT '[]',
  `weekend_days` enum('false','true') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `preferences`
--

INSERT INTO `preferences` (`preference_id`, `user_id`, `preference_month`, `preference_year`, `special_events`, `weekend_days`) VALUES
(20, 18, 6, 2019, '[1560897856000,1561753844000,1561235781000,1561926987000,1561581389000]', 'false'),
(21, 19, 6, 2019, '[]', 'false'),
(22, 20, 6, 2019, '[]', 'false'),
(23, 30, 6, 2019, '[]', 'false'),
(24, 31, 6, 2019, '[]', 'false'),
(25, 32, 6, 2019, '[]', 'false');

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

--
-- Eliminarea datelor din tabel `timetable`
--

INSERT INTO `timetable` (`timetable_id`, `month`, `year`, `table_header`, `table_data`, `month_norm`) VALUES
(317, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"12\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":176},{\"userId\":19,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\"],\"norm\":176},{\"userId\":20,\"data\":[\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"N\"],\"norm\":172},{\"userId\":30,\"data\":[\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"N\"],\"norm\":176},{\"userId\":31,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\"],\"norm\":176},{\"userId\":32,\"data\":[\"N\",\"L\",\"N\",\"L\",\"Gn\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\"],\"norm\":180}]', 176),
(318, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"N\",\"L\",\"N\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\"],\"norm\":168},{\"userId\":19,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"N\"],\"norm\":168},{\"userId\":20,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"N\"],\"norm\":176},{\"userId\":30,\"data\":[\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"12\"],\"norm\":176},{\"userId\":31,\"data\":[\"12\",\"N\",\"L\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"12\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":180},{\"userId\":32,\"data\":[\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\"],\"norm\":176}]', 176),
(319, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\"],\"norm\":180},{\"userId\":19,\"data\":[\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\"],\"norm\":172},{\"userId\":20,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\"],\"norm\":176},{\"userId\":30,\"data\":[\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"12\"],\"norm\":180},{\"userId\":31,\"data\":[\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\"],\"norm\":176},{\"userId\":32,\"data\":[\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":176}]', 176),
(320, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"12\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\"],\"norm\":176},{\"userId\":19,\"data\":[\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\"],\"norm\":176},{\"userId\":20,\"data\":[\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\"],\"norm\":176},{\"userId\":30,\"data\":[\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"N\",\"L\"],\"norm\":180},{\"userId\":31,\"data\":[\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"N\",\"L\",\"12\",\"12\"],\"norm\":176},{\"userId\":32,\"data\":[\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\"],\"norm\":172}]', 176),
(321, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"L\",\"Gn\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\"],\"norm\":176},{\"userId\":19,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\"],\"norm\":176},{\"userId\":20,\"data\":[\"12\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\"],\"norm\":176},{\"userId\":30,\"data\":[\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\"],\"norm\":172},{\"userId\":31,\"data\":[\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"12\"],\"norm\":180},{\"userId\":32,\"data\":[\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\"],\"norm\":176}]', 176),
(322, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\"],\"norm\":176},{\"userId\":19,\"data\":[\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"L\"],\"norm\":172},{\"userId\":20,\"data\":[\"12\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"N\",\"L\",\"12\",\"12\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"N\"],\"norm\":176},{\"userId\":30,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\"],\"norm\":176},{\"userId\":31,\"data\":[\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"N\"],\"norm\":176},{\"userId\":32,\"data\":[\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":180}]', 176),
(323, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"8\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\"],\"norm\":176},{\"userId\":19,\"data\":[\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"N\"],\"norm\":176},{\"userId\":20,\"data\":[\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"L\",\"12\",\"12\",\"N\"],\"norm\":180},{\"userId\":30,\"data\":[\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":172},{\"userId\":31,\"data\":[\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\"],\"norm\":172},{\"userId\":32,\"data\":[\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\"],\"norm\":176}]', 176),
(324, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":176},{\"userId\":19,\"data\":[\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"L\"],\"norm\":176},{\"userId\":20,\"data\":[\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\"],\"norm\":168},{\"userId\":30,\"data\":[\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\"],\"norm\":176},{\"userId\":31,\"data\":[\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"Gn\",\"12\",\"L\",\"12\",\"8\",\"N\"],\"norm\":176},{\"userId\":32,\"data\":[\"12\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"12\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\"],\"norm\":180}]', 176),
(325, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"8\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":172},{\"userId\":19,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"N\"],\"norm\":176},{\"userId\":20,\"data\":[\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"12\",\"N\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\"],\"norm\":180},{\"userId\":30,\"data\":[\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"12\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"12\"],\"norm\":176},{\"userId\":31,\"data\":[\"L\",\"12\",\"N\",\"L\",\"Gn\",\"12\",\"8\",\"N\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"N\",\"L\",\"12\",\"12\"],\"norm\":176},{\"userId\":32,\"data\":[\"L\",\"12\",\"8\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"12\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"N\",\"L\"],\"norm\":176}]', 176),
(326, 5, 2019, '[{\"dayNo\":1,\"dayName\":\"M\"},{\"dayNo\":2,\"dayName\":\"J\"},{\"dayNo\":3,\"dayName\":\"V\"},{\"dayNo\":4,\"dayName\":\"S\"},{\"dayNo\":5,\"dayName\":\"D\"},{\"dayNo\":6,\"dayName\":\"L\"},{\"dayNo\":7,\"dayName\":\"M\"},{\"dayNo\":8,\"dayName\":\"M\"},{\"dayNo\":9,\"dayName\":\"J\"},{\"dayNo\":10,\"dayName\":\"V\"},{\"dayNo\":11,\"dayName\":\"S\"},{\"dayNo\":12,\"dayName\":\"D\"},{\"dayNo\":13,\"dayName\":\"L\"},{\"dayNo\":14,\"dayName\":\"M\"},{\"dayNo\":15,\"dayName\":\"M\"},{\"dayNo\":16,\"dayName\":\"J\"},{\"dayNo\":17,\"dayName\":\"V\"},{\"dayNo\":18,\"dayName\":\"S\"},{\"dayNo\":19,\"dayName\":\"D\"},{\"dayNo\":20,\"dayName\":\"L\"},{\"dayNo\":21,\"dayName\":\"M\"},{\"dayNo\":22,\"dayName\":\"M\"},{\"dayNo\":23,\"dayName\":\"J\"},{\"dayNo\":24,\"dayName\":\"V\"},{\"dayNo\":25,\"dayName\":\"S\"},{\"dayNo\":26,\"dayName\":\"D\"},{\"dayNo\":27,\"dayName\":\"L\"},{\"dayNo\":28,\"dayName\":\"M\"},{\"dayNo\":29,\"dayName\":\"M\"},{\"dayNo\":30,\"dayName\":\"J\"},{\"dayNo\":31,\"dayName\":\"V\"}]', '[{\"userId\":18,\"data\":[\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\",\"N\"],\"norm\":176},{\"userId\":19,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"N\",\"L\",\"N\",\"L\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"N\",\"L\",\"12\",\"L\"],\"norm\":180},{\"userId\":20,\"data\":[\"L\",\"12\",\"N\",\"L\",\"Gn\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"12\",\"L\",\"N\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"8\",\"N\",\"L\"],\"norm\":176},{\"userId\":30,\"data\":[\"N\",\"L\",\"N\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"12\",\"L\",\"L\",\"12\",\"12\",\"N\",\"L\",\"12\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\"],\"norm\":180},{\"userId\":31,\"data\":[\"12\",\"N\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"N\",\"L\",\"N\",\"L\",\"Gn\",\"L\",\"L\",\"12\",\"L\",\"12\",\"N\"],\"norm\":180},{\"userId\":32,\"data\":[\"12\",\"L\",\"12\",\"L\",\"L\",\"N\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"12\",\"L\",\"12\",\"8\",\"N\",\"L\",\"Gn\",\"L\",\"12\",\"L\",\"12\",\"L\",\"L\",\"L\",\"12\",\"L\",\"12\",\"L\",\"12\"],\"norm\":176}]', 176);

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
(17, 'andrei.timofte96@gmail.com', 'Timi', 'timi19', 'true', 'true'),
(18, 'olga@yahoo.com', 'Olga', 'parola', 'true', 'false'),
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
  ADD PRIMARY KEY (`preference_id`);

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
  MODIFY `preference_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pentru tabele `timetable`
--
ALTER TABLE `timetable`
  MODIFY `timetable_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=327;

--
-- AUTO_INCREMENT pentru tabele `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
