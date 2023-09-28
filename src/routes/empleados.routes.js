const { Router }= require('express'); 
const router=Router();  

const empleado = require('../controllers/empleados.controller');

router.get('/empleados', empleado.getEmpleados);
router.post('/empleados', empleado.createEmpleado);
router.get('/empleados/:id', empleado.getEmpleado);
router.put('/empleados/:id', empleado.editEmpleado);
router.delete('/empleados/:id', empleado.deleteEmpleado);

module.exports = router;