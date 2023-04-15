// Pridobimo model Novica.
const Novica = require('../models/Novica');


exports.getAllNovice = async (req, res, next) =>{
    try {
        //const [novice, _] = await Novica.findAll();
        const novice = await Novica.findAll();

        res.status(200).json({novice: novice[0]});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getNovicaById = async (req, res, next) =>{
    try {
        let novicaId = req.params.id;
        let [novica, _] = await Novica.findById(novicaId);
    
        res.status(200).json({novica: novica[0]});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewNovica = async (req, res, next) =>{
    try {
        let { StevilkaStrani, NazivNovice, OpisNovice, OznakaKategorije } = req.body;
        let novica = new Novica(StevilkaStrani, NazivNovice, OpisNovice, OznakaKategorije);
    
        novica = await novica.save();

        res.status(201).json({ message: `Novica ${novica.StevilkaStrani} je  dodana.` });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.updateNovica = async (req, res, next) =>{
    try {
        let { StevilkaStrani, NazivNovice, OpisNovice } = req.body;
        let novica = new Novica(StevilkaStrani, NazivNovice, OpisNovice);
    
        novica = await novica.save();

        res.status(201).json({ message: "Novica je dodana." });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

