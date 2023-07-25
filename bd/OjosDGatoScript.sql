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
-- Table `OjosDGato`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`User` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name_user` VARCHAR(100) NOT NULL,
  `lastname_user` VARCHAR(100) NOT NULL,
  `email_user` VARCHAR(100) NOT NULL,
  `phone_user` INT NOT NULL,
  `username_user` VARCHAR(20) NOT NULL,
  `password_user` VARCHAR(18) NOT NULL,
  `type_user` INT NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Service` (
  `id_service` INT NOT NULL AUTO_INCREMENT,
  `name_service` VARCHAR(45) NOT NULL,
  `price_service` DECIMAL(10,2) NOT NULL,
  `description_service` VARCHAR(200) NOT NULL,
  `time_service` VARCHAR(15) NOT NULL,
  `image_service` VARCHAR(125) NULL,
  PRIMARY KEY (`id_service`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Brand` (
  `id_brand` INT NOT NULL AUTO_INCREMENT,
  `name_brand` VARCHAR(45) NOT NULL,
  `image_brand` VARCHAR(125) NOT NULL,
  PRIMARY KEY (`id_brand`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Product` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name_product` VARCHAR(45) NOT NULL,
  `price_product` DECIMAL(10,2) NOT NULL,
  `description_product` VARCHAR(200) NOT NULL,
  `stock_producto` INT NOT NULL,
  `image_product` VARCHAR(125) NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Address` (
  `id_address` INT NOT NULL,
  `alias_address` VARCHAR(30) NOT NULL,
  `postcode_address` INT NOT NULL,
  `state_address` VARCHAR(25) NOT NULL,
  `municipality_address` VARCHAR(45) NOT NULL,
  `city_address` VARCHAR(45) NOT NULL,
  `street_address` VARCHAR(45) NOT NULL,
  `exterior_number_address` VARCHAR(10) NULL,
  `interior_number_address` VARCHAR(10) NULL,
  `street1_address` VARCHAR(45) NULL,
  `street2_address` VARCHAR(45) NULL,
  `phone_address` INT NOT NULL,
  `instructions_address` VARCHAR(200) NULL,
  `selection_address` BIT NOT NULL,
  PRIMARY KEY (`id_address`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Card` (
  `id_card` INT NOT NULL AUTO_INCREMENT,
  `alias_card` VARCHAR(30) NOT NULL,
  `holder_card` VARCHAR(200) NOT NULL,
  `number_card` INT NOT NULL,
  `expiration_month_card` INT NOT NULL,
  `expiration_year_card` INT NOT NULL,
  `cvv_card` INT NOT NULL,
  `selection_card` BIT NOT NULL,
  PRIMARY KEY (`id_card`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`ProductOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`ProductOrder` (
  `id_productorder` INT NOT NULL AUTO_INCREMENT,
  `quantity_productorder` INT NOT NULL,
  `total_productorder` DECIMAL(10,2) NOT NULL,
  `Product_id_product` INT NOT NULL,
  PRIMARY KEY (`id_productorder`),
  INDEX `fk_ProductOrder_Product1_idx` (`Product_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_ProductOrder_Product1`
    FOREIGN KEY (`Product_id_product`)
    REFERENCES `OjosDGato`.`Product` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`ServiceOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`ServiceOrder` (
  `id__serviceorder` INT NOT NULL AUTO_INCREMENT,
  `quantity_serviceorder` INT NOT NULL,
  `total_serviceorder` DECIMAL(10,2) NOT NULL,
  `Service_id_service` INT NOT NULL,
  PRIMARY KEY (`id__serviceorder`),
  INDEX `fk_ServiceOrder_Service1_idx` (`Service_id_service` ASC) VISIBLE,
  CONSTRAINT `fk_ServiceOrder_Service1`
    FOREIGN KEY (`Service_id_service`)
    REFERENCES `OjosDGato`.`Service` (`id_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Appointment` (
  `id_appointment` INT NOT NULL AUTO_INCREMENT,
  `date_appointment` DATE NOT NULL,
  `hour_appointment` TIME NOT NULL,
  `name_appointment` VARCHAR(100) NOT NULL,
  `status_appointment` INT NOT NULL,
  `Service_id_service` INT NOT NULL,
  `User_id_user` INT NOT NULL,
  PRIMARY KEY (`id_appointment`),
  INDEX `fk_Appointment_Service1_idx` (`Service_id_service` ASC) VISIBLE,
  INDEX `fk_Appointment_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Appointment_Service1`
    FOREIGN KEY (`Service_id_service`)
    REFERENCES `OjosDGato`.`Service` (`id_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Appointment_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `OjosDGato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Order` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `shipping_order` BIT NOT NULL,
  `total_order` DECIMAL(10,2) NOT NULL,
  `status_order` INT NOT NULL,
  `ServiceOrder_id__serviceorder` INT NOT NULL,
  `ProductOrder_id_productorder` INT NOT NULL,
  `User_id_user` INT NOT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `fk_Order_ServiceOrder1_idx` (`ServiceOrder_id__serviceorder` ASC) VISIBLE,
  INDEX `fk_Order_ProductOrder1_idx` (`ProductOrder_id_productorder` ASC) VISIBLE,
  INDEX `fk_Order_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_Order_ServiceOrder1`
    FOREIGN KEY (`ServiceOrder_id__serviceorder`)
    REFERENCES `OjosDGato`.`ServiceOrder` (`id__serviceorder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_ProductOrder1`
    FOREIGN KEY (`ProductOrder_id_productorder`)
    REFERENCES `OjosDGato`.`ProductOrder` (`id_productorder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `OjosDGato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Comment` (
  `id_comment` INT NOT NULL AUTO_INCREMENT,
  `text_comment` VARCHAR(200) NOT NULL,
  `rating_comment` INT NOT NULL,
  `Order_id_order` INT NOT NULL,
  PRIMARY KEY (`id_comment`),
  INDEX `fk_Comment_Order1_idx` (`Order_id_order` ASC) VISIBLE,
  CONSTRAINT `fk_Comment_Order1`
    FOREIGN KEY (`Order_id_order`)
    REFERENCES `OjosDGato`.`Order` (`id_order`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Address_has_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Address_has_User` (
  `Address_id_address` INT NOT NULL,
  `User_id_user` INT NOT NULL,
  INDEX `fk_Address_has_User_User1_idx` (`User_id_user` ASC) VISIBLE,
  INDEX `fk_Address_has_User_Address1_idx` (`Address_id_address` ASC) VISIBLE,
  CONSTRAINT `fk_Address_has_User_Address1`
    FOREIGN KEY (`Address_id_address`)
    REFERENCES `OjosDGato`.`Address` (`id_address`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Address_has_User_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `OjosDGato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`User_has_Card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`User_has_Card` (
  `User_id_user` INT NOT NULL,
  `Card_id_card` INT NOT NULL,
  INDEX `fk_User_has_Card_Card1_idx` (`Card_id_card` ASC) VISIBLE,
  INDEX `fk_User_has_Card_User1_idx` (`User_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Card_User1`
    FOREIGN KEY (`User_id_user`)
    REFERENCES `OjosDGato`.`User` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Card_Card1`
    FOREIGN KEY (`Card_id_card`)
    REFERENCES `OjosDGato`.`Card` (`id_card`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OjosDGato`.`Product_has_Brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `OjosDGato`.`Product_has_Brand` (
  `Product_id_product` INT NOT NULL,
  `Brand_id_brand` INT NOT NULL,
  INDEX `fk_Product_has_Brand_Brand1_idx` (`Brand_id_brand` ASC) VISIBLE,
  INDEX `fk_Product_has_Brand_Product1_idx` (`Product_id_product` ASC) VISIBLE,
  CONSTRAINT `fk_Product_has_Brand_Product1`
    FOREIGN KEY (`Product_id_product`)
    REFERENCES `OjosDGato`.`Product` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_has_Brand_Brand1`
    FOREIGN KEY (`Brand_id_brand`)
    REFERENCES `OjosDGato`.`Brand` (`id_brand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
