import addNewKitchenApi from "@/Api/kitchenAdminApi/addNewKitchenApi";
import getAllKitchenListApi from "@/Api/kitchenAdminApi/kitchenAdminApi";
import router from "@/Routes";

const tifinServiceState = {
    state() {
        return {
            activeKitchen: {
                id: null,
                name: null
            },
            activeKitchenFinal: {},
            activeTab: "",
            kitchenList: []
        }
    },
    getters: {
        getActiveKitchenId(state) {
            return state.activeKitchen.id;
        },
        getActiveKitchenName(state) {
          return state.activeKitchen.name;
        },
        getActiveTab(state) {
            return state.activeTab
        },
        getKitchenList(state) {
            return state.kitchenList;
        },
        getActiveKitchen(state) {
          return state.activeKitchen
        },
        getActiveRequests(state) {
          return state.activeKitchen?.requests
        }
    },
    mutations: {
        setActiveKitchen(state, obj) {
            state.activeKitchen = obj
        },
        setActiveTab(state, item) {
            state.activeTab = item
        },
        setKitchenList(state, payload) {
          state.kitchenList = payload.kitchens
        }
    },
    actions: {
      async getAllKitchListAction(context) {
        try {
         const kitchens =  await getAllKitchenListApi();
         console.log(kitchens)
          
          context.commit('setKitchenList', {kitchens: kitchens.data.data});
          context.commit('setActiveKitchen', kitchens.data.data.length>0? kitchens.data.data[0]: {}); 
        }catch(err) {
          console.log(err.response)
          if(err.response.data.status == 402)
            router.replace('/signin')
          console.log("error from getAllKitchens action", err);
        }
      },
      async addNewKitchenAction(context, payload) {
        try {
          await addNewKitchenApi(payload.data);
          context.dispatch('getAllKitchListAction')

        } catch(err) {
            if(err.response.data.status == 402)
            router.replace('/signin')
        }
      }
    }
}

export default tifinServiceState