import Consultorio from "./clases/Consultorio.js";
import Paciente from "./clases/Paciente.js";

let paciente1 = new Paciente("Carlos", 70, "1-1", "Enfermo");
let paciente2 = new Paciente("Martina", 50, "2-2", "Otitis");
let paciente3 = new Paciente("Diego", 20, "3-3", "Enfermo");

//pacientes iniciales
let pacientes = [paciente1, paciente2, paciente3];

let consultorio1 = new Consultorio("Consultorio Salvador", pacientes);

// probamos método para agregar 1 nuevo paciente
let paciente4 = new Paciente("Marta", 65, "4-4", "Problemas en la cadera.");
consultorio1.addPaciente(paciente4);
console.log(consultorio1.getPacientes());

// probamos método para agregar nuevos pacientes
let paciente5 = new Paciente("Martina", 35, "5-5", "Presenta dolor de espalda.");
let paciente6 = new Paciente("Martín", 45, "6-6", "Rotura ligamento cruzado.");
consultorio1.addPacientes([paciente5, paciente6]);
console.log(consultorio1.getPacientes());

document.getElementById("formFiltroPacientes").addEventListener("submit", function (event) {
    event.preventDefault();
    let listaUl = document.getElementById("listaPacientesFiltrados");
    let mensajeFiltro = document.getElementById("mensajeFiltro");

    // método para buscar pacientes por nombre y mostrar todos sus datos
    let nombre = document.getElementById("nombre").value;

    let pacientesFiltrados = consultorio1.filterPacientePorNombre(nombre);

    if (pacientesFiltrados.length == 0) {
        listaUl.innerHTML = "";
        mensajeFiltro.innerText = "No se han encontrado pacientes con el nombre: " + nombre;
        return;
    }

    mensajeFiltro.innerText = `Listado de pacientes encontrados (${pacientesFiltrados.length} pacientes):`;
    console.log(mensajeFiltro);
    let acumuladorLi = "";
    pacientesFiltrados.forEach(paciente => {
        acumuladorLi += `<li>${paciente.datos()}</li>`;
    });

    listaUl.innerHTML = acumuladorLi;
})