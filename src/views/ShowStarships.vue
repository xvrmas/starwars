<template>
    <div class="contenidor">
        <div class="border p-5">
            <div>
                <div class="columns is-multiline is-centered is-mobile">
                    <div v-for="(item, i) in getStarShips.results" :key="i">
                        <div class="card">
                            <a class="nav-link"
                                @click="setInfoShip(item), showImageShip(item), getFilms(item), setInfoPilots(item)">
                                <div class="card-image">
                                    <figure class="image">
                                        <img :src="(`https://starwars-visualguide.com/assets/img/starships/${item.url.split(/\D/g).join('')}.jpg`)"
                                            @error="setErrorImg" alt="image film">
                                    </figure>
                                    <div>
                                        <p style="color:gray" class="title is-size-5">{{ item.name }}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section class="columns is-centered is-mobile is-multiline">
                <button @click="decreasePage()" class="button is-dark active m-3">-</button>
                <h1 class="m-3">Page: {{ this.$store.state.pageStarships }} of 4</h1>
                <button @click="increasePage()" class="button is-dark m-3">+</button>
            </section>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import notImg from '@/assets/errorImg/notImg.jpg'
export default {
    name: 'ShowStarships',
    mounted() {

        document.getElementById("op5").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op5").style.borderBottom = 'none';
    },

    methods: {
        setErrorImg(e) {
            e.target.src = notImg
        },
        getFilms(item) {
            this.$store.state.infoFilm = item
        },
        setInfoShip(item) {
            this.$store.state.infoTechShip = item
            this.$router.push('/infoStarShip')
        },
        setInfoPilots(item) {
            this.$store.state.infoCharacters = item
        },
        increasePage() {
            this.$store.state.pageStarships++;
            if (this.$store.state.pageStarships > 4) {
                this.$store.state.pageStarships = 4
            }
            this.$store.dispatch("GET_STARSHIPS")
        },
        decreasePage() {
            this.$store.state.pageStarships--;
            if (this.$store.state.pageStarships < 1) {
                this.$store.state.pageStarships = 1
            }
            this.$store.dispatch("GET_STARSHIPS")
        },
        showImageShip: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            this.$store.dispatch("GET_IMAGESHIPS", item)
        },

    },
    computed: {
        ...mapGetters(['getStarShips', 'getImageShips']),
        ...mapMutations(['setShips']),
        ...mapState(['numImg', 'page'])
    },
}
</script>

<style scoped>
.border {
    background-color: black;
}

.card {
    width: 40vh;
    height: 40vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}

.contenidor {
    background-color: black;
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
        height: 22vh;
        margin: 1vh;
    }
  
}
</style>