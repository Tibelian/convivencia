-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2020 a las 11:56:52
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_convivencia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amonestacion`
--

CREATE TABLE `amonestacion` (
  `id` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `id_causa` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `amonestacion`
--

INSERT INTO `amonestacion` (`id`, `id_alumno`, `id_profesor`, `id_asignatura`, `id_causa`, `fecha`) VALUES
(1, 5, 1, 1, 7, '2020-01-28'),
(2, 5, 1, 1, 8, '2020-02-21'),
(3, 1, 1, 1, 9, '2020-02-28'),
(4, 3, 1, 1, 10, '2020-02-28'),
(5, 4, 1, 1, 11, '2020-02-28'),
(6, 2, 1, 1, 12, '2020-02-29'),
(7, 1, 1, 1, 13, '2020-02-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `causa_amonestacion`
--

CREATE TABLE `causa_amonestacion` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `causa_amonestacion`
--

INSERT INTO `causa_amonestacion` (`id`, `denominacion`) VALUES
(7, 'Falta de respeto'),
(8, 'Dormir en clase'),
(9, 'Interrupciones en clases'),
(10, 'Distracción de compañeros'),
(11, 'Gritar en clase'),
(13, 'Varios retrasos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `causa_expulsion`
--

CREATE TABLE `causa_expulsion` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `causa_expulsion`
--

INSERT INTO `causa_expulsion` (`id`, `denominacion`) VALUES
(1, 'Pegarse con sus compañeros'),
(2, 'Ser muy feo'),
(4, 'NO NUDES'),
(5, 'Robar datos privados del instituto'),
(6, 'Llevar armas'),
(9, 'Acosar a sus compañer@s de clase'),
(11, 'Quemar el instituto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expulsion`
--

CREATE TABLE `expulsion` (
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `id_causa` int(11) NOT NULL,
  `id_sancion` int(11) DEFAULT NULL,
  `control_jefatura` set('pendiente','expulsado','cancelada','') NOT NULL DEFAULT 'pendiente',
  `fecha_jefatura` date DEFAULT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `expulsion`
--

INSERT INTO `expulsion` (`id_alumno`, `id_profesor`, `id_asignatura`, `id_causa`, `id_sancion`, `control_jefatura`, `fecha_jefatura`, `fecha`) VALUES
(1, 1, 1, 4, NULL, 'pendiente', NULL, '2020-03-04'),
(2, 1, 1, 1, NULL, 'pendiente', '0000-00-00', '2020-02-28'),
(3, 1, 1, 5, NULL, 'pendiente', NULL, '2020-03-04'),
(4, 1, 1, 2, NULL, 'pendiente', NULL, '2020-03-04'),
(5, 1, 1, 6, NULL, 'pendiente', NULL, '2020-03-04'),
(8, 1, 1, 9, NULL, 'pendiente', NULL, '2020-03-04'),
(10, 1, 1, 11, NULL, 'pendiente', NULL, '2020-03-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expulsion_directa`
--

CREATE TABLE `expulsion_directa` (
  `id` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `causa` varchar(50) NOT NULL,
  `fecha_jefatura` date NOT NULL,
  `id_sancion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `falta_sancionada`
--

CREATE TABLE `falta_sancionada` (
  `id_sancion` int(11) NOT NULL,
  `id_falta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `id_profesor` int(11) NOT NULL,
  `perfil` enum('Profesor','JefeEstudios') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sancion`
--

CREATE TABLE `sancion` (
  `id_sancion` int(11) NOT NULL,
  `fechaSancion` date NOT NULL,
  `denomSancion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `amonestacion`
--
ALTER TABLE `amonestacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `causa_amonestacion`
--
ALTER TABLE `causa_amonestacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `causa_expulsion`
--
ALTER TABLE `causa_expulsion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `expulsion`
--
ALTER TABLE `expulsion`
  ADD PRIMARY KEY (`id_alumno`,`id_profesor`,`id_asignatura`,`control_jefatura`) USING BTREE;

--
-- Indices de la tabla `expulsion_directa`
--
ALTER TABLE `expulsion_directa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `falta_sancionada`
--
ALTER TABLE `falta_sancionada`
  ADD PRIMARY KEY (`id_sancion`,`id_falta`);

--
-- Indices de la tabla `sancion`
--
ALTER TABLE `sancion`
  ADD PRIMARY KEY (`id_sancion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amonestacion`
--
ALTER TABLE `amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `causa_amonestacion`
--
ALTER TABLE `causa_amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `causa_expulsion`
--
ALTER TABLE `causa_expulsion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `expulsion_directa`
--
ALTER TABLE `expulsion_directa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sancion`
--
ALTER TABLE `sancion`
  MODIFY `id_sancion` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
