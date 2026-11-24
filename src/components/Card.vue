<!------------------------------------------------------------
    JAVASCRIPT
------------------------------------------------------------->

<script setup>
    // -------------------------------------------------------------------
    // PROPERTIES
    // -------------------------------------------------------------------

    defineProps(["thumbnail", "title", "genre"]);

    // -------------------------------------------------------------------
    // PARAMETERS
    // -------------------------------------------------------------------

    const MAXIMUM_TITLE_CHARACTERS_TO_RENDER = 30;

    // -------------------------------------------------------------------
    // METHODS
    // -------------------------------------------------------------------

    const capitalizeFirst = (string) => string[0].toUpperCase() + string.substring(1).toLowerCase();

    const limitTitle = (title) => title.length > MAXIMUM_TITLE_CHARACTERS_TO_RENDER
                ? (title.substring(0, MAXIMUM_TITLE_CHARACTERS_TO_RENDER) + "...")
                : title;
</script>

<!------------------------------------------------------------
    HTML
------------------------------------------------------------->

<template>
    <article :title="title" class="card">
        <picture>
            <source :srcset="thumbnail" type="image/jpeg">
            <img src="/failed_image.png" :alt="title">
        </picture>

        <h3>{{ limitTitle(title)}}</h3>
        <p>{{ capitalizeFirst(genre) }}</p>
    </article>
</template>

<!------------------------------------------------------------
    CSS
------------------------------------------------------------->

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

    .card:hover img {
        transform: scale(1.02);
        animation: 100ms hover-image-animation ease-in-out;
    }

    .card p {
        opacity: 0.7;
    }

    @keyframes hover-image-animation {
        from {
            transform: scale(1);
        }

        to {
            transform: scale(1.02);
        }
    }
</style>