-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2024 a las 09:22:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatosfrontend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albumes`
--

CREATE TABLE `albumes` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `albumes`
--

INSERT INTO `albumes` (`Nombre`, `Año`) VALUES
('Il ballo della vita', '2018'),
('Teatro d\'Ira - Vol. I', '2021'),
('RUSH!', '2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones notables`
--

CREATE TABLE `canciones notables` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `canciones notables`
--

INSERT INTO `canciones notables` (`Nombre`, `Año`) VALUES
('Torna a casa', '2021'),
('Coraline', '2021'),
('Amandoti', '2021'),
('In Nome dell\'Amore', '2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ep`
--

CREATE TABLE `ep` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ep`
--

INSERT INTO `ep` (`Nombre`, `Año`) VALUES
('Chosen', '2017'),
('Il Ballo della Vita', '2018');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sencillos`
--

CREATE TABLE `sencillos` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sencillos`
--

INSERT INTO `sencillos` (`Nombre`, `Año`) VALUES
('Chosen', '2017'),
('Morte', '2017'),
('For Your Love', '2017'),
('Recovery', '2018'),
('L\'altra metà di me', '2018'),
('Fearless', '2019'),
('Volpone', '2020'),
('Zitti e buoni', '2021'),
('I Wanna Be Your Slave', '2021'),
('Mammamia', '2021'),
('The Loneliest', '2022'),
('Supermodel', '2022'),
('If I Can Dream', '2022'),
('GOSSIP (feat. Tom Morello)', '2023'),
('Kool Kids', '2023'),
('LA FINE', '2022'),
('Beggin\'', '2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Nombre` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Reseña` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
