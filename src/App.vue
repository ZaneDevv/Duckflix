<script setup>
    import Card from "./components/Card.vue";
    import { moviesData, loadMovies } from "./scripts/moviesLoader.js";
</script>

<template>
    <header>
        <h1>Duckflix</h1>

        <div id="searcher">
            <input id="seaching-input" type="text" placeholder="Search..." @input="loadMovies()">
            <button id="search" title="Search" @click="loadMovies()">
                <img alt="Search" src="/search.svg">
            </button>
        </div>
    </header>

    <main>
        <div id="cards-container">
            <Card v-for="movieData of moviesData" :key="movieData.id" :thumbnail="movieData.thumbnail" :title="movieData.title" genre="show" />
        </div>
    </main>

    <footer>
        <p>Web made by &copy; <a title="&Aacute;lvaro's GitHub" href="https://www.github.com/ZaneDevv" target="_blank">&Aacute;lvaro Fern&aacute;ndez Barrero</a></p>
    </footer>
</template>