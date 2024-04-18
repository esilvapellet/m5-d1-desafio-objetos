function Consultorio(nombre, pacientes = []) {
    let _nombre = nombre;
    let _pacientes = pacientes;

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        },
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
            return _nombre;
        },
    });

    Object.defineProperty(this, "_getPacientes", {
        get: function () {
            return _pacientes;
        },
    });

    Object.defineProperty(this, "_setPacientes", {
        set: function (pacientes) {
            _pacientes = pacientes;
            return _pacientes;
        },
    });
}

// métodos getter y setter

Consultorio.prototype.getNombre = function () {
    return this._getNombre;
}

Consultorio.prototype.setNombre = function (nombre) {
    return this._setNombre = nombre;
}

Consultorio.prototype.getPacientes = function () {
    return this._getPacientes;
}

// método para agregar un nuevo paciente
Consultorio.prototype.addPaciente = function (paciente) {
    let pacientes = this._getPacientes;
    pacientes.push(paciente);
    this.setPacientes = pacientes;
    return this._getPacientes;
}

// método para agregar múltiples pacientes
Consultorio.prototype.addPacientes = function (nuevosPacientes) {
    console.log(nuevosPacientes);
    let pacientes = this._getPacientes;

    // agrega los pacientes nuevos a los que ya existían
    let pacientesConcatenados = pacientes.concat(nuevosPacientes);
    this._setPacientes = pacientesConcatenados;
    return this._getPacientes;
}

// método para buscar paciente por nombre
Consultorio.prototype.filterPacientePorNombre = function (nombre) {
    let pacientesFiltrados = this._getPacientes.filter(paciente => paciente.getNombre().toLowerCase() == nombre.toLowerCase());

    return pacientesFiltrados;

}

export default Consultorio;