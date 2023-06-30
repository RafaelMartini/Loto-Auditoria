-- MySQL database

-- v1.0.0
CREATE TABLE `usuarios` (
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`email`)
);

INSERT INTO usuarios VALUE ( "martini@gmail.com", "martini");
INSERT INTO usuarios VALUE ( "rafael@gmail.com", "martini");
