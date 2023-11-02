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
        if (typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList;
        }

        function addListItem(pokemon) {
            let pokemonList = document.querySelector(".pokemon-list");
            let listPokemon = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            listPokemon.appendChild(button);
            pokemonList.appendChild(listPokemon);
            button.addEventListener('click', function () {
                showDetails(pokemon);
            });
        }

        function showDetails(pokemon) {
            console.log(pokemon);
        }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            showDetails: showDetails
        }
    }) ();


    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });


