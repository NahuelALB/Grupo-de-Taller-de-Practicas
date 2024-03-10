DROP DATABASE IF EXISTS recruitingRH;

CREATE DATABASE IF NOT EXISTS recruitingRH;
USE recruitingRH;

CREATE TABLE professions(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO professions (name) VALUES
('Reclutador'),
('Especialista en capacitación y desarrollo'),
('Analista de compensación y beneficios'),
('Especialista en relaciones laborales'),
('Administrador de personal');


CREATE TABLE applicants(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
lastName VARCHAR(20) NOT NULL,
email VARCHAR(80) NOT NULL,
password VARCHAR(255) NOT NULL,
areaCode VARCHAR(10) NOT NULL,
phone VARCHAR(40) NOT NULL,
linkedIn VARCHAR(255) NOT NULL,
genre ENUM("Masculino", "Femenino", "Otro"),
image TEXT DEFAULT("http://localhost:3030/files/applicantsImages/defaultProfile.jpg"),
professionId INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (professionId) REFERENCES professions(id)
);

INSERT INTO applicants (name, lastname, email, password, areaCode, phone, linkedIn, genre, professionId) VALUES
("Andrés", "Rodríguez","andres.rodriguez@example.com","123456","+598","97777777","https://www.linkedin.com/in/andres-rodriguez","Masculino",3),
("Ana", "López","ana.lopez@example.com","123456","+54","1122222222","https://www.linkedin.com/in/ana-lopez","Femenino",4),
("Pablo", "Martínez","pablo.martinez@example.com","123456","+56","977777777","https://www.linkedin.com/in/pablo-martinez","Masculino",5),
("Luca", "Alvarez","luca.alvarez@example.com","123456","+54","3884777712","https://www.linkedin.com/in/luca-alvarez","Masculino",1),
("Lucia", "Albarracin","lucia.albarracin@example.com","123456","+598","22222222","https://www.linkedin.com/in/lucia-albarracin","Femenino",2);

/* -------ALGUNAS CORRECCIONES RESPECTO A LAS TABLAS Y COLUMNA "image"------- */

UPDATE applicants
SET image = "http://localhost:3030/files/applicantsImages/applicantProfile-1709760474563.jpg"
WHERE id = 1;

UPDATE applicants
SET image = "http://localhost:3030/files/applicantsImages/applicantProfile-1709760370124.jpg"
WHERE id = 2;

UPDATE applicants
SET image = "http://localhost:3030/files/applicantsImages/applicantProfile-1709760626919.jpg"
WHERE id = 3;

UPDATE applicants
SET image = "http://localhost:3030/files/applicantsImages/applicantProfile-1709760599886.jpg"
WHERE id = 4;

UPDATE applicants
SET image = "http://localhost:3030/files/applicantsImages/applicantProfile-1709760544457.jpg"
WHERE id = 5;