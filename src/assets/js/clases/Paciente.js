function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
            return _nombre;
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
            return _edad;
        }
    });

    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    });

    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
            return _diagnostico;
        }
    });

}

// getter nombre
Paciente.prototype.getNombre = function () {
    return this._getNombre;
}

// setter nombre
Paciente.prototype.setNombre = function (nombre) {
    return this._setNombre = nombre;
}

// getter edad
Paciente.prototype.getEdad = function () {
    return this._getEdad;
}

//setter edad
Paciente.prototype.setEdad = function (edad) {
    return this._setEdad = edad;
}

// getter rut
Paciente.prototype.getRut = function () {
    return this._getRut;
}

// getter diagnóstico
Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
}

// setter diagnóstico
Paciente.prototype.setDiagnostico = function (diagnostico) {
    return this._setDiagnostico = diagnostico;
}

Paciente.prototype.datos = function () {
    return `Nombre: ${this._getNombre}, Edad: ${this._getEdad}, RUT: ${this._getRut}, Diagnostico: ${this._getDiagnostico}`;
}

export default Paciente;