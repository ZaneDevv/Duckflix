import { API_URL } from '../settings/apiUrl.js';

function loadCard(data)
{
    const card = document.createElement("div");

    const image = document.createElement("img");
    image.src = "";

    const title = document.createElement("p");

    const year = document.createElement("p");

}

export function loadMovieByNameAndPage(name, page = 1)
{
    fetch(`${API_URL}&s=${name}&page=${page}`)
        .then(data => data.json())
        .catch();
}