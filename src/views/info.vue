<template>
    <div>
        <div class="container">
            <div class="box">
                <div class="panel">
                    <p class="has-text-grey">This website is an exercise in my training at the IT Academy in Barcelona.</p><br>

                    <p class="has-text-grey"> The information is taken from the api: <a target="_blank" href="https://swapi.dev/">swapi.dev</a> and from the web: <a target="_blank" href=" https://starwars-visualguide.com">
                        starwars-visualguide</a></p>
                </div>
                    <button class="button" @click="goBack()">X</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'info',
    methods: {
        goBack() {
            window.history.back();
        }
    }
}
</script>
<style scoped>
a{
    color: rgb(191, 147, 0);
}
a:hover{
    color: rgb(248, 210, 85);
}
.container {
    padding: 1%;
    background-color: black;
}

.box {
    background-color: rgb(45, 45, 45);
    color: aliceblue;

}

.button {
    margin: 3vh;
    background-color: rgb(45, 45, 45);
    color: white;
}
.panel{
    padding: 20vh;
    border:solid gray 0px;
    box-shadow:1px 1px 3px 3px rgb(36, 36, 36);

}
@media (max-width: 845px) {
   .panel{
    padding: 5vh;
   }
  
}
</style>