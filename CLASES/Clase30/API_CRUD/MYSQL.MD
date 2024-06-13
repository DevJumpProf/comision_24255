Creamos la base de datos
CREATE SCHEMA `posteos24255` DEFAULT CHARACTER SET utf8 ;

Creamos la tabla : posteos

id  - titulo - contenido - fecha de creacion - fecha de modificacion
CREATE TABLE `posteos24255`.`posteos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(65) NULL,
  `contenido` VARCHAR(140) NULL,
  `createAt` DATETIME NULL,
  `updateAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

creo dos registros desde my sql para consultarlos desde mi API (GET)
INSERT INTO `posteos24255`.`posteos` (`id`, `titulo`, `contenido`) VALUES ('1', 'titulo mysql', 'contenido del posteo en myql');
INSERT INTO `posteos24255`.`posteos` (`id`, `titulo`, `contenido`) VALUES ('2', 'otro posteo desde myql', 'otro contenido desde mysql');

------------

 como se reinicia un id
ALTER TABLE posteos AUTO_INCREMENT = 0; Donde posteos sera el nombre de nuestra tabla y 0 el numero por el que debe reiniciar (puede ser 0 o 50 o 1000, el que queramos).
-----------------------------------------------------------------------------------------------------------------------

DATABASE VS SCHEMA

CREATE DATABASE crea una estructura de base de datos completamente nueva con sus propias tablas de catálogo, etc.

CREATE SCHEMA crea un nuevo espacio de nombres para objetos dentro de una base de datos existente en sistemas como Oracle que solo admiten una única base de datos en una instancia de servidor. Algunos sistemas de bases de datos múltiples admiten CREAR ESQUEMA dentro de cada base de datos. Un único conjunto de tablas del catálogo de bases de datos contiene múltiples definiciones de esquema.

Otros, Informix es uno de ellos, tratan CREAR ESQUEMA simplemente como una forma de agrupar múltiples declaraciones DDL en una sola unidad lógica. Las declaraciones contenidas en el bloque CREATE SCHEMA... no se procesan de manera diferente que si se emitieran de forma independiente.
