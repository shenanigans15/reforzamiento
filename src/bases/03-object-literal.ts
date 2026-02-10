const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
}

const spiderman = structuredClone(ironman)

spiderman.lastName = 'Parker'
spiderman.firstName = 'Peter'
spiderman.age = 22
spiderman.address.city = 'San José'

console.log(ironman, spiderman)