# Usa la imagen oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./
COPY angular.json ionic.config.json tsconfig.app.json tsconfig.json ./
COPY src/ src/

# Instala las dependencias
RUN npm install

# Expone el puerto por defecto de Angular
EXPOSE 4200

# Comando para ejecutar el servidor de desarrollo
CMD ["npm", "start"]

