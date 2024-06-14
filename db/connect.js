const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
})

connection.connect((err) => {
  if (err) {
    console.log('Connnect Error!', err)
  } else {
    console.log('Connect Database Successfull')
  }
})

module.exports = connection.promise()
