import { API_URL } from '../settings/apiUrl.js';

// ---------------------------------------------------------------------------------------
// VARIABLES
// ---------------------------------------------------------------------------------------

const moviesCotainer = document.getElementById("movies-container");

// ---------------------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------------------

/**
 * Loads a card with the movie's data received
 * @param {Object} data Movie data
 * @author Álvaro Fernández Barrero
 */
function loadCard(data)
{
    const card = document.createElement("div");
    card.className = "movie-card";
    card.title = data.Title;

    const image = document.createElement("img");
    image.src = data.Poster;
    image.alt = data.Title;

    const title = document.createElement("p");
    title.textContent = data.Title;

    const year = document.createElement("p");
    year.textContent = data.Year;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(year);

    moviesCotainer.appendChild(card);
}

/**
 * Loads several movie cards with the given name and at the given page
 * @param {String} name Movie name to look for
 * @param {Number} page Page to load. If it is not set, by default it sets 1
 * @author Álvaro Fernández Barrero
 */
export function loadMovieByNameAndPage(name, page = 1)
{
    fetch(`${API_URL}&s=${name}&page=${page}`)
        .then(data => data.json())
        .then(data => {
            for (const cardData of data.Search)
                loadCard(cardData);
        })
        .catch(console.warn);
}