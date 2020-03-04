-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2020 a las 11:57:10
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
-- Base de datos: `bd_datos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `id_grupo`, `nombre`, `apellidos`) VALUES
(1, 2, 'Anabel', 'Morales'),
(2, 2, 'Daniel', 'Pardo'),
(3, 2, 'Tiberiu', 'Dafinescu'),
(4, 2, 'Alan', 'Sifre'),
(5, 2, 'Gabriel', 'Martínez'),
(6, 1, 'Graciela', 'Martínez Bonillo'),
(7, 1, 'Florencio', 'Pérez'),
(8, 2, 'Juan Luis', 'Tobarra Alegre'),
(10, 2, 'Carlos', 'Motos'),
(11, 2, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_familia`
--

CREATE TABLE `alumno_familia` (
  `id_familia` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(4, 'Desarrollo web entorno servidor');

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
(2, '2º DAW');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `usuario` varchar(32) DEFAULT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `apellidos`, `telefono`, `usuario`, `clave`) VALUES
(1, 'Inma', 'Moreno', '642234343', 'imoreno', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(2, 'Inma', 'Galdón', '645345474', 'igaldon', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(3, 'Daniel', 'García', '643235396', 'dgarcia', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(4, 'Rosa', 'Burner', '647838412', 'rburner', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9');

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
(6, 3, 2, 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`),
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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `familia`
--
ALTER TABLE `familia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
