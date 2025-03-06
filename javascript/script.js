document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Formcotxe");
    const button = document.getElementById("mostrarllista");
    const div = document.getElementById("divllista");
    const resultat = document.getElementById("resultat");
    const tipusSelect = document.getElementById("tipus");
    const label_cambiable = document.getElementById("label_cambiable");
    const input_cambiable = document.getElementById("portes");

    tipusSelect.addEventListener("change", function () {
        if (tipusSelect.value === "Moto") {
            label_cambiable.textContent = "Tipus";
            portes.placeholder = "Tipus de moto";
            portes.type = "text";
        } else if (tipusSelect.value === "Camion") {
            label_cambiable.textContent = "Capacitat";
            portes.placeholder = "Capacitat en tones";
            portes.type = "number";
        } else if(tipusSelect.value === "Cotxe"){
            label_cambiable.textContent = "Portes";
            input_cambiable.placeholder = "Nombre de portes";
            portes.type = "number";
        }
    });

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
        div.style.display= 'block';

    });

    mostrarLlista()

    button.addEventListener("click", function () {
        mostrarLlista();
        div.style.display = 'block';
    });
});

function mostrarLlista() {
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = ""; 

    if(Llistavehicles.length === 0){
        resultat.innerHTML = `
        <div>
            <img src="/sources/images/error.png" width=200px alt="Imagen chistosa de error">
        </div>
        `;
        return;
    }

    Llistavehicles.forEach((vehicle, index) => {
        const vehicleDiv = document.createElement("div");
        vehicleDiv.classList.add("vehiclediv");

        let extraInfo = ""; 
        let imatges = "";

        if (vehicle instanceof cotxe) {
            extraInfo = `${vehicle.portes} portes </p>`;
            imatges = `<p><img src="/sources/images/cotxe.png" width="100px" alt="logo coche">`
        } else if (vehicle instanceof moto) {
            extraInfo = `<p> tipus ${vehicle.tipus} </p>`;
            imatges = `<p><img src="/sources/images/moto.webp" width="100px" alt="logo moto">`;
        } else if (vehicle instanceof camion) {
            extraInfo = `${vehicle.capacitat}T pes</p>`;
            imatges = `<p><img src="/sources/images/camion.png" width="100px" alt="logo camion">`;
        }

        if(vehicle instanceof camion){
            vehicleDiv.innerHTML = `
            <div>
                ${imatges}
            </div>
            <div>
                <p><strong class="mayus"> ${vehicle.marca}</strong></p>            
                <p> (${vehicle.any})</p>
            </div>
            <div>
                <p>${vehicle.model}</p>
                ${extraInfo}
            </div>
            <div>
                <button onclick="borrarVehicle(${index})" class="delete"><img src=/sources/images/X.png class="crecer" alt="boton de borrar"></button>
            </div>
        `;
        resultat.appendChild(vehicleDiv);

        }else{
            vehicleDiv.innerHTML = `
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
                <button onclick="borrarVehicle(${index})" class="delete"><img src=/sources/images/X.png class="crecer" alt="boton de borrar"></button>
            </div>
        `;        
        resultat.appendChild(vehicleDiv);
        }
        
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
