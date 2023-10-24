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

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 1) {
        document.write(pokemonList[i].name + " (" + "height: " + pokemonList[i].height + ") - " + "Wow, that's big!<br>");
    } else {
        document.write(pokemonList[i].name + " (" + "height: " + pokemonList[i].height + ")<br>");
    }
}