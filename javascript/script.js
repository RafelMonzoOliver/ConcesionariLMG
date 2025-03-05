document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Formcotxe");
    const button = document.getElementById("mostrarllista");
    const div = document.getElementById("divllista");
    const resultat = document.getElementById("resultat");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tipus = document.getElementById("tipus").value;
        const marca = document.getElementById("marca").value;
        const model = document.getElementById("model").value;
        const any = parseInt(document.getElementById("any").value);
        const portes = parseInt(document.getElementById("portes").value);

        let vehicle;
        if (tipus === "Cotxe") {
            vehicle = new cotxe(model, marca, any, portes);
        } else if (tipus === "Moto") {
            vehicle = new moto(model, marca, any, tipus); 
        } else if (tipus === "Camion") {
            vehicle = new camion(model, marca, any, portes); 
        }


        afegirVehicle(vehicle);
    });

    mostrarLlista()

    button.addEventListener("click", function () {
        mostrarLlista();
    });
});

function mostrarLlista() {
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = ""; 

    Llistavehicles.forEach((vehicle, index) => {
        const vehicleDiv = document.createElement("div");
        vehicleDiv.classList.add("vehiclediv");

        let extraInfo = ""; 

        if (vehicle instanceof cotxe) {
            extraInfo = `<p><strong>Portes:</strong> ${vehicle.portes}</p>`;
        } else if (vehicle instanceof moto) {
            extraInfo = `<p><strong>Tipus:</strong> ${vehicle.tipus}</p>`;
        } else if (vehicle instanceof camion) {
            extraInfo = `<p><strong>Capacitat:</strong> ${vehicle.capacitat}</p>`;
        }

        vehicleDiv.innerHTML = `
            <p><strong>Marca:</strong> ${vehicle.marca}</p>
            <p><strong>Model:</strong> ${vehicle.model}</p>
            <p><strong>Any:</strong> ${vehicle.any}</p>
            ${extraInfo} <!-- Se muestra la propiedad correspondiente según el tipo -->
            <button onclick="borrarVehicle(${index})">Eliminar</button>
        `;
        resultat.appendChild(vehicleDiv);
    });
}

function afegirVehicle(vehicle){
    Llistavehicles.push(vehicle);
    console.log('vehicle afegit,',vehicle);
    mostrarLlista();
}

function borrarVehicle(index) {
    Llistavehicles.splice(index, 1);
    mostrarLlista(); 
}
