class Producto{
    constructor(tipo,marca,tamaño,precio){
        this.tipo = tipo,
        this.marca = marca,
        this.tamaño = tamaño,
        this.precio = precio
    }
    mostrar(){
        console.log(`${this.tipo} ${this.marca} de ${this.tamaño} tiene un valor de $ ${this.precio}`)
    }
}

const Producto1 = new Producto("Yerba mate", "Taraguí","1 kg", 500)
const Producto2 = new Producto("Azucar", "Ledezma","1 kg", 250)

Producto1.mostrar()
Producto2.mostrar()

Producto1.marca = prompt("Elige si deseas otra marca de yerba")
Producto2.marca = prompt("Elige si deseas otra marca de azucar")

console.log(`Marcas seleccionadas: ${Producto1.marca} y ${Producto2.marca}`);

let suma = Producto1.precio + Producto2.precio

console.log(`El total de la compra es de $${suma}`);
