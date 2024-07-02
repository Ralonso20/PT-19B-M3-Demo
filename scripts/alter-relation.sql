CREATE TABLE ciudades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    pais_id INTEGER
);

ALTER TABLE ciudades
ADD CONSTRAINT fk_pais
FOREIGN KEY (pais_id)
REFERENCES paises(id);