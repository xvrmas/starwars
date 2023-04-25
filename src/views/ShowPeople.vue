<template>
    <div class="border p-5">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getPeople.results" :key="i">
                    <div class="card">
                        <a class="nav-link"
                            @click="setInfoFilms(item), getFilms(item), setInfoShip(item), getInfoVehicles(item), setInfoSpecies(item)">
                            <div class="card-image">
                                <figure class="image">
                                    <img :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
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
            <h1 class="m-3 has-text-gray">Page: {{ this.$store.state.pagePeople }} of 9</h1>
            <button @click="increasePage()" class="button is-dark m-3">+</button>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShowPeople',
    computed: {
        ...mapGetters(['getPeople'])
    },
    mounted() {
        document.getElementById("op2").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op2").style.borderBottom = 'none';
    },

    methods: {
        setInfoFilms(item) {
            this.$store.state.infoCharacters = item
            this.$router.push('/infoCharacters')
        },
        setInfoShip(item) {
            this.$store.state.infoTechShip = item
        },
        getFilms(item) {
            this.$store.state.infoFilm = item
        },
        getInfoVehicles(item) {
            this.$store.state.infoVehicles = item
        },
        increasePage() {
            this.$store.state.pagePeople++;
            if (this.$store.state.pagePeople > 9) {
                this.$store.state.pagePeople = 9
            }
            this.$store.dispatch("GET_PEOPLE")
        },
        setInfoSpecies(item) {
            this.$store.state.infoSpecies = item
        },
        decreasePage() {
            this.$store.state.pagePeople--;
            if (this.$store.state.pagePeople < 1) {
                this.$store.state.pagePeople = 1
            }
            this.$store.dispatch("GET_PEOPLE")
        },
    }
}

</script>

<style scoped>
.card {
    width: 25vh;
    height: 50vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}

.title {
    margin-top: 20px;
}

img {
    border-bottom: solid rgb(191, 147, 0) 3px;

}

h1 {
    color: rgb(133, 131, 131)
}
@media (max-width: 845px) {
    .card{
        width: 19vh;
        height: 35vh;
        margin: 1vh;
    }
}
</style>