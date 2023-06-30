-- MySQL database

-- v1.0.0
-- CREATE TABLE `usuarios` (
--   `idusuarios` int NOT NULL,
--   `email` varchar(45) NOT NULL,
--   `password` varchar(200) NOT NULL,
--   PRIMARY KEY (`idusuarios`)
-- )

CREATE TABLE `usuarios` (
  `email` varchar(200) NOT NULL,
  `password` varchar(8) NOT NULL,
  PRIMARY KEY (`email`)
);

-- INSERT INTO usuarios(email, password) VALUE ( 4,null, "martini");

INSERT INTO usuarios VALUE ( "martini@gmail.com", "martini");
INSERT INTO usuarios VALUE ( "rafael@gmail.com", "martini");

-- v1.0.1
-- ALTER TABLE usuarios
-- DROP COLUMN idusuarios;

-- ALTER TABLE usuarios
-- ADD PRIMARY KEY ('email');

