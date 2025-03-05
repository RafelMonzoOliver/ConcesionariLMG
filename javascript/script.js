

document.addEventListener("DOMContentLoaded",function(){

    const form = document.getElementById("Formcotxe");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const tipus = document.getElementById("tipus").value;
        const marca = document.getElementById("marca").value;
        const model = document.getElementById("model").value;
        const any = parseInt(document.getElementById("any").value);
        const portes = parseInt(document.getElementById("portes").value);

        const vehicle = { tipus, marca, model, any, portes };

        afegirVehicle(vehicle);
    });

    const button = document.getElementById('mostrarllista');
    const div = document.getElementById('divllista');
    const resultat = document.getElementById('resultat');

    button.addEventListener('click', function() {
        div.style.marginBottom = '0px';
        resultat.textContent = JSON.stringify(Llistavehicles, null, 2);
    });


    
});

function afegirVehicle(vehicle) {
    Llistavehicles.push(vehicle);
    console.log("Objeto añadido:", vehicle);
    console.log(resultat);
}