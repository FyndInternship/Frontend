<template>
  <div>
            <div class = "card" v-for="item in this.menu" :key= "item._id"> 
                    <img class = "food_img"  :src="item.imageUrl" alt="">
                                     <h1>{{item.name}}</h1>
                </div>
            </div>

</template>

<script>
export default {
    props: ["menu"]

}
</script>

<style scoped>
.card {
  /* width: 100px; */
  height: 100px;
  background: rgb(240, 230, 240);
  display: flex;
  align-items: center;
  border-radius: 10px;
  max-width: 400px;
  margin: 10px;

}

.food_img {
  object-fit: cover;
  height: 90px;
  width: 90px;
  border-radius: 10px;
  margin: 10px;
}
</style>