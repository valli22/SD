-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: bd-practica1
-- ------------------------------------------------------
-- Server version	5.7.11-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `area` (
  `areaid` bigint(20) NOT NULL AUTO_INCREMENT,
  `extension` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`areaid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'126','Campiña'),(2,'2356','Bosque'),(3,'45','Lago'),(4,'129','Pradera'),(5,'237','Sabana');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleado` (
  `empleadoid` bigint(20) NOT NULL AUTO_INCREMENT,
  `apellidos` varchar(255) DEFAULT NULL,
  `correo_electronico` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `t_fijo` varchar(255) DEFAULT NULL,
  `t_movil` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`empleadoid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Vacas Miguel','nuevomail1@hotmail.com','David','912835668','22222222','Conservacion'),(2,'Redondo Rabanal','raguermaster_69@gmail.com','Pedro','91654619','72827463','Vigilancia'),(3,'Roldan Alcala','noobiemaster@yahoo.es','Miguel','9109849849','65198949','Investigacion'),(4,'Ortiz Gonzales','gatosnaranjas@outlook.com','Andrea','9167618428','648949184','Gestion'),(5,'Garcia Garcia-Maroto','pandanazius_isreal@webmail.urhc.es','Nazaret','9184189489','65749654','Gestion'),(6,'Miguel Hernandes','inventado..now@ucm.es','Jose Francisco','919845619','65548198','Investigacion');
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especie`
--

DROP TABLE IF EXISTS `especie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especie` (
  `especieid` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre_cientifico` varchar(255) DEFAULT NULL,
  `nombre_comun` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`especieid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especie`
--

LOCK TABLES `especie` WRITE;
/*!40000 ALTER TABLE `especie` DISABLE KEYS */;
INSERT INTO `especie` VALUES (1,'Oryctolagus cuniculus','Encina','Vegetal'),(2,'Oryctolagus cuniculus','Conejo','Animal'),(3,' Soricomorpha Talpidae','Topo','Vegetal'),(4,'Capra aegagrus hircus','Lobo','Animal'),(5,'Aquila chrysaetos','Aguila real','Animal'),(6,'Elephas máximus','Elefante','Animal'),(7,'Retama sphaerocarpa','Retama','Vegetal'),(8,' Helix pomatia','Caracol','Animal'),(9,'Oncorhynchus mykiss','Trucha','Animal'),(10,'Quercus suber','Alcornoque','Vegetal'),(11,'Amanita muscaria','Matamoscas','Hongo'),(12,'Salicaceae Populus','Chopo','Vegetal'),(13,'Cantharellus cibarius','Rebozuelo','Hongo'),(14,'Boletus edulis','Hongo blanco','Hongo'),(15,'Amanita caesarea','Huevo de rey','Hongo'),(16,'Craterellus cornucopioides','Trompeta de la muerte','Hongo'),(17,'  Caryophyllales Cactaceae','Cactus','Vegetal'),(18,'Linx pardinus','Lince iberico','Animal'),(19,'Amanita phalloides','Hongo de la muerte','Hongo');
/*!40000 ALTER TABLE `especie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especie_areas`
--

DROP TABLE IF EXISTS `especie_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especie_areas` (
  `especies_especieid` bigint(20) NOT NULL,
  `areas_areaid` bigint(20) NOT NULL,
  KEY `FK_2e6ietcmgq7vsd2r8g4vol3jr` (`areas_areaid`),
  KEY `FK_psxhtdhrlwt0jd7vl9jk4bf2x` (`especies_especieid`),
  CONSTRAINT `FK_2e6ietcmgq7vsd2r8g4vol3jr` FOREIGN KEY (`areas_areaid`) REFERENCES `area` (`areaid`),
  CONSTRAINT `FK_psxhtdhrlwt0jd7vl9jk4bf2x` FOREIGN KEY (`especies_especieid`) REFERENCES `especie` (`especieid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especie_areas`
--

LOCK TABLES `especie_areas` WRITE;
/*!40000 ALTER TABLE `especie_areas` DISABLE KEYS */;
INSERT INTO `especie_areas` VALUES (1,1),(1,2),(1,4),(2,1),(2,4),(4,2),(5,2),(5,4),(6,5),(7,5),(8,1),(8,2),(8,3),(8,4),(9,3),(10,2),(11,3),(12,1),(12,2),(12,4),(13,2),(13,3),(14,2),(15,2),(16,1),(16,2),(19,2),(3,1),(3,4),(18,1),(18,4),(17,5);
/*!40000 ALTER TABLE `especie_areas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-04 14:51:53
