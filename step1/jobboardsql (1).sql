-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 17 oct. 2021 à 21:06
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jobboardsql`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
CREATE TABLE IF NOT EXISTS `annonce` (
  `id_annonce` int(11) NOT NULL AUTO_INCREMENT,
  `name_entreprise` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `description` varchar(400) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `title` varchar(100) NOT NULL,
  `contrat_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id_annonce`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `annonce`
--

INSERT INTO `annonce` (`id_annonce`, `name_entreprise`, `email`, `location`, `description`, `content`, `title`, `contrat_type`) VALUES
(17, 'Abalone Clermont', 'AbaloneClermont@jobboard.fr', 'Clermont-Ferrand', 'Description du poste :\r\nNotre agence Abalone Clermont recherche pour son client un plombier F/H dans le secteur du BTP pour des chantiers basés sur Clermont-Ferrand.', 'Description du poste :\r\nNotre agence Abalone Clermont recherche pour son client un plombier F/H dans le secteur du BTP pour des chantiers basés sur Clermont-Ferrand.\r\nVous aurez à effectuer:\r\nla réalisation des travaux neufs et rénovations\r\nla réaliser un diagnostic de panne ou de dysfonctionnement d\'installation\r\nla poser des tuyauteries\r\nl\'installer des équipements de chauffage\r\nla pose des éléments sanitaires\r\nla réaliser des travaux de raccordement aux appareils de chauffage et éléments sanitaire\r\nPoste à pourvoir rapidement.\r\nTravail du Lundi au vendredi.\r\nTemps plein.\r\nSalaire selon profil.\r\nDescription du profil :\r\nVous êtes manuel, vous savez vous adapter rapidement et aimez travailler en équipe.\r\nVous êtes professionnel tant par votre travail que par votre savoir être. Première expérience sur un poste similaire ou diplôme en plomberie souhaité.\r\nDébutant accepté si motivé. ', 'Plombier / Plombière (H/F)', 'Mission intérimaire - 6 Mois\r\nContrat travail'),
(18, 'Abalone Clermont', 'AbaloneClermont@jobboard.fr', 'Clermont-Ferrand', 'Description du poste :\r\nLe site est un opérateur international de terminaux pour le vrac sec, le vrac liquide et les conteneurs. Aujourd\'hui, le groupe s\'est forgé une excellente réputation dans le domaine de la manutention, du transport, de l\'entreposage et d\'autres activités portuaires.\r\nAutonomie, rigueur, force de proposition et qualités relationnelles feront de vous la/le candidate idéale.', 'Recrutement actif : RESPONSABLE QHSE H/F\r\nStatut : CADRE\r\nSalaire : 39/42K./annuel/brut Rattaché(e) à la Direction du site, vous serez garant(e) des systèmes qualité, sécurité et environnement en place.\r\nVos principales missions consistent, pour chacune des installations à :\r\n- piloter le système qualité et reconduire la certification ISO 9001,\r\n- piloter le système sécurité et reconduire la certification ISO 45001\r\n- piloter le système sécurité alimentaire et reconduire la certification GTP,\r\n- être le garant du respect des exigences du code du travail,\r\n- suivre et à la mettre à jour le document unique,\r\n- suivre le système sûreté en place et reconduire la certification OEA,\r\n- veiller au respect de la réglementation environnementale et en particulier aux arrêtés préfectoraux applicables au site, - améliorer et faire appliquer la méthodologie HACCP en place,\r\noptimiser le Système de Management Intégré. Formation : BAC+2 BAC+5, expérience minimale 5 ans\r\nAnglais courant serait un plus\r\nSpécialisé dans la qualité, la sécurité et l\'environnement ?\r\nCompétences techniques : normes ISO 9001 ? ISO45001 ? ISO 14001 et de bonnes connaissances sur la réglementation ICPE sont exigées. La connaissance de l\'OEA ou / et des normes sécurité alimentaires type GMP+ ou équivalent est un plus.\r\nCompétences comportementales : autonomie, rigueur, force de proposition et qualités relationnelles sont indispensables pour réussir dans ce poste.\r\nCSP et rémunération :\r\nCSP : Cadre\r\nCatégorie 35 heures : cadre forfait 218 jours\r\nRémunération annuelle brute forfaitaire : 39 à 42 k. selon profil\r\nDans le cadre de sa politique diversité, Manpower étudie, à compétences égales, toutes candidatures dont celles de personnes en situation de handicap ', 'Responsable QHSE (H/F)', 'Contrat à durée indéterminée\r\nContrat travail'),
(19, 'Abalone Clermont', 'AbaloneClermont@jobboard.fr', 'Clermont-Ferrand', 'Description du poste :\r\nVous serez amené à réaliser un chantier de nuit au sein de Center Parcs à Hattigny, en Moselle. ', ' Les tâches à effectuer sont : changement de tuyauterie pour vérins.Cette mission demande un engagement sur plusieurs semaines. Le travail est engagé, nous sommes à la recherche de profils cordistes CQPC ( ex CQP1) ou CQPTC ( ex CQP 2), sérieux, engagés, et surtout souhaitant travailler sur la durée.\r\nDescription du profil :\r\nNous sommes à la recherche de profils cordistes CQPC ( ex CQP1) ou CQPTC ( ex CQP 2), sérieux, engagés, et surtout souhaitant travailler sur la durée. \r\n\r\n', 'Technicien / Technicienne cordiste (H/F)', 'Mission intérimaire - 1 Mois\r\nContrat travail'),
(20, 'Abalone Clermont', 'AbaloneClermont@jobboard.fr', 'Clermont-Ferrand', 'Description du poste :\r\nVotre mission\r\nAdecco Colomiers recherche pour un de ses clients aéronautique, réputé à l\'international, 50 Monteurs Câbleur sur Toulouse ou sur Hambourg en Grand Déplacement (H/F),', 'Vos missions principales sont :\r\n* Lire et comprendre les gammes de travail puis effectuer le travail demandé sur A/C.\r\n* Connaitre et respecter la documentation de référence\r\n* Utiliser des appareils de mesure pour effectuer certaines tâches de travail et/ou vérification.\r\n* Vérifier la date de validité, en prendre soin et le retourner en état de fonctionnement à la fin de la mission.\r\n* Faire un retour journalier à votre supérieur sur l\'avancement du travail\r\n* Respecter les consignes SSE\r\n* Vous interviendrez sur des réparations électriques d\'un A320.\r\nVotre profil :\r\nFormation CAP/BEP Electrotechnique, CQPM et/ou 6 mois à 1 an d\'expérience de préférence sur avion\r\nAccepter le travail en équipe et être autonome.\r\nConnaître les consignes Santé, Sécurité, Environnement.\r\nNous vous proposons :\r\nMission d\'intérim de 3 mois\r\nSalaire : Selon profil + primes diverses\r\nHoraire : 38h/semaine\r\nLieu : Toulouse ou Hambourg\r\nPostes à pourvoir immédiatement,\r\nMerci de postuler en ligne\r\nVotre profil\r\nL\'expérience candidat est au cœur de nos préoccupations, du sourcing à l\'évaluation en passant par la fidélisation ou encore la formation. Adecco assure la qualité de ses recrutements grâce à une démarche professionnelle basée sur des critères objectifs, factuels, dans le respect de la réglementation en matière de lutte contre les discriminations.\r\nA propos de nous\r\nPremier réseau d\'agences d\'emploi en France, Adecco a développé un savoir-faire unique de proximité et met toutes ses compétences à votre service.\r\nNos équipes sont présentes sur tout le territoire, avec plus de 900 agences. Quel que soit le contrat que vous cherchez : intérim, CDI intérimaire, CDD, CDI Apprenant ou encore alternance, nos experts travaillent chaque jour, pour vous guider vers ce qui vous correspond. Dès maintenant, devenez acteur de votre vie ! ', 'Monteur-câbleur / Monteuse-câbleuse de matériels électriques (H/F)', 'Type de contrat\r\nMission intérimaire - 3 Mois\r\nContrat travail'),
(21, 'removeme@me.de', 'removeme@me.de', 'removeme@me.de', 'removeme@me.de', 'removeme@me.de', 'removeme@me.de', 'removeme@me.de');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `name`, `email`, `password`, `admin`) VALUES
(21, 'zadzrf ', 'egrt@rdgt.fr', '$2b$10$byayO9JCkwdY3LEAJbQv0ec5BpBDJrrJ/64.BD0x4msOlAbtdVCli', 0),
(23, 'ess ', 'zerz@seff.fe', '$2b$10$tWIsECbKZnh5avjbMIrsCeINt2yji5wE1snjuFYftfKcZ0y.2BcSW', 0),
(27, 'Sebastien Andlauer ', 'sebastien1.andlauer@epitech.eu', '$2b$10$TQDFXGm2YOw.3Bdw65weluUVihYQOjD.etjThzHS3pB7vzxLoePg2', 0),
(28, 'test ', 'test@test.fr', '$2b$10$TQDFXGm2YOw.3Bdw65weludotR0RFTKE3/nK4HD7hJ8KF6IBUsidy', 0),
(29, 'seby ', 'sebsofast@transt.eu', '$2b$10$ukgRWKO2c2ogoBn9W6KiYecAh2WErBSSF1E4Y.Xt7QsLfHXAr9.oG', 1),
(30, 'Lucas Niemerich ', 'galaxial51@gmail.com', '$2b$10$C3dnxyQDZ1XPfazJ7SXzo.9XgB0bpGdiKbJ5SHqNDjO1x85WilS5K', 1),
(31, 'tatanfion jean-luc ', 'tanrtanfion.jl@wanadoo.fr', '$2b$10$WBJgtyBfIfjnEIZTcmmzQ.952Tq3/RE8/6zC4ZxjGjYCGSbchXoRu', 0),
(32, 'jl toto ', 'jl.toto@toto.fr', '$2b$10$WBJgtyBfIfjnEIZTcmmzQ.t0Abch0glec0L/EY4UlFaY3wvz3jM02', 0),
(33, 'lucas² ', 'galaxyegnir@gmail.com', '$2b$10$XhiJ0pTFYLICazdgugP/auhZyFHVujZmORveHnTSRmTFNzESx8rHa', 0);

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

DROP TABLE IF EXISTS `entreprise`;
CREATE TABLE IF NOT EXISTS `entreprise` (
  `id_entreprise` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id_entreprise`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `entreprise`
