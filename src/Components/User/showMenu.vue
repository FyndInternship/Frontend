<template>
  <v-row >
    <v-dialog
    max-width="500px"
      v-model="dialog"
      scrollable
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
         Show Menu
        </v-btn>
      </template>
      <v-card>
        <div style="display: flex; justify-content: center;">
            <show-menu-cards :menu = "this.menu"></show-menu-cards>
       </div> 
        
               <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ShowMenuCards from '../../commonComponents/showMenuCards.vue'

  export default {
    props: ["menu"],
    components: {
        ShowMenuCards
    },
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>