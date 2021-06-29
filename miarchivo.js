
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

console.log(Producto1);
Producto1.mostrar()
console.log(Producto2);
Producto2.mostrar()

let suma = Producto1.precio + Producto2.precio

console.log(`El total de la compra es de $${suma}`);
