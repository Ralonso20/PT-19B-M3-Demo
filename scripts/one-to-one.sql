CREATE TABLE paises (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE ciudades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    pais_id INTEGER UNIQUE,
    CONSTRAINT fk_pais FOREIGN KEY(pais_id) REFERENCES paises(id)
);