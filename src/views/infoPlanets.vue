<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img style="height: 50vh;" :src="require(`@/assets/planets/${getInfoPlanets.url.split(/\D/g).join('')}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p class="is-size-3"><strong> {{ getInfoPlanets.name }}</strong></p>
                        <p><strong>Diameter: </strong> {{ getInfoPlanets.diameter }}</p>
                        <p><strong>Rotation period: </strong> {{ getInfoPlanets.rotation_period }}</p>
                        <p><strong>Orbital period: </strong> {{ getInfoPlanets.orbital_period }}</p>
                        <p><strong>Gravity: </strong> {{ getInfoPlanets.gravity }}</p>
                        <p><strong>Population: </strong> {{ getInfoPlanets.population }}</p>
                        <p><strong>Climate: </strong> {{ getInfoPlanets.climate }}</p>
                        <p><strong>Terrain: </strong> {{ getInfoPlanets.terrain }}</p>
                        <p><strong>Surface water: </strong> {{ getInfoPlanets.surface_water }}</p><br>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <relatedFilms></relatedFilms>
                </div>
                <div class="column">
                    <relatedResidentVue></relatedResidentVue>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import relatedFilms from '@/components/relatedFilms.vue';
import relatedResidentVue from '@/components/relatedResident.vue'
export default {
    name: 'infoPlanets',
    components: { relatedFilms, relatedResidentVue },
    computed: {
        ...mapGetters(['getInfoPlanets']),

    },
    mounted() {
        document.getElementById("op3").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op3").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }
}
</script>
<style scoped>
.box {
    margin-top: 5px;
    background-color: rgb(45, 45, 45);
}

.caixa {
    background-color: black;
}

strong {
    color: rgb(174, 171, 171);
}

p {
    color: rgb(133, 131, 131);
}
</style>