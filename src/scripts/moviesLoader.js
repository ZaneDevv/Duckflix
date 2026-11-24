import { API_URL } from '../settings/api.js';
import { ref } from 'vue';

// ---------------------------------------------------------------------------------------
// VARIABLES
// ---------------------------------------------------------------------------------------

export let moviesData = ref([]);

// ---------------------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------------------

/**
 * Loads several movie cards with the given name in the searcher input and at the given page
 * @param {Number} page Page to load. If it is not set, by default it sets 1
 * @author Álvaro Fernández Barrero
 */
export function loadMovies(page = 1)
{
    const name = document.getElementById("seaching-input").value.trim();

    fetch(`${API_URL}&s=${name}&page=${page}`)
        .then(data => data.json())
        .then(data => {
            moviesData.value = [];

            for (const cardData of data.Search)
                moviesData.value.push({
                    title: cardData.Title,
                    thumbnail: cardData.Poster,
                    genre: cardData.Type
                });
        })
        .catch(console.warn);
}