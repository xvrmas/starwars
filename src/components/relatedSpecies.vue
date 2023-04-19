<template>
    <div class="box">
        <p class="titol is-size-4 has-text-left is-bold">Related species</p>
        <p class="is-size-4 m-5 has-text-gray-lighter"> {{ msg }}</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in species" :key="i">
                <div class="carta">
                    <a class="nav-link" @click="setInfoSpecies(item), setInfoPeople(item)">
                        <figure class="image">
                            <img class="imatge"
                                :src="(`https://starwars-visualguide.com/assets/img/species/${item.url.split(/\D/g).join('')}.jpg`)">
                        </figure>
                        <div>
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
export default {
    name: 'relatedSpecies',

    data() {
        return {
            species: [],
            msg: ''
        }
    },
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    created() {
        this.getSpecies()
    },
    methods: {
        setInfoSpecies(item) {
            this.$store.state.infoFilm = item
            this.$store.state.infoSpecies = item
            this.$router.push('/infoSpecies')
            this.$store.dispatch('GET_INFOSPECIES', item)
        },
        setInfoPeople(item) {
            this.$store.state.infoCharacters = item
        },
        async getSpecies() {
            if (this.getInfoFilms.species.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.species.length; i++) {
                    const response = fetch(this.getInfoFilms.species[i])
                    const infoSpecies = await (await response).json();
                    this.species.push(infoSpecies)
                }
            } else {
                this.msg = 'Specie not available'
            }
        }
    }
}
</script>
<style>
.title {
    text-align: center;
}
</style>
