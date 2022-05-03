const mongoose = require('mongoose');


// cliente Schema
const clienteSchema = new mongoose.Schema({
    _id: Object,
    nombre: String,
    montoMin : Number,
    categoria: String,
    estado: Boolean

});

// transaciones Modal Schema
const tranSchema = new mongoose.Schema({
    _id: Object,
    restante: Number,
    tipo:Boolean,
    transa: String,
    nTransa: Number
});

// Creating model objects
const  cliente = mongoose.model('cliente', clienteSchema);
const transaciones = mongoose.model('trasn', tranSchema);

// Exporting our model objects
module.exports = {
    cliente, transaciones
}

