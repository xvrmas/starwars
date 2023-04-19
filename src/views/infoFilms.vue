<template>
    <div class="caixa">
        <div class="container p-4">
            <div class="columns">
                <div class="column is-half m-1">
                    <img style="height: 60vh;" :src="getImageFilm">
                </div>
                <div class="box column has-text-left">
                    <p class="is-size-3"><strong> {{ infoFilm.title }}</strong></p>
                    <p><strong>Director: </strong> {{ infoFilm.director }}</p>
                    <p><strong>Producer(s): </strong>{{ infoFilm.producer }}</p>
                    <p><strong>Release date: </strong>{{ orderDate }}</p>
                    <p><strong>Synopsis: </strong>{{ infoFilm.opening_crawl }}</p>
                </div>
            </div>
        </div>
        <div class="columns m-1">
            <div class="column">
                <relatedPlanets></relatedPlanets>
                <relatedCharacters></relatedCharacters>
            </div>
            <div class="column">
                <relatedStarships></relatedStarships>
                <relatedvehicles></relatedvehicles>
                <relatedSpecies></relatedSpecies>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import relatedCharacters from '@/components/relatedCharacters.vue';
import relatedPlanets from '@/components/relatedPlanets.vue';
import relatedSpecies from '@/components/relatedSpecies.vue';
import relatedStarships from '@/components/relatedStarships.vue';
import relatedvehicles from '@/components/relatedVehicles.vue'
export default {
    name: 'infoFilms',
    components: { relatedCharacters, relatedPlanets, relatedSpecies, relatedStarships, relatedvehicles },
    computed: {
        ...mapState(['infoFilm']),
        ...mapGetters(['getImageFilm']),
        orderDate() {
            let order = this.infoFilm.release_date.split('-').reverse().join('-')
            return order;
        }
    },
    mounted() {
        document.getElementById("op1").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op1").style.borderBottom = 'none';
    },
}
</script>
<style scoped>
.box {
    margin-top: 5px;
    background-color: rgb(45, 45, 45);
}

p {
    color: rgb(133, 131, 131);
}

strong {
    color: rgb(174, 171, 171);
}

.caixa {
    background-color: black;
}
</style>