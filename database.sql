-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-09-2023 a las 21:01:01
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `smggt_smg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `id_evento` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `evento` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id_evento`, `id_usuario`, `fecha_hora`, `evento`, `descripcion`) VALUES
(1, 1, '2022-09-13 15:22:26', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 1 al usuario 2'),
(2, 1, '2022-09-13 15:22:29', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 2 al usuario 2'),
(3, 1, '2022-09-13 15:22:46', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(4, 1, '2022-09-14 13:02:53', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-09-14 13:02:53'),
(5, 1, '2022-09-16 11:19:56', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-09-16 11:19:56'),
(6, 1, '2022-09-18 12:06:33', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-09-18 12:06:33'),
(7, 1, '2022-09-18 12:09:40', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-09-18 12:09:40'),
(8, 1, '2022-09-18 12:10:14', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(9, 1, '2022-10-03 15:14:24', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-03 15:14:24'),
(10, 1, '2022-10-03 15:44:34', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-03 15:44:34'),
(11, 1, '2022-10-03 16:08:08', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/boletines/files/23/ee/(TEST) - SMG.pdf a (TEST) - 1.pdf'),
(12, 1, '2022-10-03 16:14:32', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/23/ee/(TEST) - 1.pdf'),
(13, 1, '2022-10-03 16:23:39', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(14, 1, '2022-10-03 16:23:55', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-03 16:23:55'),
(15, 1, '2022-10-03 16:53:15', 'Carga de investigaciones', 'El usuario Noel de tipo 1 ha subido una investigación a: /home/smggt/public_html/investigaciones/files/23/ee/(TEST) - SMG.pdf, ((TEST) - SMG.pdf)'),
(16, 1, '2022-10-03 16:56:41', 'Eliminación de permiso', 'El usuario Noel de tipo 1 ha eliminado el permiso 2 - Administrador de contenido del usuario: 2 - Joselin'),
(17, 1, '2022-10-03 16:56:44', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 2 al usuario 2'),
(18, 1, '2022-10-03 16:57:25', 'Creación de usuario', 'El usuario Noel de tipo 1 ha creado al usuario: Debug - Debugging - noellopez1409@gmail.com'),
(19, 1, '2022-10-03 17:03:34', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-03 17:03:34'),
(20, 1, '2022-10-03 17:04:15', 'Creación de usuario', 'El usuario Noel de tipo 1 ha creado al usuario: Administrador - admin - admin@smg.gt'),
(21, 1, '2022-10-03 17:04:22', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 1 al usuario 4'),
(22, 1, '2022-10-03 17:04:25', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 2 al usuario 4'),
(23, 1, '2022-10-03 17:04:27', 'Eliminación de permiso', 'El usuario Noel de tipo 1 ha eliminado el permiso 1 - Administrador de usuarios del usuario: 4 - Administrador'),
(24, 1, '2022-10-03 17:04:28', 'Eliminación de permiso', 'El usuario Noel de tipo 1 ha eliminado el permiso 2 - Administrador de contenido del usuario: 4 - Administrador'),
(25, 1, '2022-10-03 17:04:31', 'Deshabilitación de usuarios', 'El usuario Noel de tipo 1 ha deshabilitado al usuario con id 4'),
(26, 1, '2022-10-03 17:04:33', 'Deshabilitación de usuarios', 'El usuario Noel de tipo 1 ha deshabilitado al usuario con id 3'),
(27, 1, '2022-10-03 17:04:57', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/23/ee/(TEST) - SMG.pdf, ((TEST) - SMG.pdf)'),
(28, 1, '2022-10-03 17:05:12', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/boletines/files/23/ee/(TEST) - SMG.pdf a (TESTING).pdf'),
(29, 1, '2022-10-03 17:05:17', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/23/ee/(TESTING).pdf'),
(30, 1, '2022-10-03 17:06:45', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(31, 1, '2022-10-04 12:51:27', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-04 12:51:27'),
(32, 1, '2022-10-04 13:35:10', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-04 13:35:10'),
(33, 1, '2022-10-04 13:35:57', 'Creación de usuario', 'El usuario Noel de tipo 1 ha creado al usuario: Prueba_umg - Prueba de recuperación correo UMG - jaime.lopez@umg.edu.gt'),
(34, 1, '2022-10-04 13:36:09', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 2 al usuario 5'),
(39, 1, '2022-10-04 13:37:32', 'Deshabilitación de usuarios', 'El usuario Noel de tipo 1 ha deshabilitado al usuario con id 5'),
(41, 1, '2022-10-04 13:38:58', 'Eliminación de permiso', 'El usuario Noel de tipo 1 ha eliminado el permiso 2 - Administrador de contenido del usuario: 5 - Prueba_umg'),
(44, 1, '2022-10-04 13:40:52', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/(TEST) - SMG.pdf, ((TEST) - SMG.pdf)'),
(45, 1, '2022-10-04 13:47:12', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/(TEST) - SMG2.pdf, ((TEST) - SMG2.pdf)'),
(46, 1, '2022-10-04 13:48:01', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/boletines/files/22/ee/(TEST) - SMG.pdf a (TEST) - SMG3.pdf'),
(47, 1, '2022-10-04 13:48:19', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/22/ee/(TEST) - SMG3.pdf'),
(48, 1, '2022-10-04 13:48:28', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/22/ee/(TEST) - SMG2.pdf'),
(49, 1, '2022-10-04 13:49:42', 'Carga de publicaciones', 'El usuario Noel de tipo 1 ha subido una publicación a: /home/smggt/public_html/publicaciones/files/22/ee/(TEST) - Publicación.pdf, ((TEST) - Publicación.pdf)'),
(50, 1, '2022-10-04 13:50:09', 'Actualización de publicaciones', 'El usuario Noel de tipo 1 ha actualizado la publicación ubicada en: /home/smggt/public_html/publicaciones/files/22/ee/(TEST) - Publicación.pdf con nombre de (TEST) - Publicación.pdf'),
(51, 1, '2022-10-04 13:50:29', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/publicaciones/files/22/ee/(TEST) - Publicación.pdf a (TEST) - (TEST).pdf'),
(52, 1, '2022-10-04 13:50:37', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/publicaciones/files/22/ee/(TEST) - (TEST).pdf'),
(53, 1, '2022-10-04 13:50:54', 'Carga de investigaciones', 'El usuario Noel de tipo 1 ha subido una investigación a: /home/smggt/public_html/investigaciones/files/22/ee/(TEST) - SMG.pdf, ((TEST) - SMG.pdf)'),
(54, 1, '2022-10-04 13:51:17', 'Carga de investigaciones', 'El usuario Noel de tipo 1 ha subido una investigación a: /home/smggt/public_html/investigaciones/files/22/ee/(TEST) - Investigación.pdf, ((TEST) - Investigación.pdf)'),
(55, 1, '2022-10-04 13:51:40', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/investigaciones/files/22/ee/(TEST) - Investigación.pdf a (TEST).pdf'),
(56, 1, '2022-10-04 13:51:54', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/investigaciones/files/22/ee/(TEST).pdf'),
(57, 1, '2022-10-04 13:52:05', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/investigaciones/files/22/ee/(TEST) - SMG.pdf'),
(58, 1, '2022-10-04 13:52:17', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/investigaciones/files/23/ee/(TEST) - SMG.pdf'),
(59, 1, '2022-10-04 14:17:55', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(60, 1, '2022-10-04 14:17:58', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(61, 1, '2022-10-04 17:12:03', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-04 17:12:03'),
(62, 1, '2022-10-04 17:50:25', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(63, 1, '2022-10-04 18:00:04', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-04 18:00:04'),
(64, 1, '2022-10-04 18:00:19', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 1 al usuario 5'),
(65, 1, '2022-10-04 18:00:21', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(72, 1, '2022-10-04 18:01:32', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-04 18:01:32'),
(73, 1, '2022-10-04 18:01:36', 'Deshabilitación de usuarios', 'El usuario Noel de tipo 1 ha deshabilitado al usuario con id 5'),
(74, 1, '2022-10-04 18:02:03', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(76, 1, '2022-10-05 09:25:44', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 09:25:44'),
(77, 1, '2022-10-05 09:27:07', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(78, 1, '2022-10-05 13:26:14', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 13:26:14'),
(79, 1, '2022-10-05 13:26:47', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/m/Boletín climático octubre, 2022.pdf, (Boletín climático octubre, 2022.pdf)'),
(80, 1, '2022-10-05 14:19:07', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 14:19:07'),
(81, 1, '2022-10-05 14:19:23', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(83, 1, '2022-10-05 14:19:38', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 14:19:38'),
(84, 1, '2022-10-05 14:22:33', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(85, 2, '2022-10-05 14:25:18', 'Token de recuperación de contraseñas', 'Se ha creado creado un token de recuperación de contraseña para el usuario joselin, enviado a: jraguaym@miumg.edu.gt'),
(86, 1, '2022-10-05 14:26:03', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 14:26:03'),
(87, 2, '2022-10-05 14:26:19', 'Actualización de contraseña', 'El usuario joselin ha actualizado su contraseña'),
(88, 2, '2022-10-05 14:26:34', 'Inicio de sesión', 'El usuario Joselin de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 14:26:34'),
(89, 1, '2022-10-05 15:15:02', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 15:15:02'),
(90, 1, '2022-10-05 16:44:41', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-05 16:44:41'),
(91, 1, '2022-10-05 16:48:18', 'Creación de usuario', 'El usuario Noel de tipo 1 ha creado al usuario: Noel - Noel López - noellopez1409@gmail.com'),
(92, 1, '2022-10-05 16:54:34', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 2 al usuario 4'),
(93, 1, '2022-10-05 16:55:16', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 1 al usuario 4'),
(94, 1, '2022-10-05 16:58:35', 'Eliminación de permiso', 'El usuario Noel de tipo 1 ha eliminado el permiso 1 - Administrador de usuarios del usuario: 4 - Administrador'),
(95, 1, '2022-10-05 16:58:36', 'Eliminación de permiso', 'El usuario Noel de tipo 1 ha eliminado el permiso 2 - Administrador de contenido del usuario: 4 - Administrador'),
(96, 1, '2022-10-06 12:58:49', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-06 12:58:49'),
(97, 1, '2022-10-06 12:59:38', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín 6 octubre 2022.pdf, (Boletín 6 octubre 2022.pdf)'),
(98, 1, '2022-10-06 12:59:41', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(99, 1, '2022-10-06 13:00:11', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-06 13:00:11'),
(100, 1, '2022-10-06 13:00:32', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/boletines/files/22/ee/Boletín 6 octubre 2022.pdf a Boletín especial 6 octubre 2022.pdf'),
(101, 1, '2022-10-06 14:16:10', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-06 14:16:10'),
(102, 1, '2022-10-07 12:29:22', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-07 12:29:22'),
(103, 1, '2022-10-07 12:30:02', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 7 octubre 2022.pdf, (Boletín especial 7 octubre 2022.pdf)'),
(104, 1, '2022-10-07 12:30:15', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(105, 1, '2022-10-08 12:10:42', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-08 12:10:42'),
(106, 1, '2022-10-08 12:11:24', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 8 octubre 2022.pdf, (Boletín especial 8 octubre 2022.pdf)'),
(107, 1, '2022-10-09 23:09:15', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-09 23:09:15'),
(108, 1, '2022-10-09 23:10:21', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 9 octubre 2022.pdf, (Boletín especial 9 octubre 2022.pdf)'),
(109, 1, '2022-10-09 23:11:40', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(110, 1, '2022-10-10 10:59:02', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-10 10:59:02'),
(111, 1, '2022-10-10 10:59:41', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 10 octubre 2022.pdf, (Boletín especial 10 octubre 2022.pdf)'),
(112, 1, '2022-10-10 12:56:39', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-10 12:56:39'),
(113, 1, '2022-10-10 12:56:47', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(114, 1, '2022-10-12 14:34:34', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-12 14:34:34'),
(115, 1, '2022-10-17 13:10:16', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-17 13:10:16'),
(116, 1, '2022-10-17 13:11:01', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/10/Boletín Meteorológico 17 al 23 de octubre 2022.pdf, (Boletín Meteorológico 17 al 23 de octubre 2022.pdf)'),
(117, 1, '2022-10-24 13:00:20', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-24 13:00:20'),
(118, 1, '2022-10-24 13:00:20', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-24 13:00:20'),
(119, 1, '2022-10-31 13:00:33', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-10-31 13:00:33'),
(120, 1, '2022-10-31 13:04:21', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/10/Boletín Meteorológico del 2022-10-31 al 2022-11-06.pdf, (Boletín Meteorológico del 2022-10-31 al 2022-11-06.pdf)'),
(121, 1, '2022-11-02 12:59:42', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-02 12:59:42'),
(122, 1, '2022-11-02 13:01:09', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 1 noviembre 2022a.pdf, (Boletín especial 1 noviembre 2022a.pdf)'),
(123, 1, '2022-11-02 13:01:51', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 2 noviembre 2022.pdf, (Boletín especial 2 noviembre 2022.pdf)'),
(124, 1, '2022-11-02 17:16:25', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-02 17:16:25'),
(125, 1, '2022-11-02 17:17:39', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 2 noviembre 2022b.pdf, (Boletín especial 2 noviembre 2022b.pdf)'),
(126, 1, '2022-11-02 17:18:03', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 2 noviembre 2022.pdf a Boletín especial 2 noviembre 2022a.pdf'),
(127, 1, '2022-11-03 13:02:26', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-03 13:02:26'),
(128, 1, '2022-11-03 13:03:30', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 3 noviembre 2022a.pdf, (Boletín especial 3 noviembre 2022a.pdf)'),
(129, 1, '2022-11-03 13:04:17', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 3 noviembre 2022b.pdf, (Boletín especial 3 noviembre 2022b.pdf)'),
(130, 1, '2022-11-04 12:57:00', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-04 12:57:00'),
(131, 1, '2022-11-04 12:57:59', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 4 noviembre 2022.pdf, (Boletín especial 4 noviembre 2022.pdf)'),
(132, 1, '2022-11-07 12:55:35', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-07 12:55:35'),
(133, 1, '2022-11-07 13:00:07', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/m/Boletín climático noviembre, 2022.pdf, (Boletín climático noviembre, 2022.pdf)'),
(134, 1, '2022-11-07 13:02:37', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/ee/Boletín especial 5 noviembre 2022.pdf, (Boletín especial 5 noviembre 2022.pdf)'),
(135, 1, '2022-11-07 13:03:53', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/11/Boletín Meteorológico 7 al 13 de noviembre 2022.pdf, (Boletín Meteorológico 7 al 13 de noviembre 2022.pdf)'),
(136, 1, '2022-11-14 13:01:20', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-14 13:01:20'),
(137, 1, '2022-11-14 13:03:36', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/11/Boletín Meteorológico 14 al 20 de noviembre 2022.pdf, (Boletín Meteorológico 14 al 20 de noviembre 2022.pdf)'),
(138, 1, '2022-11-14 13:04:06', 'Cambio de nombre de archivos', 'El usuario Noel de tipo 1 ha cambiado el nombre del archivo ubicado en: /home/smggt/public_html/boletines/files/22/s/11/Boletín Meteorológico 7 al 13 de noviembre 2022.pdf a Boletín Meteorológico 07 al 13 de noviembre 2022.pdf'),
(139, 1, '2022-11-21 12:56:37', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-21 12:56:37'),
(140, 1, '2022-11-21 12:58:02', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/11/Boletín Meteorológico 21 al 27 de noviembre 2022.pdf, (Boletín Meteorológico 21 al 27 de noviembre 2022.pdf)'),
(141, 1, '2022-11-21 12:59:33', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(142, 1, '2022-11-24 16:58:36', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-24 16:58:36'),
(143, 1, '2022-11-28 12:56:28', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-28 12:56:28'),
(144, 1, '2022-11-28 13:12:51', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/11/Boletín Meteorológico del 2022-11-28 al 2022-12-06.pdf, (Boletín Meteorológico del 2022-11-28 al 2022-12-06.pdf)'),
(145, 1, '2022-11-28 13:16:17', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/23/s/01/Boletín de prueba 2023.pdf, (Boletín de prueba 2023.pdf)'),
(146, 1, '2022-11-28 13:19:42', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/23/s/01/Boletín de prueba 2023.pdf'),
(147, 1, '2022-11-28 13:20:13', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/23/m/Boletín de prueba (mes).pdf, (Boletín de prueba (mes).pdf)'),
(148, 1, '2022-11-28 13:21:13', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/23/m/Boletín de prueba (mes).pdf'),
(149, 1, '2022-11-28 13:22:44', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/23/ee/Prueba boletin (evento).pdf, (Prueba boletin (evento).pdf)'),
(150, 1, '2022-11-28 13:26:24', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/boletines/files/23/ee/Prueba boletin (evento).pdf'),
(151, 1, '2022-11-28 13:27:09', 'Carga de investigaciones', 'El usuario Noel de tipo 1 ha subido una investigación a: /home/smggt/public_html/investigaciones/files/23/ee/Inv de prueba (23).pdf, (Inv de prueba (23).pdf)'),
(152, 1, '2022-11-28 13:29:14', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/investigaciones/files/23/ee/Inv de prueba (23).pdf'),
(153, 1, '2022-11-28 13:38:45', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-11-28 13:38:45'),
(154, 1, '2022-11-28 13:42:06', 'Carga de publicaciones', 'El usuario Noel de tipo 1 ha subido una publicación a: /home/smggt/public_html/publicaciones/files/23/ee/Publicación prueba (23).pdf, (Publicación prueba (23).pdf)'),
(155, 1, '2022-11-28 13:43:03', 'Eliminación de archivos', 'El usuario Noel de tipo 1 ha eliminado el archivo /home/smggt/public_html/publicaciones/files/23/ee/Publicación prueba (23).pdf'),
(156, 1, '2022-12-02 13:17:50', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-12-02 13:17:50'),
(157, 1, '2022-12-02 13:18:00', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(158, 1, '2022-12-05 12:59:16', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-12-05 12:59:16'),
(159, 1, '2022-12-05 13:03:02', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/s/12/Boletín Meteorológico 05 al 15 de diciembre 2022.pdf, (Boletín Meteorológico 05 al 15 de diciembre 2022.pdf)'),
(160, 1, '2022-12-05 13:04:38', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(161, 1, '2022-12-06 13:12:50', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2022-12-06 13:12:50'),
(162, 1, '2022-12-06 13:14:49', 'Carga de boletines', 'El usuario Noel de tipo 1 ha subido un boletin a: /home/smggt/public_html/boletines/files/22/m/Boletín climático diciembre, 2022.pdf, (Boletín climático diciembre, 2022.pdf)'),
(163, 1, '2022-12-06 13:33:57', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(164, 1, '2023-06-27 07:41:40', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-06-27 07:41:40'),
(165, 1, '2023-06-27 07:42:10', 'Creación de usuario', 'El usuario Noel de tipo 1 ha creado al usuario: TEST - Testing - jaime.lopez@umg.edu.gt'),
(166, 1, '2023-06-27 07:42:22', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 2 al usuario 3'),
(167, 1, '2023-06-27 07:43:02', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(168, 3, '2023-06-27 07:43:16', 'Inicio de sesión', 'El usuario TEST de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-06-27 07:43:16'),
(169, 3, '2023-06-27 07:45:53', 'Fin de sesión', 'El usuario TEST de tipo 2 ha cerrado sesión'),
(170, 1, '2023-06-27 07:46:00', 'Inicio de sesión', 'El usuario Noel de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-06-27 07:46:00'),
(171, 1, '2023-06-27 07:46:09', 'Asignación de permisos', 'El usuario Noel de tipo 1 ha agregado el permiso 1 al usuario 3'),
(172, 1, '2023-06-27 07:46:13', 'Fin de sesión', 'El usuario Noel de tipo 1 ha cerrado sesión'),
(173, 3, '2023-06-27 07:46:17', 'Inicio de sesión', 'El usuario TEST de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-06-27 07:46:17'),
(174, 3, '2023-09-05 13:12:40', 'Inicio de sesión', 'El usuario Test de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:12:40'),
(175, 3, '2023-09-05 13:14:41', 'Creación de usuario', 'El usuario Test de tipo 1 ha creado al usuario: Oliver - Oliver Tzunun  - oliver@gmail.com'),
(176, 3, '2023-09-05 13:16:58', 'Fin de sesión', 'El usuario Test de tipo 1 ha cerrado sesión'),
(177, 4, '2023-09-05 13:20:51', 'Inicio de sesión', 'El usuario Oliver de tipo 0 ha iniciado sesión en el sistema a las 2023-09-05 13:20:51'),
(178, 4, '2023-09-05 13:20:58', 'Inicio de sesión', 'El usuario Oliver de tipo 0 ha iniciado sesión en el sistema a las 2023-09-05 13:20:58'),
(179, 3, '2023-09-05 13:21:04', 'Inicio de sesión', 'El usuario Test de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:21:04'),
(180, 3, '2023-09-05 13:21:15', 'Asignación de permisos', 'El usuario Test de tipo 1 ha agregado el permiso 2 al usuario 4'),
(181, 3, '2023-09-05 13:21:21', 'Fin de sesión', 'El usuario Test de tipo 1 ha cerrado sesión'),
(182, 4, '2023-09-05 13:22:24', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 13:22:24'),
(183, 4, '2023-09-05 13:25:12', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión'),
(184, 3, '2023-09-05 13:25:21', 'Inicio de sesión', 'El usuario Test de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:25:21'),
(185, 3, '2023-09-05 13:25:37', 'Creación de usuario', 'El usuario Test de tipo 1 ha creado al usuario: Revisor - revisor - rev@gmail.com'),
(186, 3, '2023-09-05 13:25:46', 'Asignación de permisos', 'El usuario Test de tipo 1 ha agregado el permiso 0 al usuario 5'),
(187, 3, '2023-09-05 13:25:59', 'Fin de sesión', 'El usuario Test de tipo 1 ha cerrado sesión'),
(192, 3, '2023-09-05 13:30:30', 'Fin de sesión', 'El usuario Test de tipo 1 ha cerrado sesión'),
(193, 4, '2023-09-05 13:30:55', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 13:30:55'),
(194, 4, '2023-09-05 13:35:15', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión'),
(195, 4, '2023-09-05 13:35:31', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 13:35:31'),
(196, 4, '2023-09-05 13:43:13', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 13:43:13'),
(197, 4, '2023-09-05 13:45:15', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión'),
(198, 3, '2023-09-05 13:46:55', 'Inicio de sesión', 'El usuario Test de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:46:55'),
(199, 3, '2023-09-05 13:47:11', 'Creación de usuario', 'El usuario Test de tipo 1 ha creado al usuario: admin - admin - admin@gmail.com'),
(200, 3, '2023-09-05 13:49:14', 'Asignación de permisos', 'El usuario Test de tipo 1 ha agregado el permiso 1 al usuario 6'),
(201, 3, '2023-09-05 13:49:20', 'Fin de sesión', 'El usuario Test de tipo 1 ha cerrado sesión'),
(202, 6, '2023-09-05 13:50:08', 'Inicio de sesión', 'El usuario admin de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:50:08'),
(203, 6, '2023-09-05 13:50:09', 'Fin de sesión', 'El usuario admin de tipo 1 ha cerrado sesión'),
(204, 4, '2023-09-05 13:50:18', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 13:50:18'),
(205, 4, '2023-09-05 13:50:32', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión'),
(206, 6, '2023-09-05 13:50:38', 'Inicio de sesión', 'El usuario admin de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:50:38'),
(207, 6, '2023-09-05 13:50:52', 'Creación de usuario', 'El usuario admin de tipo 1 ha creado al usuario: Revisor - rev - rev@gmail.com'),
(208, 6, '2023-09-05 13:51:11', 'Asignación de permisos', 'El usuario admin de tipo 1 ha agregado el permiso 4 al usuario 7'),
(209, 6, '2023-09-05 13:51:37', 'Creación de usuario', 'El usuario admin de tipo 1 ha creado al usuario: Editor - editor - editor@gmail.com'),
(210, 6, '2023-09-05 13:51:47', 'Asignación de permisos', 'El usuario admin de tipo 1 ha agregado el permiso 3 al usuario 8'),
(211, 6, '2023-09-05 13:53:01', 'Fin de sesión', 'El usuario admin de tipo 1 ha cerrado sesión'),
(212, 8, '2023-09-05 13:53:16', 'Inicio de sesión', 'El usuario Editor de tipo Editor ha iniciado sesión en el sistema a las 2023-09-05 13:53:16'),
(213, 8, '2023-09-05 13:53:25', 'Fin de sesión', 'El usuario Editor de tipo 3 ha cerrado sesión'),
(214, 3, '2023-09-05 13:55:10', 'Inicio de sesión', 'El usuario Test de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 13:55:10'),
(215, 3, '2023-09-05 13:56:28', 'Fin de sesión', 'El usuario Test de tipo 1 ha cerrado sesión'),
(216, 7, '2023-09-05 13:56:35', 'Inicio de sesión', 'El usuario Revisor de tipo Revisor ha iniciado sesión en el sistema a las 2023-09-05 13:56:35'),
(217, 7, '2023-09-05 13:57:02', 'Inicio de sesión', 'El usuario Revisor de tipo Revisor ha iniciado sesión en el sistema a las 2023-09-05 13:57:02'),
(218, 7, '2023-09-05 14:00:05', 'Inicio de sesión', 'El usuario Revisor de tipo Revisor ha iniciado sesión en el sistema a las 2023-09-05 14:00:05'),
(219, 7, '2023-09-05 14:00:09', 'Fin de sesión', 'El usuario Revisor de tipo 4 ha cerrado sesión'),
(220, 6, '2023-09-05 14:00:15', 'Inicio de sesión', 'El usuario admin de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 14:00:15'),
(221, 6, '2023-09-05 14:00:19', 'Fin de sesión', 'El usuario admin de tipo 1 ha cerrado sesión'),
(222, 6, '2023-09-05 14:01:28', 'Inicio de sesión', 'El usuario admin de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-05 14:01:28'),
(223, 4, '2023-09-05 14:35:48', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 14:35:48'),
(224, 4, '2023-09-05 14:41:04', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión'),
(225, 4, '2023-09-05 15:00:56', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-05 15:00:56'),
(226, 4, '2023-09-05 15:01:26', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión'),
(227, 6, '2023-09-06 04:18:02', 'Inicio de sesión', 'El usuario admin de tipo Administrador de usuarios ha iniciado sesión en el sistema a las 2023-09-06 04:18:02'),
(228, 6, '2023-09-06 04:18:15', 'Fin de sesión', 'El usuario admin de tipo 1 ha cerrado sesión'),
(229, 4, '2023-09-06 04:18:23', 'Inicio de sesión', 'El usuario Oliver de tipo Administrador de contenido ha iniciado sesión en el sistema a las 2023-09-06 04:18:23'),
(230, 4, '2023-09-06 04:20:14', 'Fin de sesión', 'El usuario Oliver de tipo 2 ha cerrado sesión');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `contenido` varchar(1000) NOT NULL,
  `estado` int(11) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `fecha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`id`, `titulo`, `contenido`, `estado`, `imagen`, `fecha`) VALUES
(1, 'Erupcion en Quetzaltenango', 'Una erupción volcánica es un fenómeno geológico caracterizado por la emisión violenta en la superficie terrestre, por un volcán, de lavas y/o tefras acompañadas de gases volcánicos. Se excluyen de esta definición los géiseres, que emiten agua caliente, y los volcanes de lodo, cuya materia, en gran parte es orgánica.\r\nSe excluyen de esta definición los géiseres, que emiten agua caliente, y los volcanes de lodo, cuya materia, en gran parte es orgánica.\r\nSe excluyen de esta definición los géiseres, que emiten agua caliente, y los volcanes de lodo, cuya materia, en gran parte es orgánica.', 1, 'imagen.jpg', '2017-06-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permiso`
--

CREATE TABLE `permiso` (
  `id_perm` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `permiso`
--

INSERT INTO `permiso` (`id_perm`, `descripcion`, `estado`) VALUES
(1, 'Administrador de usuarios', 1),
(2, 'Administrador de contenido', 1),
(3, 'Editor', 1),
(4, 'Revisor', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perm_users`
--

CREATE TABLE `perm_users` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_perm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `perm_users`
--

INSERT INTO `perm_users` (`id`, `id_usuario`, `id_perm`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 2),
(5, 3, 2),
(6, 3, 1),
(7, 4, 2),
(9, 6, 1),
(10, 7, 4),
(11, 8, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `id_token` int(11) NOT NULL,
  `token` varchar(260) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `estado` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nom_completo` varchar(100) NOT NULL,
  `nom_usuario` varchar(50) NOT NULL,
  `password` varchar(260) NOT NULL,
  `email` varchar(100) NOT NULL,
  `estado` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nom_completo`, `nom_usuario`, `password`, `email`, `estado`) VALUES
(1, 'Noel López', 'Noel', '$2y$12$3D2kyy8BDRfPxyiZ.fsm7.a9LIOFp3gKYS6D.gh3k47vRMB4Ytl5m', 'noellopez1409@gmail.com', 1),
(2, 'Joselin Raguay', 'Joselin', '$2y$12$gn34muX0IGmyPZDfaIwy2.UUybVlrCH88enCiNNVVeHAuw/xHxGSy', 'jraguaym@miumg.edu.gt', 1),
(3, 'Testing', 'TEST', '$2y$12$yHQ0ZEiZE6qeGQ9iEBHMbO1vMgheQ9UNhThGvU4M8G8s/DsipCmFi', 'jaime.lopez@umg.edu.gt', 1),
(4, 'Oliver Tzunun ', 'Oliver', '$2y$12$0YFUaDG/TR7e.HEEsO4lb.opFIkETVfYqNz/x4d/FcJLkEQf9OeuW', 'oliver@gmail.com', 1),
(6, 'admin', 'admin', '$2y$12$PylKbosaeR7aU16mysIX/.49lSubjw2pPuz.mH.vkWHBwSqVx1Qyy', 'admin@gmail.com', 1),
(7, 'rev', 'Revisor', '$2y$12$eg0NLgwov.KAHEC/lr8Y3OoFNgkxv4fllvW0DDDta5YOw61ctqtf2', 'rev@gmail.com', 1),
(8, 'editor', 'Editor', '$2y$12$InJ9i3pGo4HsZVFKildakumH7BHD2Pgbdv.Q85fLTMyUFDcrNm4UG', 'editor@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `fk_bitacoraUsuario` (`id_usuario`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permiso`
--
ALTER TABLE `permiso`
  ADD PRIMARY KEY (`id_perm`);

--
-- Indices de la tabla `perm_users`
--
ALTER TABLE `perm_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_listaUsuario` (`id_usuario`),
  ADD KEY `fk_listaPerm` (`id_perm`);

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `fk_tokenUsuario` (`id_usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `nom_usuario` (`nom_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;

--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `perm_users`
--
ALTER TABLE `perm_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `token`
--
ALTER TABLE `token`
  MODIFY `id_token` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `fk_bitacoraUsuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `perm_users`
--
ALTER TABLE `perm_users`
  ADD CONSTRAINT `fk_listaPerm` FOREIGN KEY (`id_perm`) REFERENCES `permiso` (`id_perm`),
  ADD CONSTRAINT `fk_listaUsuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `fk_tokenUsuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
