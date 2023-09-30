const EmpleadosRepository = require('../repositories/empleados.repository');
const EmpleadoDTO = require('../dto/empleado.dto');

const empleadosRepository = new EmpleadosRepository();

async function createEmpleado(req, res) {
  const data = req.body;
  const empleadoDTO = new EmpleadoDTO(data.nombre, data.cargo, data.departamento, data.sueldo);

  try {
    const nuevoEmpleado = await empleadosRepository.createEmpleado(empleadoDTO);
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el empleado' });
  }
}

async function getEmpleados(req, res) {
  try {
    const empleados = await empleadosRepository.getEmpleados();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los empleados' });
  }
}

async function getEmpleado(req, res) {
  const { id } = req.params;
  try {
    const empleado = await empleadosRepository.getEmpleadoById(id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el empleado' });
  }
}

async function updateEmpleado(req, res) {
  const { id } = req.params;
  const data = req.body;
  const empleadoDTO = new EmpleadoDTO(data.nombre, data.cargo, data.departamento, data.sueldo);

  try {
    const empleadoEditado = await empleadosRepository.updateEmpleadoById(id, empleadoDTO);
    if (!empleadoEditado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json(empleadoEditado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al editar el empleado' });
  }
}

async function deleteEmpleado(req, res) {
  const { id } = req.params;
  try {
    const empleadoEliminado = await empleadosRepository.deleteEmpleadoById(id);
    if (!empleadoEliminado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el empleado' });
  }
}

module.exports = {
  createEmpleado,
  getEmpleados,
  getEmpleado,
  updateEmpleado,
  deleteEmpleado,
};