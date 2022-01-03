// const { dblClick } = require('@testing-library/user-event/dist/click');
let express = require('express');
let mysql = require('mysql');
const path = require('path');
const cors = require('cors');

let app = express();

app.use(express.json());

app.use(cors())


let conexion = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'root',
  database:'librosdb'
})

app.get('/api/libros', (req, res) => {
  conexion.query('SELECT * FROM libros', (err, filas) => {
    console.log(filas)
    if(err) {
      throw err;
    } else {
      res.send(filas);
      
    }
  })
});

app.get('/api/libros/:id', (req, res) => {
  conexion.query('SELECT * FROM libros WHERE id = ?', [req.params.id], (err, fila) => {
    if(err) {
      throw err;
    } else {
      res.send(fila);
    }
  })
});

app.put('/api/libros/:id', (req, res) => {
  const sql = `UPDATE libros SET titulo = ?, descripcion = ? WHERE id= ?`
  conexion.query(sql,[req.body.titulo, req.body.descripcion, req.params.id], error => {
    if(error) {
      throw error
    } else {
      res.send('Actualizado')
    }
  })
})


conexion.connect((err) => {
  if(err) {
    throw err
  } else {
    console.log('conectado')
  }
})

app.get('/',(req,res) => {
  res.send('Bienvenido')
})



const puerto = process.env.PUERTO || 3000;

app.listen(puerto,() => {
  console.log('server, puerto ' + puerto)
})



// DESDE ACA
// const express = require('express');
// const app = express();
// const path = require('path');
// const expressRouter = express.Router();

// app.set('port',process.env.PUERTO || 3000);


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'public/index.html'))
// })

// app.listen(app.get('port'), () => {
//   console.log('server', app.get('port'))
// })


// const express = require('express');
// const app = express();
// const path = require('path');
// const mysql = require('mysql');
// const routesCustom = express.Router();
// const myconnection = require('express-myconnection/lib/express-myconnection');
// // importacion rutas
// // const routesCustomer = require('./src/routes/customer');

// app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'ejs');

// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname,'public/index.html'))
// // })

// app.use(myconnection(mysql, {
//   host:'localhost',
//   user: 'root',
//   password: 'root',
//   port: 3306,
//   database:'librosdb'
// }, 'single'));


// // Rutas
// // app.use('/', routesCustomer);
// app.get('/', (req, res) => {
//   res.send('HOLA MUNDO')
// })

// app.use(express.static(path.join(__dirname, 'public')))

// app.listen(app.get('port'), () => {
//   console.log('server')
// })