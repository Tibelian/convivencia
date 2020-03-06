-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2020 a las 22:31:42
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
  `id_sancion` int(11) DEFAULT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `amonestacion`
--

INSERT INTO `amonestacion` (`id`, `id_alumno`, `id_profesor`, `id_asignatura`, `id_causa`, `id_sancion`, `fecha`) VALUES
(1, 5, 1, 1, 7, 3, '2020-01-28'),
(2, 5, 1, 1, 8, NULL, '2020-02-21'),
(3, 1, 1, 1, 9, NULL, '2020-02-28'),
(4, 3, 1, 1, 10, NULL, '2020-02-28'),
(5, 4, 1, 1, 11, NULL, '2020-02-28'),
(7, 1, 1, 1, 13, 4, '2020-02-28'),
(8, 1, 3, 4, 7, NULL, '2020-03-06'),
(9, 1, 1, 1, 16, 5, '0000-00-00');

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
(13, 'Varios retrasos'),
(14, 'Romper material escolar'),
(15, 'No hacer los deberes'),
(16, 'No asistir a las charlas obligatorias');

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
(5, 'Robar datos privados del instituto'),
(6, 'Llevar armas'),
(9, 'Acosar a sus compañer@s de clase'),
(11, 'Quemar el instituto'),
(12, 'Demasiado guapo'),
(13, 'prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expulsion`
--

CREATE TABLE `expulsion` (
  `id` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `id_causa` int(11) NOT NULL,
  `id_sancion` int(11) DEFAULT NULL,
  `control_jefatura` set('pendiente','aprobada','cancelada','') NOT NULL DEFAULT 'pendiente',
  `fecha_jefatura` date DEFAULT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `expulsion`
--

INSERT INTO `expulsion` (`id`, `id_alumno`, `id_profesor`, `id_asignatura`, `id_causa`, `id_sancion`, `control_jefatura`, `fecha_jefatura`, `fecha`) VALUES
(2, 2, 1, 1, 1, NULL, 'aprobada', '0000-00-00', '2020-02-28'),
(3, 3, 1, 1, 5, NULL, 'pendiente', NULL, '2020-03-04'),
(4, 4, 1, 1, 2, NULL, 'pendiente', NULL, '2020-03-04'),
(5, 5, 1, 1, 6, NULL, 'pendiente', NULL, '2020-03-04'),
(6, 8, 1, 1, 9, NULL, 'pendiente', NULL, '2020-03-04'),
(7, 10, 1, 1, 12, NULL, 'pendiente', NULL, '2020-03-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `id_profesor` int(11) NOT NULL,
  `perfil` enum('Profesor','JefeDeEstudios') NOT NULL,
  `usuario` varchar(32) NOT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`id_profesor`, `perfil`, `usuario`, `clave`) VALUES
(3, 'Profesor', 'dgarcia', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(2, 'Profesor', 'igaldon', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(1, 'Profesor', 'imoreno', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(5, 'JefeDeEstudios', 'jdiz', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'),
(4, 'Profesor', 'rropero', '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sancion`
--

CREATE TABLE `sancion` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `denominacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sancion`
--

INSERT INTO `sancion` (`id`, `fecha`, `denominacion`) VALUES
(3, '2020-03-06', 'Recoger la basura del patio durante 1 semana'),
(4, '2020-03-06', 'Expulsión 3 días'),
(5, '2020-03-06', 'prueba sanción'),
(6, '2020-03-06', 'directa 123...'),
(7, '2020-03-09', 'Ayudar al conserje con las tareas'),
(8, '2020-02-27', 'Ha sido expulsada por su mal comportamiento, duran');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sancion_directa`
--

CREATE TABLE `sancion_directa` (
  `id` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_sancion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sancion_directa`
--

INSERT INTO `sancion_directa` (`id`, `id_alumno`, `id_profesor`, `id_sancion`) VALUES
(1, 3, 1, 3),
(2, 1, 1, 6),
(3, 14, 5, 7),
(4, 15, 5, 8);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_alumno` (`id_alumno`,`id_profesor`,`id_asignatura`,`control_jefatura`) USING BTREE;

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `sancion`
--
ALTER TABLE `sancion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sancion_directa`
--
ALTER TABLE `sancion_directa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amonestacion`
--
ALTER TABLE `amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `causa_amonestacion`
--
ALTER TABLE `causa_amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `causa_expulsion`
--
ALTER TABLE `causa_expulsion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `expulsion`
--
ALTER TABLE `expulsion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `sancion`
--
ALTER TABLE `sancion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `sancion_directa`
--
ALTER TABLE `sancion_directa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
