<template>
    <div>
        <div class="container">
            <div class="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum molestiae deleniti ea cupiditate facilis nihil harum velit fugiat quo, laboriosam rerum necessitatibus suscipit ipsum. Cum quam a optio magni?</p>
            <b-button  class="is-rounded is-dark mt-5" @click="goBack()">close</b-button>
            
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
.container {
    padding: 1%;
    background-color: black;
}

.box {
    background-color: rgb(45, 45, 45);
    padding:20vh;
    color: aliceblue;

}

</style>