--

INSERT INTO `entreprise` (`id_entreprise`, `name`, `location`, `email`, `password`) VALUES
(16, 'Epitech-Mulhouse', 'Mulhouse', 'contact@epitech.eu', '$2b$10$w6ZeYGayf2cZq3T/5iyM3eI2sZ96aj1BIBBwfKm6azGl7ccVl/auG'),
(17, 'Km0', 'Mulhouse', 'contact@km0.eu', '$2b$10$w6ZeYGayf2cZq3T/5iyM3e8k.Og2ZSpKoIuc7ktK6cipBaOIXFLzS'),
(18, 'eiffage', 'Mulhouse', 'contact@eiffage.eu', '$2b$10$w6ZeYGayf2cZq3T/5iyM3e0byJwStQRPEbcZnloZLrmAPf6RXiwg.'),
(19, 'fablab', 'Mulhouse', 'contact@fablab.eu', '$2b$10$w6ZeYGayf2cZq3T/5iyM3erjWFWfJ3znSvG5gsKGjZ/JjhRMyFuRi'),
(20, 'Abalone Clermont', 'Clermont-Ferrand', 'abaloneclermont@jobboard.fr', '$2b$10$C4HzGAyUtjlpeFRYA1fdu.7s1yASJQ1CdgeYxlngsP5W0GuTHl4WW'),
(21, 'lucas²', 'heimsbrunn', 'galaxyegnir@gmail.com', '$2b$10$XhiJ0pTFYLICazdgugP/auhZyFHVujZmORveHnTSRmTFNzESx8rHa');

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
CREATE TABLE IF NOT EXISTS `favoris` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `id_annonce` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_client` (`id_client`,`id_annonce`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `mail`
--

DROP TABLE IF EXISTS `mail`;
CREATE TABLE IF NOT EXISTS `mail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `id_entreprise` int(11) NOT NULL,
  `id_annonce` int(11) NOT NULL,
  `content` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_annonce` (`id_annonce`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `favoris`
--
ALTER TABLE `favoris`
  ADD CONSTRAINT `favoris_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `mail`
--
ALTER TABLE `mail`
  ADD CONSTRAINT `mail_ibfk_1` FOREIGN KEY (`id_annonce`) REFERENCES `annonce` (`id_annonce`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
