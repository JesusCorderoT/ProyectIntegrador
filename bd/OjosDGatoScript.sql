-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ojosdgato
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ojosdgato
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ojosdgato` DEFAULT CHARACTER SET utf8mb3 ;
USE `ojosdgato` ;

-- -----------------------------------------------------
-- Table `ojosdgato`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`user` (
  `id_user` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` BIGINT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `type` INT NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`address` (
  `id_address` BIGINT NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(255) NOT NULL,
  `postcode` INT NOT NULL,
  `state` VARCHAR(255) NOT NULL,
  `municipality` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `settlement` VARCHAR(255) NOT NULL,
  `street` VARCHAR(255) NOT NULL,
  `exterior_number` VARCHAR(255) NOT NULL,
  `interior_number` VARCHAR(255) NULL DEFAULT NULL,
  `street1` VARCHAR(255) NULL DEFAULT NULL,
  `street2` VARCHAR(255) NULL DEFAULT NULL,
  `instruction` VARCHAR(255) NULL DEFAULT NULL,
  `User_id_user` BIGINT NOT NULL,
  PRIMARY KEY (`id_address`),
  INDEX `fk_Address_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Address_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`user` (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`service` (
  `id_service` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `time` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_service`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`appointment` (
  `id_appointment` BIGINT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(255) NOT NULL,
  `hour` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `status` INT NOT NULL,
  `Service_id_service` BIGINT NOT NULL,
  `User_id_user` BIGINT NOT NULL,
  PRIMARY KEY (`id_appointment`),
  INDEX `fk_Appointment_Service1_idx` (`Service_id_service` ASC) VISIBLE,
  INDEX `fk_Appointment_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Appointment_Service1`
    FOREIGN KEY (`Service_id_service`)
    REFERENCES `ojosdgato`.`service` (`id_service`),
  CONSTRAINT `fk_Appointment_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`user` (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`brand` (
  `id_brand` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_brand`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`card` (
  `id_card` BIGINT NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(255) NOT NULL,
  `holder` VARCHAR(255) NOT NULL,
  `number` BIGINT NOT NULL,
  `expiration_month` INT NOT NULL,
  `expiration_year` INT NOT NULL,
  `User_id_user` BIGINT NOT NULL,
  PRIMARY KEY (`id_card`),
  INDEX `fk_Card_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Card_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`user` (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`service_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`service_order` (
  `id_serviceorder` BIGINT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `service_id_service` BIGINT NOT NULL,
  PRIMARY KEY (`id_serviceorder`),
  INDEX `FK1pfimgeo478suas512yql5pgo` (`service_id_service` ASC) VISIBLE,
  CONSTRAINT `FK1pfimgeo478suas512yql5pgo`
    FOREIGN KEY (`service_id_service`)
    REFERENCES `ojosdgato`.`service` (`id_service`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`product` (
  `id_product` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `stock` INT NOT NULL,
  `rating` INT NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`product_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`product_order` (
  `id_productorder` BIGINT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `product_id_product` BIGINT NOT NULL,
  PRIMARY KEY (`id_productorder`),
  INDEX `FKijdsgdgixoi2tscgyqgr1cdvp` (`product_id_product` ASC) VISIBLE,
  CONSTRAINT `FKijdsgdgixoi2tscgyqgr1cdvp`
    FOREIGN KEY (`product_id_product`)
    REFERENCES `ojosdgato`.`product` (`id_product`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`order_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`order_table` (
  `id_order` BIGINT NOT NULL AUTO_INCREMENT,
  `shipping` INT NOT NULL,
  `status` INT NOT NULL,
  `comment` VARCHAR(255) NULL DEFAULT NULL,
  `product_order_id_productorder` BIGINT NOT NULL,
  `service_order_id_serviceorder` BIGINT NOT NULL,
  `user_id_user` BIGINT NOT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `FKopy3vasjoc0mndqospcmx82q2` (`product_order_id_productorder` ASC) VISIBLE,
  INDEX `FKhuxrvwomv09m8j8on71n7mnee` (`service_order_id_serviceorder` ASC) VISIBLE,
  INDEX `FKjx39j632mtjf5hdoq4t9t5lb1` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `FKhuxrvwomv09m8j8on71n7mnee`
    FOREIGN KEY (`service_order_id_serviceorder`)
    REFERENCES `ojosdgato`.`service_order` (`id_serviceorder`),
  CONSTRAINT `FKjx39j632mtjf5hdoq4t9t5lb1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `ojosdgato`.`user` (`id_user`),
  CONSTRAINT `FKopy3vasjoc0mndqospcmx82q2`
    FOREIGN KEY (`product_order_id_productorder`)
    REFERENCES `ojosdgato`.`product_order` (`id_productorder`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ojosdgato`.`product_has_brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`product_has_brand` (
  `Product_id_product` BIGINT NOT NULL,
  `Brand_id_brand` BIGINT NOT NULL,
  INDEX `fk_Product_has_Brand_Brand1_idx` (`Brand_id_brand` ASC) VISIBLE,
  INDEX `fk_Product_has_Brand_Product1_idx` (`Product_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_Product_has_Brand_Brand1`
    FOREIGN KEY (`Brand_id_brand`)
    REFERENCES `ojosdgato`.`brand` (`id_brand`),
  CONSTRAINT `fk_Product_has_Brand_Product1`
    FOREIGN KEY (`Product_id_product`)
    REFERENCES `ojosdgato`.`product` (`id_product`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
