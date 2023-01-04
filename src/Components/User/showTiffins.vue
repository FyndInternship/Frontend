<template>
  <v-container>
        <h1 class = "text-center tiffinTitle">Available Tiffin Centers</h1>
        <div class="cardsDiv">
        
            <tiffin-cards v-for="tiffin in $store.getters.getTiffinList" :key="tiffin._id" :tiffin = tiffin>
            </tiffin-cards>
            <!-- <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards>
            <tiffin-cards></tiffin-cards> -->
        </div>
    </v-container>
</template>

<script>
    import TiffinCards from '../TiffinCards.vue'


export default {
    components: {
        TiffinCards
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style scoped>
.cardsDiv{
    display: grid;
    grid-template-columns: auto auto auto ;
    gap: 30px;
    margin: 20px 12px;
    /* grid-template-rows: 1 1 ; */
}
.tiffinTitle{
    background: #a367f6;
    color: white;
    border-radius: 5px;
    margin: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

</style>