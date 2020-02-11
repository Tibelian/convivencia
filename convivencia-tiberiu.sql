-- phpMyAdmin SQL Dump
-- version 5.0.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2020 at 01:05 PM
-- Server version: 10.1.43-MariaDB-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_convivencia`
--
DROP DATABASE IF EXISTS `bd_convivencia`;
CREATE DATABASE IF NOT EXISTS `bd_convivencia` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bd_convivencia`;

-- --------------------------------------------------------

--
-- Table structure for table `amonestacion`
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
-- Dumping data for table `amonestacion`
--

INSERT INTO `amonestacion` (`id`, `id_alumno`, `id_profesor`, `id_asignatura`, `id_causa`, `fecha`) VALUES
(1, 5, 1, 1, 7, '2020-01-28');

-- --------------------------------------------------------

--
-- Table structure for table `causa_amonestacion`
--

CREATE TABLE `causa_amonestacion` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `causa_amonestacion`
--

INSERT INTO `causa_amonestacion` (`id`, `denominacion`) VALUES
(7, 'Faltar al respeto');

-- --------------------------------------------------------

--
-- Table structure for table `causa_expulsion`
--

CREATE TABLE `causa_expulsion` (
  `id` int(11) NOT NULL,
  `denominacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `expulsion`
--

CREATE TABLE `expulsion` (
  `id_alumno` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `id_causa` int(11) NOT NULL,
  `id_sancion` int(11) NOT NULL,
  `control_jefatura` int(11) NOT NULL,
  `fecha_jefatura` date NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `expulsion_directa`
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
-- Table structure for table `falta_sancionada`
--

CREATE TABLE `falta_sancionada` (
  `id_sancion` int(11) NOT NULL,
  `id_falta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `perfil`
--

CREATE TABLE `perfil` (
  `id_profesor` int(11) NOT NULL,
  `perfil` enum('Profesor','JefeEstudios') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sancion`
--

CREATE TABLE `sancion` (
  `id_sancion` int(11) NOT NULL,
  `fechaSancion` date NOT NULL,
  `denomSancion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amonestacion`
--
ALTER TABLE `amonestacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `causa_amonestacion`
--
ALTER TABLE `causa_amonestacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `causa_expulsion`
--
ALTER TABLE `causa_expulsion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expulsion`
--
ALTER TABLE `expulsion`
  ADD PRIMARY KEY (`id_alumno`,`id_profesor`,`id_asignatura`);

--
-- Indexes for table `expulsion_directa`
--
ALTER TABLE `expulsion_directa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `falta_sancionada`
--
ALTER TABLE `falta_sancionada`
  ADD PRIMARY KEY (`id_sancion`,`id_falta`);

--
-- Indexes for table `sancion`
--
ALTER TABLE `sancion`
  ADD PRIMARY KEY (`id_sancion`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amonestacion`
--
ALTER TABLE `amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `causa_amonestacion`
--
ALTER TABLE `causa_amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `expulsion_directa`
--
ALTER TABLE `expulsion_directa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sancion`
--
ALTER TABLE `sancion`
  MODIFY `id_sancion` int(11) NOT NULL AUTO_INCREMENT;
--
-- Database: `bd_datos`
--
DROP DATABASE IF EXISTS `bd_datos`;
CREATE DATABASE IF NOT EXISTS `bd_datos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bd_datos`;

-- --------------------------------------------------------

--
-- Table structure for table `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `alumno`
--

INSERT INTO `alumno` (`id`, `id_grupo`, `nombre`, `apellidos`) VALUES
(1, 2, 'Anabel', 'Morales'),
(2, 2, 'Daniel', 'Pardo'),
(3, 2, 'Tiberiu', 'Dafinescu'),
(4, 2, 'Alan', 'Sifre'),
(5, 2, 'Gabriel', 'Martínez');

-- --------------------------------------------------------

--
-- Table structure for table `alumno_familia`
--

CREATE TABLE `alumno_familia` (
  `id_familia` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `asignatura`
--

CREATE TABLE `asignatura` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `asignatura`
--

INSERT INTO `asignatura` (`id`, `denominacion`) VALUES
(1, 'Despliegue de aplicaciones web '),
(2, 'Diseño de interfaces web'),
(3, 'Desarrollo web entorno cliente'),
(4, 'Desarrollo web entorno servidor');

-- --------------------------------------------------------

--
-- Table structure for table `familia`
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
-- Table structure for table `grupo`
--

CREATE TABLE `grupo` (
  `id` int(11) NOT NULL,
  `denominacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `grupo`
--

INSERT INTO `grupo` (`id`, `denominacion`) VALUES
(1, '1º DAW'),
(2, '2º DAW');

-- --------------------------------------------------------

--
-- Table structure for table `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `apellidos`, `telefono`) VALUES
(1, 'Inma', 'Moreno', '642234343'),
(2, 'Inma', 'Galdón', '645345474'),
(3, 'Daniel', 'García', '643235396'),
(4, 'Rosa', 'Burner', '647838412');

-- --------------------------------------------------------

--
-- Table structure for table `profesor_grupo_asignatura`
--

CREATE TABLE `profesor_grupo_asignatura` (
  `id` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profesor_grupo_asignatura`
--

INSERT INTO `profesor_grupo_asignatura` (`id`, `id_profesor`, `id_grupo`, `id_asignatura`) VALUES
(3, 1, 2, 1),
(4, 2, 2, 2),
(5, 4, 2, 3),
(6, 3, 2, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indexes for table `alumno_familia`
--
ALTER TABLE `alumno_familia`
  ADD PRIMARY KEY (`id_familia`,`id_alumno`),
  ADD KEY `FK_alumno` (`id_alumno`);

--
-- Indexes for table `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_asignatura` (`id_asignatura`),
  ADD KEY `id_grupo` (`id_grupo`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `familia`
--
ALTER TABLE `familia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupo` (`id`);

--
-- Constraints for table `alumno_familia`
--
ALTER TABLE `alumno_familia`
  ADD CONSTRAINT `FK_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumno` (`id`),
  ADD CONSTRAINT `FK_familia` FOREIGN KEY (`id_familia`) REFERENCES `familia` (`id`);

--
-- Constraints for table `profesor_grupo_asignatura`
--
ALTER TABLE `profesor_grupo_asignatura`
  ADD CONSTRAINT `profesor_grupo_asignatura_ibfk_1` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id`),
  ADD CONSTRAINT `profesor_grupo_asignatura_ibfk_2` FOREIGN KEY (`id_grupo`) REFERENCES `grupo` (`id`),
  ADD CONSTRAINT `profesor_grupo_asignatura_ibfk_3` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

