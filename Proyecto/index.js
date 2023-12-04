document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('formContacto');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const pais = document.getElementById('pais').value;
        const discord = document.getElementById('discord').value;

        if (nombre === '' || apellido === '' || edad === '' || pais === '' || discord === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (isNaN(edad) || edad <= 0) {
            alert('Por favor, ingresa una edad válida.');
            return;
        }

        // Si todo está bien, se enviará el formulario
        form.submit();
    });
});

function obtenerEquipos() {
    fetch('https://api.pandascore.io/teams/league-of-legends')
        .then(response => response.json())
        .then(data => {
            mostrarEquipos(data);
        })
        .catch(error => console.error('Error:', error));
}

function mostrarEquipos(equipos) {
    const contenedorEquipos = document.getElementById('equipos-container');
    equipos.forEach(equipo => {
        contenedorEquipos.innerHTML += `<div>${equipo.name}</div>`;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    obtenerEquipos();
});
function funcionBuscar() {
    var elementoBuscado = document.getElementById("juego");
    var titulo = elementoBuscado.value;
    var main = document.querySelector('main');

    fetch(`https://www.cheapshark.com/api/1.0/deals?title=${titulo}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const elemento = data[i];
            const juego = `<div class="description">
                <h1>${elemento.title}</h1>
                <h2>Precio de Oferta: $${elemento.salePrice}</h2>
                <h2>Precio Normal: $${elemento.normalPrice}</h2>
                <h2>Rating en Steam: ${elemento.steamRatingText}</h2>
                <h3 class="Tienda"><a class: href="https://www.cheapshark.com/redirect?dealID=${elemento.dealID}" target="_blank">Ir a Tienda</h3></a></div>
                <img src="${elemento.thumb}" width="200px"></img>`;

            main.innerHTML = juego; // Reemplaza el contenido de main con el juego actual
        }
    });
}