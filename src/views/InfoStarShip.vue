<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="caixaImatge">
                    <img :src="getImageShips">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <div class="column">
                            <p><strong>Model:</strong> {{ getInfoShips.model }}</p>
                            <p><strong>Manufacturer:</strong> {{ getInfoShips.manufacturer }}</p>
                            <p><strong>Max speed:</strong> {{ getInfoShips.max_atmosphering_speed }} Km/h</p>
                            <p><strong>Cost:</strong> {{ getInfoShips.cost_in_credits }} credits</p>
                            <p><strong> Crew: </strong>{{ getInfoShips.crew }}</p>
                            <p><strong> Passengers:</strong> {{ getInfoShips.passengers }}</p>
                            <p><strong>Length:</strong> {{ getInfoShips.length }}</p>
                            <p><strong>Cargo capacity:</strong> {{ getInfoShips.cargo_capacity }}</p>
                            <p><strong>Consumables:</strong> {{ getInfoShips.consumables }}</p>
                            <p><strong>Hyperdrive rating:</strong> {{ getInfoShips.hyperdrive_rating }}</p>
                            <p><strong>Starship class: </strong> {{ getInfoShips.starship_class }}</p>
                            <p><strong>MGLT:</strong> {{ getInfoShips.MGLT }}</p>
                        </div>
                        <!-- <div class="column">
                            <relatedFilms></relatedFilms>
                        </div> -->
                    </div>
                    <div class="column">
                        <relatedFilms></relatedFilms>
                        <relatedPilotsVue></relatedPilotsVue>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import relatedFilms from '@/components/relatedFilms.vue'
import relatedPilotsVue from '@/components/relatedPilots.vue'
export default {
    name: 'InfoStarShip',
    components: { relatedFilms, relatedPilotsVue },
    computed: {
        ...mapGetters(['getImageShips', 'getInfoShips'])
    },
    mounted() {
        document.getElementById("op5").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op5").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }

}
</script>

<style scoped>
img {
    width: 120vh;
    height: auto;
}

.box {
    background-color: rgb(45, 45, 45);
}

.caixa {
    background-color: black;
}

strong {
    color: rgb(174, 171, 171);
}

p {
    color: rgb(133, 131, 131);
}

</style>