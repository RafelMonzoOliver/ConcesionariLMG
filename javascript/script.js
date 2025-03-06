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
        const portes = document.getElementById("portes").value;

        let vehicle;
        if (tipus === "Cotxe") {
            vehicle = new cotxe(model, marca, any, portes);
        } else if (tipus === "Moto") {
            vehicle = new moto(model, marca, any, portes); 
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
        let imatges = "";

        if (vehicle instanceof cotxe) {
            extraInfo = `${vehicle.portes} portes </p>`;
            imatges = `<p><img src="/sources/images/cotxe.png" width="100px">`
        } else if (vehicle instanceof moto) {
            extraInfo = `<p> tipus ${vehicle.tipus} </p>`;
            imatges = `<p><img src="/sources/images/moto.webp" width="100px">`;
        } else if (vehicle instanceof camion) {
            extraInfo = `${vehicle.capacitat}T pes</p>`;
            imatges = `<p><img src="/sources/images/camion.png" width="100px">`;
        }

        vehicleDiv.innerHTML = `
            <img src = /sources/images/car.jpg width='70px'>
            <p><strong>Marca:</strong> ${vehicle.model}</p>
            <p><strong>Model:</strong> ${vehicle.marca}</p>
            <p><strong>Any:</strong> ${vehicle.any}</p>
            ${extraInfo} <!-- Se muestra la propiedad correspondiente según el tipo -->
            <button onclick="borrarVehicle(${index})">Eliminar</button>
            <div>
                ${imatges}
            </div>
            <div>
                <p><strong class="mayus"> ${vehicle.model}</strong></p>            
                <p> (${vehicle.any})</p>
            </div>
            <div>
                <p>${vehicle.marca}</p>
                ${extraInfo}
            </div>
            <div>
                <button onclick="borrarVehicle(${index})" class="delete"><img src=/sources/images/X.png class="crecer"></button>
            </div>
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
