<template>
    <div class="box">
        <p class="titol is-size-4 has-text-left is-bold">Related Films</p>
        <p class="is-size-4 m-5 has-text-gray-lighter"> {{ msg }}</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in orderFilms " :key="i">
                <div class="carta">
                    <a class="nav-link" @click="setInfo(item), showImageFilm(item)">
                        <figure class="image">
                            <img class="imatge" :src="require(`@/assets/portada/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <div>
                            <p class="title has-text-grey is-size-6"> Episode {{ item.episode_id }} <br> {{ item.title }} </p>
                            
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
    name: 'relatedFilms',
    computed: {
        ...mapGetters(['getInfoFilms']),
        orderFilms() {
            let i = 0;
            let j = 0;
            let temp = '';
            if (this.films.length == 0) {
                console.log('Loading...')
            } else
                while (i < this.films.length) {
                    j = i + 1;
                    while (j < this.films.length) {
                        if (this.films[i].episode_id > this.films[j].episode_id) {
                            temp = this.films[i];
                            this.films[i] = this.films[j]
                            this.films[j] = temp
                        }
                        j++;
                    }
                    i++;
                }
            return this.films;
        },
    },
    data() {
        return {
            films: [],
            msg: ''
        }
    },

    mounted() {
        this.getFilms()
    },


    methods: {

        setInfo(item) {
            this.$store.state.infoFilm = item
            this.$router.push('/infoFilms')
        },
        showImageFilm: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGEFILM")
        },
        async getFilms() {
            if (this.getInfoFilms.films.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.films.length; i++) {
                    const response = fetch(this.getInfoFilms.films[i])
                    const filming = await (await response).json();
                    this.films.push(filming)
                }
            } else {
                this.msg = 'Films not available'
                this.$store.state.condition = false
            }
        },

    },
    warch: {
        orderFilms() {
            this.fims;
        }
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

.title {
    text-align: center;
}

@media (max-width: 845px) {
    .title {
        margin: 0px;
    }

}
</style>