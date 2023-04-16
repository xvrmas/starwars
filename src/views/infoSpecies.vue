<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="(`https://starwars-visualguide.com/assets/img/species/${getInfoSpecies.url.split(/\D/g).join('')}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p class="is-size-3"><strong> {{ getInfoSpecies.name }}</strong></p>
                        <p><strong>Classification: </strong> {{ getInfoSpecies.classification }}</p>
                        <p><strong>Designation: </strong> {{ getInfoSpecies.designation }}</p>
                        <p><strong>Averge height: </strong> {{ getInfoSpecies.average_height }} cm.
                        </p>
                        <p><strong>Average lifespan: </strong> {{ getInfoSpecies.average_lifespan }}
                        </p>
                        <p><strong>Hair color: </strong> {{ getInfoSpecies.hair_colors }}</p>
                        <p><strong>Skin color: </strong> {{ getInfoSpecies.skin_colors }}</p>
                        <p><strong>Eye color: </strong> {{ getInfoSpecies.eye_colors }}</p>
                        <p><strong>Languaje: </strong> {{ getInfoSpecies.language }}</p><br>
                        <relatedFilms></relatedFilms>
                        <realtedPeopleVue></realtedPeopleVue>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import relatedFilms from '@/components/relatedFilms.vue'
import realtedPeopleVue from '@/components/realtedPeople.vue'
export default {
    name: 'infoSpecies',
    components: { relatedFilms, realtedPeopleVue },
    computed: {
        ...mapGetters(['getInfoSpecies'])
    },
    mounted() {
        document.getElementById("op4").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op4").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }
}
</script>
<style>
.box {
    margin-top: 5px;
    background-color: rgb(45, 45, 45);
    box-shadow:1px 1px 3px 3px rgb(36, 36, 36);
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