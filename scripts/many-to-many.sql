CREATE TABLE paises (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE ciudades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    pais_id INTEGER
);

CREATE TABLE pais_ciudad (
    pais_id INTEGER,
    ciudad_id INTEGER,
    PRIMARY KEY (pais_id, ciudad_id),
    FOREIGN KEY (pais_id) REFERENCES paises(id),
    FOREIGN KEY (ciudad_id) REFERENCES ciudades(id)
);