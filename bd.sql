-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ojosdgato
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ojosdgato
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ojosdgato` DEFAULT CHARACTER SET utf8 ;
USE `ojosdgato` ;

-- -----------------------------------------------------
-- Table `ojosdgato`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`User` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` BIGINT NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(18) NOT NULL,
  `type` INT NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Service` (
  `id_service` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `time` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_service`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Brand` (
  `id_brand` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(125) NOT NULL,
  PRIMARY KEY (`id_brand`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Product` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `stock` INT NOT NULL,
  `rating` INT NULL,
  `image` VARCHAR(125) NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Address` (
  `id_address` INT NOT NULL,
  `alias` VARCHAR(30) NOT NULL,
  `postcode` INT NOT NULL,
  `state` VARCHAR(25) NOT NULL,
  `municipality` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `Settlement` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `exterior_number` VARCHAR(10) NULL,
  `interior_number` VARCHAR(10) NULL,
  `street1` VARCHAR(45) NULL,
  `street2` VARCHAR(45) NULL,
  `instruction` VARCHAR(200) NULL,
  `User_id_user` INT NOT NULL,
  PRIMARY KEY (`id_address`),
  INDEX `fk_Address_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Address_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Card` (
  `id_card` INT NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(30) NOT NULL,
  `holder` VARCHAR(200) NOT NULL,
  `number` BIGINT NOT NULL,
  `expiration_month` INT NOT NULL,
  `expiration_year` INT NOT NULL,
  `User_id_user` INT NOT NULL,
  PRIMARY KEY (`id_card`),
  INDEX `fk_Card_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Card_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`ProductOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`ProductOrder` (
  `id_productorder` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `Product_id_product` INT NOT NULL,
  PRIMARY KEY (`id_productorder`),
  INDEX `fk_ProductOrder_Product1_idx` (`Product_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_ProductOrder_Product1`
    FOREIGN KEY (`Product_id_product`)
    REFERENCES `ojosdgato`.`Product` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`ServiceOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`ServiceOrder` (
  `id_serviceorder` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `Service_id_service` INT NOT NULL,
  PRIMARY KEY (`id_serviceorder`),
  INDEX `fk_ServiceOrder_Service1_idx` (`Service_id_service` ASC) VISIBLE,
  CONSTRAINT `fk_ServiceOrder_Service1`
    FOREIGN KEY (`Service_id_service`)
    REFERENCES `ojosdgato`.`Service` (`id_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Appointment` (
  `id_appointment` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `hour` TIME NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `status` INT NOT NULL,
  `Service_id_service` INT NOT NULL,
  `User_id_user` INT NOT NULL,
  PRIMARY KEY (`id_appointment`),
  INDEX `fk_Appointment_Service1_idx` (`Service_id_service` ASC) VISIBLE,
  INDEX `fk_Appointment_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Appointment_Service1`
    FOREIGN KEY (`Service_id_service`)
    REFERENCES `ojosdgato`.`Service` (`id_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Appointment_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Order` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `shipping` BIT NOT NULL,
  `status` INT NOT NULL,
  `comment` VARCHAR(200) NULL,
  `ServiceOrder_id__serviceorder` INT NOT NULL,
  `ProductOrder_id_productorder` INT NOT NULL,
  `User_id_user` INT NOT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `fk_Order_ServiceOrder1_idx` (`ServiceOrder_id__serviceorder` ASC) VISIBLE,
  INDEX `fk_Order_ProductOrder1_idx` (`ProductOrder_id_productorder` ASC) VISIBLE,
  INDEX `fk_Order_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Order_ServiceOrder1`
    FOREIGN KEY (`ServiceOrder_id__serviceorder`)
    REFERENCES `ojosdgato`.`ServiceOrder` (`id_serviceorder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_ProductOrder1`
    FOREIGN KEY (`ProductOrder_id_productorder`)
    REFERENCES `ojosdgato`.`ProductOrder` (`id_productorder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `ojosdgato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ojosdgato`.`Product_has_Brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ojosdgato`.`Product_has_Brand` (
  `Product_id_product` INT NOT NULL,
  `Brand_id_brand` INT NOT NULL,
  INDEX `fk_Product_has_Brand_Brand1_idx` (`Brand_id_brand` ASC) VISIBLE,
  INDEX `fk_Product_has_Brand_Product1_idx` (`Product_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_Product_has_Brand_Product1`
    FOREIGN KEY (`Product_id_product`)
    REFERENCES `ojosdgato`.`Product` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_has_Brand_Brand1`
    FOREIGN KEY (`Brand_id_brand`)
    REFERENCES `ojosdgato`.`Brand` (`id_brand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
