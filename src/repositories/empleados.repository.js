const Empleado = require('../models/Empleado');
const EmpleadoDTO = require('../dto/empleado.dto');

class EmpleadosRepository {
  async createEmpleado(empleadoDTO) {
    const empleado = new Empleado({
      nombre: empleadoDTO.nombre,
      cargo: empleadoDTO.cargo,
      departamento: empleadoDTO.departamento,
      sueldo: empleadoDTO.sueldo,
    });

    return await empleado.save();
  }

  async getEmpleados() {
    return await Empleado.find();
  }

  async getEmpleadoById(id) {
    return await Empleado.findById(id);
  }

  async updateEmpleadoById(id, empleadoDTO) {
    return await Empleado.findByIdAndUpdate(
      id,
      {
        nombre: empleadoDTO.nombre,
        cargo: empleadoDTO.cargo,
        departamento: empleadoDTO.departamento,
        sueldo: empleadoDTO.sueldo,
      },
      { new: true }
    );
  }

  async deleteEmpleadoById(id) {
    return await Empleado.findByIdAndRemove(id);
  }
}

module.exports = EmpleadosRepository;