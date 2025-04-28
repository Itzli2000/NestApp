<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm install -g @nestjs/cli
```
4. Levantar la base de datos
```
docker compose up -d
```
5. Crear un archivo __.env__ a partir del archivo __.env.template__ en la raíz del proyecto con el siguiente contenido:
```
MONGODB_URI=mongodb://localhost:27017/nest-pokemon
PORT=3000
DEFAULT_LIMIT=10
```
6. Reconstruir la base de datos con el seed
```
http://localhost:3000/api/v2/seed
```
7. Levantar la aplicación
```
yarn start:dev
```

## Stack usado

- NestJS
- MongoDB
- Docker
- TypeScript