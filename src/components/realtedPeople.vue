<template>
    <div class="box">
        <p class="titol is-size-5  is-bold">Related Characters</p>
        <p class="is-size-4 m-5 has-text-gray-lighter"> {{ msg }}</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in personatges" :key="i">
                <div class="carta">
                    <a class="nav-link" @click="setInfo(item)">
                        <figure class="image">
                            <img class="imatge"
                                :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
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
export default {
    name: 'relatedPeople',
    data() {
        return {
            personatges: [],
            numImatge: '',
            msg:''
        }
    },
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    created() {
        this.getcharacters()
    },

    methods: {
        setInfo(item) {
            this.$store.state.infoFilm = item
            this.$store.state.infoCharacters = item
            this.$router.push('/infoCharacters')
            this.$store.dispatch('GET_INFOCHARACTERS', item)
        },
        async getcharacters() {
            if(this.getInfoFilms.people.length == 0){
                this.msg='People not available'
            }
            for (let i = 0; i < this.getInfoFilms.people.length; i++) {
                const response = fetch(this.getInfoFilms.people[i])
                const infoCharaters = await (await response).json();
                this.personatges.push(infoCharaters)
            }
        },
    }
}
</script>
<style>
img {
    border-radius: 10px;
}

.imatge {
    border: solid rgb(53, 53, 53);
}

.carta {
    padding: 0;
    width: 15vh;
    height: 28vh;
    margin: 8px;
    border-radius: 5%;

}

.titol {
    margin-bottom: 25px;
    border-bottom: solid rgb(191, 147, 0) 2px;
    color: rgb(174, 171, 171);

}
</style>