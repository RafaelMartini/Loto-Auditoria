const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

{
  /*Conexão Com o banco de dados */
}

// const database = mysql.createConnection({
//   host: "localhost",
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

app.use(express.json());
app.use(cors());

const database = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'banco',
});

insertUsuario = (email, password) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        userHash = hash;
        console.log('Hash ', hash);
        validateUser(password, hash);
        database.query(
          'INSERT IGNORE INTO usuarios (email, password) VALUES (?, ?)',
          [email, hash],
          (error, result) => {
            if (error) {
              return reject(error);
            }

            return resolve(
              result.affectedRows > 0
                ? 'User Inserted: ' + email
                : 'User already exist: ' + email,
            );
          },
        );
      })
      .catch((err) => console.error(err.message));
  });
};

updateUsuario = (email, password) => {
  return new Promise((resolve, reject) => {
    database.query(
      'UPDATE usuario SET password = ? WHERE email = ?',
      [email, password],
      (error) => {
        if (error) {
          return reject(error);
        }

        return resolve();
      },
    );
  });
};

getAllUsuarios = () => {
  return new Promise((resolve, reject) => {
    database.query('SELECT * FROM usuarios ', (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};

// end points
app.get('/init_tables', (req, res) => {
  const createTableEmails =
    'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';
  msg = [];
  database.query(createTableEmails, (err, result) => {
    // if (err) throw err;
    if (err) {
      msg.push(...err);
    } else {
      if (result.warningCount > 0)
        msg.push("Table 'emails' already exist!");
      else msg.push("Table 'emails' created!");
    }
  });

  const creatTableUsuarios =
    'CREATE TABLE IF NOT EXISTS usuarios(email varchar(200) NOT NULL,password varchar(200) NOT NULL, PRIMARY KEY (email));';

  database.query(creatTableUsuarios, (err, result) => {
    // if (err) throw err;
    if (err) {
      msg.push(...err);
    } else {
      if (result.warningCount > 0)
        msg.push("Table 'usuarios' already exist!");
      else msg.push("Table 'usuarios' created!");
    }
  });

  sequentialQueries('martini3')
    .then((data) => {
      console.log('Data:' + data);
      msg.push(...data);
      res.send(msg);
    })
    .catch((reason) => {
      console.log('Message:' + reason.message);
      res.send('Message:' + reason.message);
    });
});

function validateUser(password, hash) {
  bcrypt
    .compare(password, hash)
    .then((res) => {
      //console.log(res); // return true
      return res;
    })
    .catch((err) => console.error(err.message));
}

async function sequentialQueries(password) {
  const promise1 = insertUsuario('martini@gmail.com', password);
  const promise2 = insertUsuario('rafael@gmail.com', password);
  const promise3 = insertUsuario('hkely@gmail.com', password);
  const promise4 = insertUsuario('hkely2@gmail.com', password);
  promises = [promise1, promise2, promise3, promise4];

  try {
    const result = await Promise.all(promises);

    return result;

    // you can do something with the result
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function insertUserPromise(user, password) {
  const promise1 = insertUsuario(user, password);
  promises = [promise1];

  try {
    const result = await Promise.all(promises);

    return result;

    // you can do something with the result
  } catch (error) {
    console.log(error);
    return error;
  }
}

app.post('/register', (req, res) => {
  msg = [];
  const email = req.body.email;
  const password = req.body.password;

  database.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      } else if (result && result.length == 0) {
        insertUserPromise(email, password)
          .then((data) => {
            console.log(data);
            res.send({ msg: data[0] });
          })
          .catch((reason) => {
            console.log('Message:' + reason.message);
            res.send({ msg: reason.message });
          });
      } else {
        res.send({ msg: 'Email já cadastrado' });
      }
    },
  );
});

{
  /*Verificação de login*/
}

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  database.query(
    'SELECT password FROM usuarios WHERE email = ?',
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      } else if (result.length > 0) {
        bcrypt.compare(
          password,
          result[0].password,
          (error, response) => {
            if (error) {
              res.send(error);
            } else if (response == true) {
              res.send(response);
            } else {
              res.send({ msg: 'email ou senha incorreta' });
            }
          },
        );
      } else {
        res.send({ msg: 'Usuário não registrado!' });
      }
    },
  );
});

app.listen(3001, () => {
  console.log('rodando na porta 3001');
});
