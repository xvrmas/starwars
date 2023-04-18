<template>
    <div class="box">
        <p class="titol is-size-4 is-bold">Related Vehicles</p>
        <p class="is-size-4 m-5 has-text-gray-lighter"> {{ msg }}</p>
        <div class="columns is-multiline is-mobile is-centered">
            <div v-for="(item, i) in vehicles" :key="i">
                <div class="carta">
                    <a class="nav-link" @click="setInfovehicles(item),setInfoPilots(item),showImageVehicle(item)">
                        <figure class="image">
                            <img class="imatge"
                                :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split(/\D/g).join('')}.jpg`)"
                                @error="setErrorImg" alt="image film">
                        </figure>
                        <div >
                            <p class="title has-text-grey is-size-6"> {{ item.name }}</p>
                        </div>
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
    name: 'relatedVehicles',
    computed: {
        ...mapGetters(['getInfoFilms', ' getImageShips'])
    },
    data() {
        return {
            vehicles: [],
            msg: ''
        }
    },
    created() {
        this.getVehicles()
    },


    methods: {
        setErrorImg(e) {
            e.target.src = notImg
        },
        setInfovehicles(item) {
            this.$store.state.infoFilm = item
            this.$store.state.infoVehicles = item
            this.$router.push('/infoVehicles')
            this.$store.dispatch('GET_INFOVEHICLES', item)

        },
        setInfoPilots(item) {
            this.$store.state.infoCharacters = item
        },
        showImageVehicle: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            this.$store.dispatch("GET_IMAGEVEHICLES", item)
        },
        async getVehicles() {
            if (this.getInfoFilms.vehicles.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.vehicles.length; i++) {
                    const response = fetch(this.getInfoFilms.vehicles[i])
                    const infoVehicles = await (await response).json();
                    this.vehicles.push(infoVehicles)
                }
            }else {
                this.msg = 'Vehicle not available'
            }
        }
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
.title{
    text-align:center;
}
</style>