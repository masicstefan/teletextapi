require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

// TESTIRANJE.
// let sql = "SELECT * FROM novica;";

// pool.execute(sql, function(err, result){
//     if (err) throw err;

//     result.forEach(element => {
//         console.log(`Stran: ${element.StevilkaStrani} | Naslov: ${element.NazivNovice} | Novica: ${element.OpisNovice}`);
//     });  
// });
// TESTIRANJE.

module.exports = pool.promise();