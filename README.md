<h1 align="center">
    REACT LOGIN E DASHBOARD COM MYSQL E API
</h1>
<h3 align="center"> 
  🚧  Finalizado  🚧
</h3>

## 💻 Projeto

Projeto com tela de login,cadastro e Dashboard, utilizando MySQL e API'S

Client

```bash

   cd client
   npm install
   or
   yarn install

   npm start
   or
   yarn start
```

Server

```command

 // Change your mySQL database data server/index.js
  cd server
  npm run dev

  http://localhost:3001   (API/Server)
```

## 🚀 Bibliotecas usadas

### Front-end

- react-chartjs-2s
- chart.js

### Back-end

- express
- mysql
- nodemon
- cors
- Formik
- bycrypt

Feito Por Rafael Martini.

```
   // Some Scripts to be run

```


## BCrypt 
> https://www.npmjs.com/package/bcrypt
> https://blog.logrocket.com/password-hashing-node-js-bcrypt/

```
   Algorithm: Will be "$2a$" or "$2b$" which means BCrypt
   Cost: Represents the exponent used to determine how many iterations 2^n
   Salt: (16-byte (128-bit)), base64 encoded to 22 characters
   Hash: (24-byte (192-bit)), base64 encoded to 31 characters
```