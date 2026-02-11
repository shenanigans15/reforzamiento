const useState = (hero1: string) => {
  return [
    hero1,
    (hero2: string) => {
      console.log(hero2);
    },
  ] as const;
};

const [name, setName] = useState("Goku");
console.log(name); // Goku
setName("Vegeta"); // Imprime "Vegeta"
