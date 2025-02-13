const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' }
];
const radiologia = [
    { hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
    { hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
    { hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
    { hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
    { hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" }
];
const traumatologia = [
    { hora: "8:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
    { hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
    { hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" }
];

console.log(dental);
console.log(radiologia);
console.log(traumatologia);



function mostrarDatos(consulta, tablaSelector, horasSelector, cabeceraSelector) {
    var infoTabla = "";

    var cabecera = document.querySelector(cabeceraSelector);
    // Asignar el contenido de la cabecera
    cabecera.innerHTML = `
    
            <th>Hora</th>
            <th>Especialista</th>
            <th>Paciente</th>
            <th>RUT</th>
            <th>Previsión</th>

    `;
    for (var i = 0; i < consulta.length; i++) {
        infoTabla +=
            `<tr>
            <td>${consulta[i].hora}</td>
            <td>${consulta[i].especialista}</td>
            <td>${consulta[i].paciente}</td>
            <td>${consulta[i].rut}</td>
            <td>${consulta[i].prevision}</td>
        </tr>`;
    }

    document.querySelector(tablaSelector).innerHTML = infoTabla;
    document.querySelector(horasSelector).innerHTML = `Primera atención: ${consulta[0].paciente} - ${consulta[0].prevision} | Última atención: ${consulta[consulta.length - 1].paciente} - ${consulta[consulta.length - 1].prevision}`;
}


mostrarDatos(dental, ".tb-dental", ".horasDental", ".th-dental");
mostrarDatos(radiologia, ".tb-radiologia", ".horasRadiologia", ".th-radiologia");
mostrarDatos(traumatologia, ".tb-traumatologia", ".horasTraumatologia", ".th-traumatologia");