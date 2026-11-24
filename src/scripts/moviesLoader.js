import { API_URL } from '../settings/api.js';
import { ref } from 'vue';

// ---------------------------------------------------------------------------------------
// VARIABLES
// ---------------------------------------------------------------------------------------

export let moviesData = ref([]);

let page = 1;
let lastName = "";

// ---------------------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------------------

/**
 * Loads several movie cards with the given name in the searcher input and at next page
 * @author Álvaro Fernández Barrero
 */
export function loadMovies()
{
    const name = document.getElementById("seaching-input").value.trim();

    if (lastName !== name)
    {
        page = 1;
        moviesData.value = [];
    }

    lastName = name;

    fetch(`${API_URL}&s=${name}&page=${page++}`)
        .then(data => data.json())
        .then(data => {
            for (const cardData of data.Search)
                moviesData.value.push({
                    title: cardData.Title,
                    thumbnail: cardData.Poster,
                    genre: cardData.Type
                });
        })
        .catch(console.warn);
}