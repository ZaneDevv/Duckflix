import { loadMovies } from './moviesLoader.js';

// ---------------------------------------------------------------------------------------
// PARAMETERS
// ---------------------------------------------------------------------------------------

const DELAY_MILLISECONDS = 250;
const PIXELS_MARGIN_TO_LOAD_MORE = 50;

// ---------------------------------------------------------------------------------------
// VARIABLES
// ---------------------------------------------------------------------------------------

let wasAlreadyInitialized = false;
let lastTimeLoaded = 0;


// ---------------------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------------------

/**
 * Initializes the events for the "infinite" scroll
 * @author Álvaro Fernández Barrero
 */
export function initializeScrollEvents()
{
    if (wasAlreadyInitialized)
        return;
    
    wasAlreadyInitialized = true;
    
    document.addEventListener("scroll", () => {
        const cardsContainer = document.getElementById("cards-container");
        if (cardsContainer.children.length === 0)
            return;

        const now = Date.now();
        if (now - lastTimeLoaded <= DELAY_MILLISECONDS)
            return;

        lastTimeLoaded = now;
        const bottomScrollPositionY = window.scrollY + window.innerHeight
        
        if (document.body.scrollHeight - bottomScrollPositionY <= PIXELS_MARGIN_TO_LOAD_MORE)
            loadMovies();
    });
}