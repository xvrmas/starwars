<template>
    <div class="contenidor">
        <div class="caixa ">
            <div>
                <img src="@/assets/star-wars-4.svg" style="width:250px;margin:20px" alt="">
                <b-button class="is-rounded is-dark" style="margin-top:5%;margin-left: 5%;" @click="info()">Info</b-button>
            </div>
        </div>
        <div class="botons">
            <div>
                <a @click="showFilms()" id="op1" class="boto_nav">Films</a>
                <a @click="showPeople()" id="op2" class="boto_nav">Characters</a>
                <a @click="showPlanets()" id="op3" class="boto_nav">Planets</a>
                <a @click="showSpecies()" id="op4" class="boto_nav">Species</a>
                <a @click="starships(), showImageShip()" id="op5" class="boto_nav">Starships</a>
                <a @click="showVehicles()" id="op6" class="boto_nav">Vehicles</a>
            </div>
        </div>
    </div>
</template>

<script>
import info from '@/views/info.vue'
export default {
    name: 'NavBar',
    components: { info },
    data() {
        return {
            boton: document.getElementsByClassName("boto")
        }
    },

    methods: {
        showFilms() {
            this.$router.push('/')
            this.$store.dispatch("GET_FILMS")
        },
        starships() {
            this.$router.push('/ShowStarships')
            this.$store.dispatch("GET_STARSHIPS")
        },
        showImageShip() {
            this.$store.dispatch("GET_IMAGESHIPS")
        },
        showPeople() {
            this.$router.push('/showPeople')
            this.$store.dispatch('GET_PEOPLE')
        },
        showPlanets() {
            this.$router.push('showPlanets')
            this.$store.dispatch('GET_PLANETS')
        },
        showSpecies() {
            this.$store.dispatch('GET_SPECIES')
            this.$router.push('showSpecies')
        },
        showVehicles() {
            this.$router.push('showVehicles')
            this.$store.dispatch('GET_VEHICLES')
        },
        info() {
            this.$router.push('info')            
        }
    }
}
</script>
<style scoped>
.contenidor {
    background-color: black;
}

.botons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: solid rgb(67, 59, 33) 2px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.boto_nav {
    color: rgb(165, 163, 163);
    margin: 20px;
    font-size: x-large;
}

a {
    text-decoration: none;
}

.caixa {
    background-color: black;
}

a:hover {
    color: aliceblue;
}


@media (max-width: 845px) {
    .boto_nav {
        display: inline-table;
    }
}
</style>