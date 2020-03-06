-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2020 a las 22:32:08
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_datos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `dni` varchar(10) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `id_grupo`, `dni`, `nombre`, `apellidos`) VALUES
(1, 2, '1', 'José Antonio', 'Morales'),
(2, 2, '2', 'Andrés', 'Pardo'),
(3, 2, '3', 'José', 'Nieto'),
(4, 2, '4', 'Alan', 'Sifre'),
(5, 2, '5', 'Gabriel', 'Rubio'),
(6, 1, '6', 'Raquel', 'Ochoa'),
(7, 1, '7', 'Florencio', 'Pérez'),
(8, 2, '8', 'Juan ', 'Tobarra'),
(10, 2, '10', 'Carlos', 'Motos'),
(12, 3, '92424212W', 'Juan', 'Pérez'),
(13, 3, '23413453K', 'Carlos', 'Martínez'),
(14, 4, '11111111A', 'Óscar', 'Lozano'),
(15, 4, '22222222B', 'María', 'Jiménez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_familia`
--

CREATE TABLE `alumno_familia` (
  `id_familia` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno_familia`
--

INSERT INTO `alumno_familia` (`id_familia`, `id_alumno`) VALUES
(1, 5),
(2, 6),
(3, 2),
(4, 1),
(5, 3),
(6, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`id`, `denominacion`) VALUES
(1, 'Despliegue de aplicaciones web '),
(2, 'Diseño de interfaces web'),
(3, 'Desarrollo web entorno cliente'),
(4, 'Desarrollo web entorno servidor'),
(5, 'Historia'),
(6, 'Geografía'),
(7, 'Biología'),
(8, 'Literatura'),
(9, 'Sistemas informáticos'),
(10, 'Filosofía');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familia`
--

CREATE TABLE `familia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `familia`
--

INSERT INTO `familia` (`id`, `nombre`, `apellidos`, `correo`, `telefono`) VALUES
(1, 'Pedro', 'Navarro', 'pedro.navarro@gmail.com', '644346232'),
(2, 'Veronica', 'García', 'vero_garcia@gmail.com', '654235464'),
(3, 'Irene', 'Casanova', 'irenecasanova@hotmail.com', '642473485'),
(4, 'David', 'Gonzalez', 'daviiid@yahoo.es', '654236423'),
(5, 'Javier', 'Santiago', 'javiago@outlook.com', '633545474'),
(6, 'Jorge', 'Benítez', 'benitezjorge@yopmail.com', '643647545');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id`, `denominacion`) VALUES
(1, '1º DAW'),
(2, '2º DAW'),
(3, '1º BACHILLERATO'),
(4, '2º BACHILLERATO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `apellidos`, `telefono`) VALUES
(1, 'Inma', 'Moreno', '642234343'),
(2, 'Inma', 'Galdón', '645345474'),
(3, 'Daniel', 'García', '643235396'),
(4, 'Rosa', 'Ropero', '647838412'),
(5, 'Juan', 'Díz', '654323456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor_grupo_asignatura`
--

CREATE TABLE `profesor_grupo_asignatura` (
  `id` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesor_grupo_asignatura`
--

INSERT INTO `profesor_grupo_asignatura` (`id`, `id_profesor`, `id_grupo`, `id_asignatura`) VALUES
(3, 1, 2, 1),
(4, 2, 2, 2),
(5, 4, 2, 3),
(6, 3, 2, 4),
(7, 5, 3, 5),
(8, 5, 4, 6),
(9, 4, 2, 3),
(10, 4, 1, 9),
(11, 2, 2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indices de la tabla `alumno_familia`
--
ALTER TABLE `alumno_familia`
  ADD PRIMARY KEY (`id_familia`,`id_alumno`),
  ADD KEY `FK_alumno` (`id_alumno`);

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_asignatura` (`id_asignatura`),
  ADD KEY `id_grupo` (`id_grupo`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `familia`
--
ALTER TABLE `familia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupo` (`id`);

--
-- Filtros para la tabla `alumno_familia`
--
ALTER TABLE `alumno_familia`
  ADD CONSTRAINT `FK_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumno` (`id`),
  ADD CONSTRAINT `FK_familia` FOREIGN KEY (`id_familia`) REFERENCES `familia` (`id`);

--
-- Filtros para la tabla `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  ADD CONSTRAINT `profesor_grupo_asignatura_ibfk_1` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id`),
  ADD CONSTRAINT `profesor_grupo_asignatura_ibfk_2` FOREIGN KEY (`id_grupo`) REFERENCES `grupo` (`id`),
  ADD CONSTRAINT `profesor_grupo_asignatura_ibfk_3` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
