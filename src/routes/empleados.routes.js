const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controller');

router.post('/empleados', empleadosController.createEmpleado);
router.get('/empleados', empleadosController.getEmpleados);
router.get('/empleados/:id', empleadosController.getEmpleado);
router.put('/empleados/:id', empleadosController.updateEmpleado);
router.delete('/empleados/:id', empleadosController.deleteEmpleado);

module.exports = router;