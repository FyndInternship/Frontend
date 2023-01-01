<template>
  <v-navigation-drawer>    
    <div class = "addKitchen">
      <v-btn color = "#6200ee" style = "color: white; width: 90%; font-weight: 900" >Add Kitchen + </v-btn>
    </div>
    <hr>
    <!-- kitchen lists component start -->
    <div class = "kitchenList">
      <div class="kitchenItem" v-for = "(item) in $store.getters.getKitchenList" :key="item._id" @click = "switchKitchen(item)"> {{item.name}}</div>
    </div>
    <!-- kitchen lists component end -->
  </v-navigation-drawer>

  <v-container>
    <div class = "kitchenBody">
        <div class = "kitchenTitleBar">
          <div style="margin: 2rem; font-weight:900; font-size: 2rem">{{activeKitchenName}}</div>
    </div>

    
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Requests</v-tab>
      <v-tab value="two">Seen</v-tab>
      <v-tab value="three">Approved</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>



    </div>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      tab: null,
      kitchenList: this.$store.getters.getKitchenList
    }
  },
  methods: {
    switchKitchen(item) {
      this.$store.commit('setActiveKitchen', item)
    },
    loadKitchenList() {
      this.$store.dispatch('getAllKitchListAction')
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
  justify-content: center;
  align-items: center;
  font-weight: 800;
  background: rgb(100, 196, 245);
  margin: 2px;
  padding: 10px;
  
}

</style>