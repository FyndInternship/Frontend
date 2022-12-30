<template>
<div class="firstDiv">
<base-card>
  <div class ="mainDiv">
    <!-- <div class = "companyTitle">Tiffin Wala</div> -->
    <div class = "titleDiv">
        <h1 >Sign up</h1>
        <router-link to="/signin"> Already have an account? Sign In.</router-link>
    </div>
    <comp-sign-up></comp-sign-up>
  </div>
</base-card>  
</div>
</template>

<script>
  import CompSignUp from "../Components/SignUp/CompSignup.vue"
  import BaseCard from "../BaseComponents/BaseCards.vue"

export default {
  components: {
    CompSignUp,
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