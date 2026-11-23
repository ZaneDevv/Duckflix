<script setup>
    defineProps(["thumbnail", "title", "genre"]);
</script>

<template>
    <article :title="title" class="card">
        <img :src="thumbnail" :alt="title">
        <h2>{{ title }}</h2>
        <p>{{ genre }}</p>
    </article>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card:hover {
        cursor: pointer
    }

    .card img {
        width: 100%;
        border-radius: 15px;
    }
</style>