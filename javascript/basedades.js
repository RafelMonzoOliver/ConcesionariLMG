
const Llistavehicles = [];


function vehicle(marca,model,any){
    this.marca = marca;
    this.model = model;
    this.any = any;
}

function cotxe (model,marca,any,portes){
    vehicle.call(this,model,marca,any);
    this.portes = portes;
    this.mostraDetalls = function(){
        console.log(`Marca: ${this.marca},Model ${this.model}, Any ${this.any}, ${this.portes} portes`);
    }
}

function moto (model,marca,any,tipus){
    vehicle.call(this,model,marca,any);
    this.tipus = tipus;
    this.mostraDetalls = function(){
        console.log(`Marca: ${this.marca},Model ${this.model}, Any ${this.any}, ${this.tipus} tipus`);
    }
}

function camion(model,marca,any,capacitat){
    vehicle.call(this,marca,model,any);
    this.capacitat = capacitat;
    this.mostraDetalls = function(){
        console.log(`Marca: ${this.marca},Model ${this.model}, Any ${this.any}, ${this.capacitat} capacitat`);
    }
}


function afegirVehicle(vehicle){
    Llistavehicles.push(vehicle);
    console.log("Vehicle afegit",vehicle);
}

function getVehicle(){
    return Llistavehicles;
}

function borrarVehicle(vehicle){
    vehicle.remove;
}
