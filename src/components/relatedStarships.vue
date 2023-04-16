<template>
    <div class="box">
        <p class="titol is-size-4 is-bold">Related starships</p>
        <p class="is-size-4 m-5 has-text-gray-lighter"> {{ msg }}</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in starships" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge" @error="setErrorImg"
                                :src="`https://starwars-visualguide.com/assets/img/starships/${item.url.split(/\D/g).join('')}.jpg`"
                                alt="image film">
                        </figure>
                    </div>
                    <a class="nav-link" @click="setInfoStarships(item), showImageShip(item), setInfoPilots(item)">
                        <p class="title has-text-grey is-size-6">related {{ item.name }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import notImg from '@/assets/errorImg/notImg.jpg'
export default {
    name: 'relatedStarships',
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    data() {
        return {
            starships: [],
            msg: ''
        }
    },
    mounted() {
        this.getStarships()
    },
    methods: {
        setErrorImg(e) {
            e.target.src = notImg
        },
        setInfoStarships(item) {
            this.$store.state.infoFilm = item
            this.$store.state.infoStarships = item
            this.$router.push('/infoStarShip')
            this.$store.dispatch('GET_INFOSTARSHIPS', item)
        },
        setInfoPilots(item) {
            this.$store.state.infoCharacters = item
        },
        showImageShip(item) {
            this.$store.state.numImg = item.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
        async getStarships() {
            if (this.getInfoFilms.starships.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.starships.length; i++) {
                    const response = fetch(this.getInfoFilms.starships[i])
                    const infoStarShip = await (await response).json();
                    this.starships.push(infoStarShip)
                }
            }else{
                this.msg = 'StarShip not available'

            }
        },
        showImageShip: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
    }
}
</script>
<style scoped>
.carta {
    padding: 0;
    width: 20vh;
    height: auto;
    margin: 8px;
    border-radius: 5%;

}
</style>