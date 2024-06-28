### Comandos

- Instalacion de tipos y ejecucion de archivos ts con node

```bash
npm install --save-dev typescript @types/express @types/node nodemon ts-node
```

- Instalacion de express

```bash
  npm install express
```

- Instalacion de nodemon

```bash
  npm install nodemon
```

- Instalacion dotenv

```bash
  npm install @types/dotenv dotenv
```

- Instalacion de body-parser

```bash
  npm install @types/body-parser body-parser
```

### Scripts configuracion

- tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- package.json

```json
"scripts": {
	"start": "nodemon --exec ts-node src/index.ts",
	"build": "tsc"
}
```

### Links

- [Express documentacion](https://expressjs.com/es/)
- [NPM sitio de dependencias](https://www.npmjs.com/)
