interface Hero {
  id: number
  name: string
  owner: Owner
}

type Owner = 'DC' | 'Marvel'
// enum Owner {           Obliga a poner Owner.DC u Owner.Marvel
//   DC = 'DC',           en cada uno de los objetos
//   Marvel = 'Marvel',
// }

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Green Lantern',
    owner: 'DC',
  },
]
