
/**
 * @returns {Promise<Object>} character information
 */
const fetchCharacter = async() => {
    const randomId = Math.floor(Math.random() * 826) + 1; // Hay 826 personajes
    const res = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await res.json();

    console.log(data);
    return data;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMortyApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Rick and Morty App';
    element.innerHTML = 'Loading...';

    const nameLabel = document.createElement('h3');
    const imageElement = document.createElement('img');
    const statusLabel = document.createElement('p');
    const nextButton = document.createElement('button');
    
    nextButton.innerText = 'Next Character';
    imageElement.classList.add('character-img');


    const renderCharacter = ( data ) => {
        nameLabel.innerHTML = data.name;
        imageElement.src = data.image;
        imageElement.alt = data.name;
        statusLabel.innerHTML = `Status: ${data.status} | Species: ${data.species}`;
        
        element.replaceChildren( imageElement, nameLabel, statusLabel, nextButton );
    }

    // Añadir listener
    nextButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const character = await fetchCharacter();
        renderCharacter( character );
    });
    

    fetchCharacter()
        .then( renderCharacter );
}
