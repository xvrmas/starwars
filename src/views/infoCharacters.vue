<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img style="height: 50vh;" :src="require(`@/assets/characters/${getInfoCharacters.url.split(/\D/g).join('')}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p class="is-size-3"><strong> {{ getInfoCharacters.name }} </strong></p>
                        <p><strong>Gender: </strong>{{ getInfoCharacters.gender }}</p>
                        <p><strong>Birthday: </strong> {{
                            getInfoCharacters.birth_year
                        }}</p>
                        <p><strong>Eye color: </strong>{{
                            getInfoCharacters.eye_color
                        }}</p>
                        <p><strong>Skin color: </strong>{{
                            getInfoCharacters.skin_color
                        }}</p>
                        <p><strong>Hair color: </strong>{{
                            getInfoCharacters.hair_color
                        }}</p>
                        <p><strong>Height: </strong>{{
                            getInfoCharacters.height
                        }} cm.</p>
                        <p><strong>Mass: </strong>{{
                            getInfoCharacters.mass
                        }} Kgr.</p>
                        <p><strong>Home world: </strong><a @click="setInfoPlanets(), setInfoResidents(), getFilms()">{{
                            msg
                        }}</a></p><br>


                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <relatedFilms></relatedFilms>
                    <relatedStarships></relatedStarships>
                </div>
                <div class="column">
                    <relatedvehicles></relatedvehicles>
                    <relatedSpecies></relatedSpecies>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import relatedFilms from '@/components/relatedFilms.vue'
import relatedPlanets from '@/components/relatedPlanets.vue';
import relatedSpecies from '@/components/relatedSpecies.vue';
import relatedStarships from '@/components/relatedStarships.vue';
import relatedvehicles from '@/components/relatedVehicles.vue';
export default {
    name: 'infoCharacters',
    components: { relatedPlanets, relatedSpecies, relatedStarships, relatedvehicles, relatedFilms },

    data() {
        return {
            msg: '',
            home: []
        }
    },

    computed: {
        ...mapGetters(['getInfoCharacters']),
        async homeworld() {
            const response = fetch(this.getInfoCharacters.homeworld)
            this.home = await (await response).json();
            this.msg = this.home.name
        }

    },
    mounted() {
        this.homeworld
        document.getElementById("op2").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op2").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        },
        getFilms() {
            this.$store.state.infoFilm = this.home
        },
        setInfoPlanets() {
            this.$store.state.infoPlanets = this.home
            this.$router.push('/infoPlanets')
        },
        setInfoResidents() {
            this.$store.state.infoCharacters = this.home
        },
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
    height: max-content;
}

strong {
    color: rgb(174, 171, 171);
}

p {
    color: rgb(133, 131, 131);
}

a {
    color: rgb(191, 147, 0);
}

a:hover {
    color: rgb(248, 210, 85);
}

a:hover {
    color: white;
}
</style>