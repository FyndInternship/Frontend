<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
    /* width: 10rem; */
    padding: 2rem;
    max-width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
}
</style>