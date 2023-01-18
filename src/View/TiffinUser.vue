<template>
  <v-navigation-drawer>    
    <div class = "addKitchen">
      <!-- <v-btn color = "#6200ee" style = "color: white; width: 90%; font-weight: 900" >Add Kitchen + </v-btn> -->
    <add-kitchen-form></add-kitchen-form>
    </div>
    <hr>
    <!-- kitchen lists component start -->
    <div class = "kitchenList">
      <div v-if ="$store.getters.getLoadingAdminKitchenList" style="margin: 2px">
        <v-progress-linear indeterminate color="yellow-darken-2"></v-progress-linear>
      </div>
      <div class="kitchenItem" v-for = "(item) in $store.getters.getKitchenList" :key="item._id" @click = "switchKitchen(item)"> 
        <span> {{item.name}}</span>
        <v-btn variant="text">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </v-btn>
    </div>
          
   
    </div>
    <!-- kitchen lists component end -->
  </v-navigation-drawer>

  <v-container>
    <div class = "kitchenBody">
        <div class = "kitchenTitleBar">
          
          <div style="margin: 2rem; font-weight:900; font-size: 2rem">{{
            $store.getters.getKitchenList.length>0?activeKitchenName:"Please add a kitchen"}}</div>
    </div>


  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Requests</v-tab>
      <v-tab value="three">Archived</v-tab>
      <v-tab value="menu">Menu</v-tab>

    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">

            <v-expansion-panels>
                <v-expansion-panel
                bg-color="#64c4f5"
                color="white"
                class="my-4"
                  v-for="item in $store.getters.getActiveRequests" :key = "item._id"
                >
                <v-expansion-panel-title >{{item.name.toUpperCase()}}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="userRequest">
                    <p>Hii, I would like to know more about the service, Please contact me <strong>{{item.contact_no}}</strong></p>
                    <v-btn>Archive</v-btn>
                    </div>  
                </v-expansion-panel-text>
  </v-expansion-panel>



</v-expansion-panels>
            <!-- <div class = "userRequest my-2" v-for="item in $store.getters.getActiveRequests" :key = "item._id">
              <p><strong>{{item.name.toUpperCase( )}}</strong> has requested for the kitchen</p>
              <div>
              <v-btn class="mx-4">Details</v-btn>
              <v-btn>Approve</v-btn>
              </div>
            </div> -->

        </v-window-item>

      

        <v-window-item value="menu">
          <div>
             <v-form v-model="valid" enctype="multipart/form-data" @submit.prevent="uploadFood" >
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="name"
                        label="Food Name"
                        required
                      ></v-text-field>
                    </v-col>

                  <v-col
                   cols="12"
                      md="4"
                  >
                          <v-file-input
                          v-model="image"
                  truncate-length="15"
                ></v-file-input>
                  </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                     <v-btn type = "submit"
                     :disabled ='$store.getters.getKitchenList.length<=0'
                     > +Add Item</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
            <hr/>
          <show-menu-cards  :menu="$store.getters.getActiveKitchen.menu"></show-menu-cards>
            <!-- <div>
                <div class = "card" v-for="item in $store.getters.getActiveKitchen.menu" :key= "item._id"> 
                    <img class = "food_img"  :src="item.imageUrl" alt="">
                                     <h1>{{item.name}}</h1>
                </div>
            </div> -->
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>



    </div>
  </v-container>
</template>

<script>
import AddKitchenForm from '../Components/TiffinUser/addKitchenForm.vue'
// import addMenuApi from '../Api/kitchenAdminApi/addMenuApi'
import ShowMenuCards from '../commonComponents/showMenuCards.vue'

export default {
  components: {
    AddKitchenForm,
    ShowMenuCards
  },
  data() {
    return {
      tab: null,
      name: "",
      image: "",
      kitchenList: this.$store.getters.getKitchenList,
      activeKitchen: this.$store.getters.getActiveKitchen
    }
  },
  methods: {
    switchKitchen(item) {
      this.$store.commit('setActiveKitchen', item)
    },
    loadKitchenList() {
      this.$store.dispatch('getAllKitchListAction')
    },
     uploadFood() {
      this.$store.dispatch('addMenuItem', {data: {  
          name: this.name, 
          image: this.image[0], 
          tiffinId:this.$store.getters.getActiveKitchen._id || null
      }})
      // await addMenuApi({ })
    }
  },
  computed: {
    activeKitchenName() {
      return this.$store.getters.getActiveKitchenName
    }

  },
  mounted() {
    this.loadKitchenList()
  }
  
}
</script>

<style scoped>


.userRequest{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: rgb(217, 217, 232); */
  padding: 10px;
  border-radius: 5px;
  font-size: 1.2rem;
}
.kitchenTitleBar{
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.kitchenBody{
  height: 800px;
  /* background: burlywood; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  
}

.addKitchen{
  display: flex;
  justify-content: center;
  padding: 10px;
}
.kitchenItem {

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  background: rgb(100, 196, 245);
  margin: 2px;
  padding: 10px;
  
}

</style>