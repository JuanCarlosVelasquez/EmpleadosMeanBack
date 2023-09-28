const empleadoCtrl={};
const Empleado = require('../models/Empleado');

/*empleadoCtrl.getEmpleados=(req,res)=>{     
    res.send('get empleados') 
}*/
empleadoCtrl.getEmpleados= async(req, res)=> {    
    try { 
        const empleados= await Empleado.find();    
        res.json(empleados);      
        //res.send('get empleados') 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los empleados' });
    }    
} 

/*------------------------------------------------*/
//empleadoCtrl.createEmpleado=(req,res)=>{} 
empleadoCtrl.createEmpleado= async(req,res)=>{     
    try {
        const empleado=new Empleado({             
            nombre: req.body.nombre,             
            cargo: req.body.cargo,             
            departamento:req.body.departamento,             
            sueldo:req.body.sueldo         
        });     
        console.log(empleado);     
        await empleado.save();     
        res.json('status: Datos guardados'); 
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el empleado' });
      }
} 

/*------------------------------------------------*/
//empleadoCtrl.getEmpleado=(req,res)=>{} 
empleadoCtrl.getEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el empleado' });
  }
};

/*------------------------------------------------*/
//empleadoCtrl.editEmpleado=(req,res)=>{} 
empleadoCtrl.editEmpleado=async(req,res)=>{     
    try {
        const {_id}=req.params;     
        const empleado={         
            nombre: req.body.nombre,         
            cargo: req.body.cargo,         
            departamento: req.body.departamento,         
            sueldo: req.body.sueldo     };     
        await Empleado.findByIdAndUpdate(req.params.id, {$set:empleado},{new: true});     
        res.json('status: Datos actualizados'); 
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
} 

/*------------------------------------------------*/
//empleadoCtrl.deleteEmpleado=(req,res)=>{}
empleadoCtrl.deleteEmpleado=async(req,res)=>{    
    try { 
        await Empleado.findByIdAndRemove(req.params.id);     
        res.json('status: Empleado ha sido removido');   
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el empleado' });
    }
} 

module.exports=empleadoCtrl; 