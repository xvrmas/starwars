<template>
    <div class="border p-5">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in orderFilms" :key="i">
                    <div class="card">
                        <a class="nav-link" @click="setInfoFilm(item), showImageFilm(item)">
                            <div class="card-image">
                                <figure class="image">
                                    <img :src="require(`@/assets/portada/${item.url.split(/\D/g).join('')}.jpg`)"
                                        alt="image film">
                                </figure>
                                <div >
                                    <p style="color:gray" v-on="num" class="title is-size-6">Episode {{ item.episode_id }}
                                    </p>
                                    <p style="color:gray" class="title has-text-weight-bold is-size-5">{{ item.title }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShowFilms',
    data() {
        return {
            romNum: ''
        }
    },
    computed: {
        ...mapGetters(['getFilms', 'getImageFilm']),
        orderFilms() {
            let i = 0;
            let j = 0;
            let temp = '';
            if (this.getFilms.length == 0) {
                console.log('Loading...')
            } else
                while (i < this.getFilms.length) {
                    j = i + 1;
                    while (j < this.getFilms.length) {
                        if (this.getFilms[i].episode_id > this.getFilms[j].episode_id) {
                            temp = this.getFilms[i];
                            this.getFilms[i] = this.getFilms[j]
                            this.getFilms[j] = temp
                        }
                        j++;
                    }
                    i++;
                }
            return this.getFilms;
        },
        num() {
            let i = 0;
            while (i < 6) {
                if (this.getFilms[i].episode_id == 1) {
                    this.romNum = 'I'
                }
                if (this.getFilms[i].episode_id == 2) {
                    this.romNum = 'II'
                }
                if (this.getFilms[i].episode_id == 3) {
                    this.romNum = 'III'
                }
                if (this.getFilms[i].episode_id == 4) {
                    this.romNum = 'IV'
                }
                if (this.getFilms[i].episode_id == 5) {
                    this.romNum = 'V'
                }
                if (this.getFilms[i].episode_id == 6) {
                    this.romNum = 'VI'
                }
                i++;
            }
        },
    },
    mounted() {
        document.getElementById("op1").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op1").style.borderBottom = 'none';
    },
    methods: {
        setInfoFilm(item) {
            this.$store.state.infoFilm = item
            this.$router.push('/infoFilms')
        },
        showImageFilm: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGEFILM")
        },
    }
}
</script>

<style scoped >
.card {
    width: 39vh;
    height: 67vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}

.title {
    margin-top: 5px;
}

img {
    border-bottom: solid rgb(191, 147, 0) 3px;

}

@media (max-width: 845px) {
    .card{
        width: 18vh;
        height: 38vh;
        margin: 1vh;
    }
  
}
</style>