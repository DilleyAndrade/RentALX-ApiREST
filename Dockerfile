#Imagem que será utitlizada
FROM node

#Diretório que será criado na build
WORKDIR /usr/app

#Copiar tudo em package.json para o diretório workdir
COPY package.json ./

#Executa o script criado
RUN npm install

#Copia tudo para a pasta raíz
COPY . .

#Porta que estamos utilizando
EXPOSE 3333

#Executa o script para rodar o script de execução
CMD ["npm", "run", "dev"]