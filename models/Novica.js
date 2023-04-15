// Povezemo se na pool in ustvarimo db.
const db = require('../config/db');

class Novica {
    constructor(StevilkaStrani, NazivNovice, OpisNovice, OznakaKategorije, DatumOblikovanja) {
        this.StevilkaStrani = StevilkaStrani;
        this.NazivNovice = NazivNovice;
        this.OpisNovice = OpisNovice;
        this.OznakaKategorije = OznakaKategorije;
        this.DatumOblikovanja = DatumOblikovanja;
    }
    
    save() {
        // Pripravimo datum.
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let oblikovanoDne = `${yyyy}-${mm}-${dd}`;

        let sqlStmt = `INSERT INTO novica (StevilkaStrani, NazivNovice, OpisNovice, OznakaKategorije, DatumOblikovanja) 
                       VALUES(${this.StevilkaStrani}, '${this.NazivNovice}', '${this.OpisNovice}', '${this.OznakaKategorije}', '${oblikovanoDne}')`;

        return db.execute(sqlStmt);
    }

    static findAll() {
        let sqlStmt = "SELECT * FROM novica;";

        return db.execute(sqlStmt);
    };

    static findById(id) {
        let sqlStmt = `SELECT * FROM novica WHERE StevilkaStrani = ${id};`;

        return db.execute(sqlStmt);
    };
};

module.exports = Novica;