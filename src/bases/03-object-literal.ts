interface Person {
    firstName: string
    lastName: string
    age: number
    address: Address
}

interface Address {
    postalCode: string
    city: string
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    },
}

// const spiderman: Person = {      Ctrl + .  
//                                  Add missing properties
// }
// const spiderman: Person = {      Agrega las propiedades que ya
//     firstName: "",               conoce de esa interfaz
//     lastName: "",
//     age: 0
// }

console.log(ironman)

// const spiderman = structuredClone(ironman)

// spiderman.lastName = 'Parker'
// spiderman.firstName = 'Peter'
// spiderman.age = 22
// spiderman.address.city = 'San José'

// console.log(ironman, spiderman)