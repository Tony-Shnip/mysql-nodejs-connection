const mysql = require('mysql')

const connection = mysql.createConnection( {
  host: 'ip',
  user: 'usrname',
  database: 'dbname',
  password: 'usrpassword'
});

connection.connect( (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Database has been connected!');
  }
})

let query = 'SELECT * FROM users';

connection.query(query, (err, data, field) => {     //field - fields description
  if (err) {
    throw err;
  }
  else {
    console.log(data);
  }
});

connection.end( (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Database has been disconnected!');
  }
})