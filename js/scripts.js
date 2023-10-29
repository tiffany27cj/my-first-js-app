let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Golduck",
            height: 1.7,
            types: ['water']
        },
        {
            name: "Gloom",
            height: 0.8,
            types: ['grass', 'poison']
        },
        {
            name: "Beedrill",
            height: 1,
            types: ['bug']
        },
        {
            name: "Spearow",
            height: 0.3,
            types: ['flying']
        },
        {
            name: "Caterpie",
            height: 1,
            types: ['bug']
        }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu', height: 1, types: ['electric'] });
console.log(pokemonRepository.getAll());


