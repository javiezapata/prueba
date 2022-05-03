const express = require('express');
const router = express.Router();
const {cliente, transacciones}=require('../model/model')
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome);

router.get('/ListaFondos',navigationController.getList);
router.get('/transacciones',navigationController.getTrans);
router.get('/apertura',navigationController.getApert);


module.exports = router;