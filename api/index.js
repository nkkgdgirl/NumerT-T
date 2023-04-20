const app = require('express')()
const http = require('http')


var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    
    let token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'no tokens1' });
    token = token.split(' ')[1];
    console.log(token)
    let decode
    try {
        decode = jwt.verify(token, 'your_secret_key')
      } catch (error) {
        res.json({ message: 'no tokens2' });
    }
    console.log(decode)
    if(decode.id == 123){
        next()
    }
    else {res.json({ message: 'no tokens3' });}

  }
  
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'equation'
// });

const connection = mysql.createPool({
    host: 'localhost'||process.env.DB_HOST,
    user: 'root'||process.env.DB_USER,
    password: ''||process.env.DB_PASSWORD,
    database: 'equation'||process.env.DB_DATABASE,
});


app.use(cors())
app.use(express.json())
// app.get('/products/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })

app.get('/equation', verifyToken, function (req, res, next) {
    connection.query(
        'SELECT * FROM `equation`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.get('/equations', function (req, res, next) {
    connection.query(
        'SELECT * FROM `equation`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

// app.post('/equation', function (req, res, next) {
//     res.json(req.body)
//     connection.query(
//         'INSERT INTO `equation`(`id`, `equation`, `xl`, `xr`) VALUES (?,?,?,?)',
//         [req.body.id, req.body.equation, req.body.xl, req.body.xr],
//         function (err, results, fields) {
//             res.json(results)
//         }
//     );
// })

app.get('/linear', function (req, res, next) {
    connection.query(
        'SELECT * FROM `linear`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.post('/login', function (req, res, next) {
    // Check the user's credentials and get the user's ID
    const userId = 123;
  
    // Generate a token with the user's ID
    const token = jwt.sign({ id: userId }, 'your_secret_key', { expiresIn: '1h' });
  
    // Return the token to the client
    res.json({ token });
  });

  app.get('/login', function (req, res, next) {
    // Check the user's credentials and get the user's ID
    const userId = 123;
  
    // Generate a token with the user's ID
    const token = jwt.sign({ id: userId }, 'your_secret_key', { expiresIn: '1h' });
  
    // Return the token to the client
    res.json({ token });
  });

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 5000')
})

module.exports = app


