// import getAllKitchenListApi from "@/Api/kitchenAdminApi/kitchenAdminApi";
import getAllTiffinListApi from "@/Api/userApi/tiffinApi";
import router from "@/Routes";

const userTiffinState = {
    state() {
        return {
            tiffinList: []
        }
    },
    getters: {
        // getActiveKitchenId(state) {
        //     return state.activeKitchen.id;
        // },
        // getActiveKitchenName(state) {
        //   return state.activeKitchen.name;
        // },
        // getActiveTab(state) {
        //     return state.activeTab
        // },
        getTiffinList(state) {
            return state.tiffinList;
        },
    },
    mutations: {
        // setActiveKitchen(state, obj) {
        //     state.activeKitchen = obj
        // },
        // setActiveTab(state, item) {
        //     state.activeTab = item
        // },
        setTiffinList(state, payload) {
          state.tiffinList = payload.tiffins
        }
    },
    actions: {
      async getAllTiffinListAction(context, payload) {
        try {
         const tiffins =  await getAllTiffinListApi(payload.data);
         console.log(tiffins)
          
          context.commit('setTiffinList', {tiffins: tiffins.data.data});
        //   context.commit('setActiveKitchen', tiffins.data.data.length>0? tiffins.data.data[0]: {}); 
        }catch(err) {
          console.log(err.response)
          if(err.response.data.status == 402)
            router.replace('/signin')
          console.log("error from getAlltiffins action", err);
        }
      }
    }
}

export default userTiffinState