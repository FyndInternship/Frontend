<template>
<div class="firstDiv">
  <base-card>
    <div class ="mainDiv">
      <!-- <div class = "companyTitle">Tiffin Wala</div> -->
      <div class = "titleDiv">
          <h1 >Sign in</h1>
          <router-link to="/signup"> Don't have an account? Sign Up.</router-link>
      </div>
      <comp-sign-in></comp-sign-in>
    </div>
  </base-card>  
</div>
</template>

<script>
  import CompSignIn from "../Components/SignIn/CompSignIn.vue"
  import BaseCard from "../BaseComponents/BaseCards.vue"

export default {
  components: {
    CompSignIn,
    BaseCard
  }

}
</script>

<style scoped>
  .companyTitle {
    /* text-align: center; */
    font-size: 2rem;
    margin: 1.2rem 0;
    font-weight: 900;
  }
  .firstDiv{
    margin-left: 35%;
    margin-top: 15rem;
  }
  .titleDiv{
    display: flex;
    margin: 1rem 0;
    align-items: center;
    justify-content: space-between;
  }
  .mainDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 300px !important; */
  }

</style>