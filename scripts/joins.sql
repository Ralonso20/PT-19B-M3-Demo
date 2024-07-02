CREATE TABLE paises (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE ciudades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    pais_id INTEGER, FOREIGN KEY(pais_id) 
    REFERENCES paises(id)
);

--INNER JOIN

SELECT ciudades.id, ciudades.nombre as ciudad, paises.nombre as pais
FROM ciudades
INNER JOIN paises ON ciudades.pais_id = paises.id;

--LEFT JOIN
SELECT ciudades.id, ciudades.nombre as ciudad, paises.nombre as pais
FROM ciudades
LEFT JOIN paises ON ciudades.pais_id = paises.id;

--RIGHT JOIN
SELECT ciudades.id, ciudades.nombre as ciudad, paises.nombre as pais
FROM ciudades
RIGHT JOIN paises ON ciudades.pais_id = paises.id;

--FULL OUTER JOIN
SELECT ciudades.id, ciudades.nombre as ciudad, paises.nombre as pais
FROM ciudades
FULL OUTER JOIN paises ON ciudades.pais_id = paises.id;