-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema OjosDGato
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema OjosDGato
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `OjosDGato` DEFAULT CHARACTER SET utf8 ;
USE `OjosDGato` ;

-- -----------------------------------------------------
-- Table `OjosDGato`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre_cliente` VARCHAR(100) NOT NULL,
  `apellido_cliente` VARCHAR(100) NOT NULL,
  `email_cliente` VARCHAR(100) NOT NULL,
  `telefono_cliente` INT NOT NULL,
  `usuario_cliente` VARCHAR(20) NOT NULL,
  `contrasena_cliente` VARCHAR(18) NOT NULL,
  `tipo_cliente` INT NOT NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Servicio` (
  `id_servicio` INT NOT NULL AUTO_INCREMENT,
  `nombre_servicio` VARCHAR(45) NOT NULL,
  `precio_servicio` DECIMAL(10,2) NOT NULL,
  `descripcion_servicio` VARCHAR(200) NOT NULL,
  `tiempo_servicio` VARCHAR(15) NOT NULL,
  `imagen_servicio` VARCHAR(125) NULL,
  PRIMARY KEY (`id_servicio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Marca` (
  `id_marca` INT NOT NULL AUTO_INCREMENT,
  `nombre_marca` VARCHAR(45) NOT NULL,
  `imagen_marca` VARCHAR(125) NOT NULL,
  PRIMARY KEY (`id_marca`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(45) NOT NULL,
  `precio_producto` DECIMAL(10,2) NOT NULL,
  `descripcion_producto` VARCHAR(200) NOT NULL,
  `inventario_producto` INT NOT NULL,
  `imagen_producto` VARCHAR(125) NULL,
  PRIMARY KEY (`id_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Direccion` (
  `id_direccion` INT NOT NULL AUTO_INCREMENT,
  `alias_direccion` VARCHAR(30) NOT NULL,
  `codigoPostal_direccion` INT NOT NULL,
  `estado_direccion` VARCHAR(25) NOT NULL,
  `municipio_direccion` VARCHAR(45) NOT NULL,
  `colonia_direccion` VARCHAR(45) NOT NULL,
  `calle_direccion` VARCHAR(45) NOT NULL,
  `numeroInt_direccion` INT NULL,
  `numeroExt_direccion` INT NULL,
  `calle1_direccion` VARCHAR(45) NULL,
  `calle2_direccion` VARCHAR(45) NULL,
  `telefono_direccion` INT NOT NULL,
  `indicaciones_direccion` VARCHAR(200) NULL,
  PRIMARY KEY (`id_direccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Tarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Tarjeta` (
  `id_tarjeta` INT NOT NULL AUTO_INCREMENT,
  `alias_tarjeta` VARCHAR(30) NOT NULL,
  `titular_tarjeta` VARCHAR(200) NOT NULL,
  `numero_tarjeta` INT NOT NULL,
  `mesVencimiento_tarjeta` INT NOT NULL,
  `yearVencimiento_tarjeta` INT NOT NULL,
  `cvv_tarjeta` INT NOT NULL,
  PRIMARY KEY (`id_tarjeta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`ProductoPedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`ProductoPedido` (
  `id_productoPedido` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NOT NULL,
  `cantidad_productoPedido` INT NOT NULL,
  `total_productoPedido` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_productoPedido`),
  INDEX `id_producto_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `id_producto`
    FOREIGN KEY (`id_producto`)
    REFERENCES `OjosDGato`.`Producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`servicioPedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`servicioPedido` (
  `id_servicioPedido` INT NOT NULL AUTO_INCREMENT,
  `id_servicio` INT NOT NULL,
  `cantidad_servicioPedido` INT NOT NULL,
  `total_servicioPedido` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_servicioPedido`),
  INDEX `id_producto0_idx` (`id_servicio` ASC) VISIBLE,
  CONSTRAINT `id_servicio`
    FOREIGN KEY (`id_servicio`)
    REFERENCES `OjosDGato`.`Servicio` (`id_servicio`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Producto_has_Marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Producto_has_Marca` (
  `Producto_id_producto` INT NOT NULL,
  `Marca_id_marca` INT NOT NULL,
  PRIMARY KEY (`Producto_id_producto`, `Marca_id_marca`),
  INDEX `fk_Producto_has_Marca_Marca1_idx` (`Marca_id_marca` ASC) VISIBLE,
  INDEX `fk_Producto_has_Marca_Producto1_idx` (`Producto_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_Producto_has_Marca_Producto1`
    FOREIGN KEY (`Producto_id_producto`)
    REFERENCES `OjosDGato`.`Producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Producto_has_Marca_Marca1`
    FOREIGN KEY (`Marca_id_marca`)
    REFERENCES `OjosDGato`.`Marca` (`id_marca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Cita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Cita` (
  `id_cita` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `id_servicio` INT NOT NULL,
  `fecha_cita` DATE NOT NULL,
  `hora_cita` TIME NOT NULL,
  `nombre_cita` VARCHAR(100) NOT NULL,
  `estatus_cita` INT NOT NULL,
  PRIMARY KEY (`id_cita`),
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `id_servicio_idx` (`id_servicio` ASC) VISIBLE,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `OjosDGato`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `id_servicio1`
    FOREIGN KEY (`id_servicio`)
    REFERENCES `OjosDGato`.`Servicio` (`id_servicio`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Orden` (
  `id_orden` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `id_productoPedido` INT NOT NULL,
  `id_servicioPedido` INT NOT NULL,
  `envio` BIT NOT NULL,
  `total_orden` DECIMAL(10,2) NOT NULL,
  `estatus_orden` INT NOT NULL,
  PRIMARY KEY (`id_orden`),
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `id_productoPedido_idx` (`id_productoPedido` ASC) VISIBLE,
  INDEX `id_servicioPedido_idx` (`id_servicioPedido` ASC) VISIBLE,
  CONSTRAINT `id_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `OjosDGato`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `id_productoPedido`
    FOREIGN KEY (`id_productoPedido`)
    REFERENCES `OjosDGato`.`ProductoPedido` (`id_productoPedido`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `id_servicioPedido`
    FOREIGN KEY (`id_servicioPedido`)
    REFERENCES `OjosDGato`.`servicioPedido` (`id_servicioPedido`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Comentario` (
  `id_comentario` INT NOT NULL AUTO_INCREMENT,
  `id_orden` INT NOT NULL,
  `texto_comentario` VARCHAR(200) NOT NULL,
  `valoracion` INT NOT NULL,
  PRIMARY KEY (`id_comentario`),
  INDEX `id_orden_idx` (`id_orden` ASC) VISIBLE,
  CONSTRAINT `id_orden`
    FOREIGN KEY (`id_orden`)
    REFERENCES `OjosDGato`.`Orden` (`id_orden`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Tarjeta_has_Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Tarjeta_has_Cliente` (
  `Tarjeta_id_tarjeta` INT NOT NULL,
  `Cliente_id_cliente` INT NOT NULL,
  PRIMARY KEY (`Tarjeta_id_tarjeta`, `Cliente_id_cliente`),
  INDEX `fk_Tarjeta_has_Cliente_Cliente1_idx` (`Cliente_id_cliente` ASC) VISIBLE,
  INDEX `fk_Tarjeta_has_Cliente_Tarjeta1_idx` (`Tarjeta_id_tarjeta` ASC) VISIBLE,
  CONSTRAINT `fk_Tarjeta_has_Cliente_Tarjeta1`
    FOREIGN KEY (`Tarjeta_id_tarjeta`)
    REFERENCES `OjosDGato`.`Tarjeta` (`id_tarjeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tarjeta_has_Cliente_Cliente1`
    FOREIGN KEY (`Cliente_id_cliente`)
    REFERENCES `OjosDGato`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Direccion_has_Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Direccion_has_Cliente` (
  `Direccion_id_direccion` INT NOT NULL,
  `Cliente_id_cliente` INT NOT NULL,
  INDEX `fk_Direccion_has_Cliente_Cliente1_idx` (`Cliente_id_cliente` ASC) VISIBLE,
  INDEX `fk_Direccion_has_Cliente_Direccion1_idx` (`Direccion_id_direccion` ASC) VISIBLE,
  PRIMARY KEY (`Direccion_id_direccion`, `Cliente_id_cliente`),
  CONSTRAINT `fk_Direccion_has_Cliente_Direccion1`
    FOREIGN KEY (`Direccion_id_direccion`)
    REFERENCES `OjosDGato`.`Direccion` (`id_direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Direccion_has_Cliente_Cliente1`
    FOREIGN KEY (`Cliente_id_cliente`)
    REFERENCES `OjosDGato`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
