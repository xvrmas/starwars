<template>
    <div class="border p-5">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getPlanets.results" :key="i">
                    <div class="card">
                        <a class="nav-link" @click="setInfoPlanets(item), getFilms(item), setInfoResidents(item)">
                            <div class="card-image">
                                <figure class="image">
                                    <img :src="require(`@/assets/planets/${item.url.split(/\D/g).join('')}.jpg`)"
                                        alt="image film">
                                </figure>
                                <div>
                                    <p style="color:gray" class="title is-size-5">{{
                                        item.name
                                    }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section class="columns is-centered is-mobile is-multiline">
            <button @click="decreasePage()" class="button is-dark active m-3">-</button>
            <h1 class="m-3 has-text-gray">Page: {{ this.$store.state.pagePlanets }} of 6</h1>
            <button @click="increasePage()" class="button is-dark m-3">+</button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShowPlanets',
    computed: {
        ...mapGetters(['getPlanets'])
    },
    mounted() {
        document.getElementById("op3").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op3").style.borderBottom = 'none';
    },

    methods: {
        getFilms(item) {
            this.$store.state.infoFilm = item
        },
        setInfoPlanets(item) {
            this.$store.state.infoPlanets = item
            this.$router.push('/infoPlanets')
        },
        setInfoResidents(item) {
            this.$store.state.infoCharacters = item
        },
        increasePage() {
            this.$store.state.pagePlanets++;
            if (this.$store.state.pagePlanets > 6) {
                this.$store.state.pagePlanets = 6
            }
            this.$store.dispatch("GET_PLANETS")
        },
        decreasePage() {
            this.$store.state.pagePlanets--;
            if (this.$store.state.pagePlanets < 1) {
                this.$store.state.pagePlanets = 1
            }
            this.$store.dispatch("GET_PLANETS")
        },
    }
}
</script>
<style scoped>
.card {
    width: 30vh;
    height: 40vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}

.title {
    margin-top: 20px;
}

img {
    border-bottom: solid rgb(191, 147, 0) 3px;

}
@media (max-width: 845px) {
    .card{
        width: 19vh;
        height: 30vh;
        margin: 1vh;
    }
  
}
</style>