### Caso de uso Docker

- [Instalacion Docker](https://docs.docker.com/desktop/install/windows-install/)
- Levantar el docker compose con postgress y pgadmin

```bash
  docker compose up
```

- Ingresar a la consola y a mi base de datos

```bash
  docker exec -it postgres psql -U <mi-usuario> -d <nombre-de-mi-db>
```

### Comandos utiles

Listar todas las bases de datos:

```bash
\l
```

Conectarse a una base de datos específica:

```bash
\c mydatabase
```

Listar todas las tablas en la base de datos actual:

```bash
\dt
```

Salir de la shell de psql:

```bash
\q
```
