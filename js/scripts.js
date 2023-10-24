let pokemonList = [{ pokemon1 }, { pokemon2 }, { pokemon3 }, { pokemon4 }, { pokemon5 }]
let pokemon1 = {
    name: "Golduck",
    height: 1.7,
    type: ['water']
};
let pokemon2 = {
    name: "Gloom",
    height: 0.8,
    types: ['grass', 'poison']
};
let pokemon3 = {
    name: "Beedrill",
    height: 1,
    types: ['bug']
};
let pokemon4 = {
    name: "Spearow",
    height: 0.3,
    types: ['flying']
};
let pokemon5 = {
    name: "Caterpie",
    height: 1,
    types: ['bug']
};

for (let i = 0; i <= pokemonList.length; i++) {
    if (height >= 1) {
        document.write(pokemonList.name[i] + " \(" + "height: " + pokemonList.height[i] + "\)" + " -" + "Wow, that\'s big!");
    }
    else {
        document.write(pokemonList.name[i] + " \(" + "height: " + pokemonList.height[i] + "\)");
    }
}
