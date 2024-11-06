function getCharacters() {
    fetch("https://rickandmortyapi.com/api/character/?page=19") 
        .then((response) => response.json())
        .then((data) => {
            appenCharacters(data.results);
        })
        .catch((error) => {
            console.error("Erro ao obter os dados:", error);
        });
}

function appenCharacters(characters) {
    let place = document.querySelector("#data-output");
    let out = "";

    for (let character of characters) {
        out += `<ul>
                    <li><img src="${character.image}" alt="${character.name}"></li>
                    <li>Nome: ${character.name}</li>
                    <li>Status: ${character.status}</li>
                    <li>Espécie: ${character.species}</li>
                </ul>`;
    }
    place.innerHTML = out;    
}

getCharacters();
