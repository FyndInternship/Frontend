// import getAllKitchenListApi from "@/Api/kitchenAdminApi/kitchenAdminApi";
import getAllTiffinListApi from "@/Api/userApi/tiffinApi";
import openErrorNotification from "@/commonComponents/openNotification";
// import router from "@/Routes";

const userTiffinState = {
    state() {
        return {
            searchTiffinLoad: false,
            tiffinList: []
        }
    },
    getters: {
        getTiffinList(state) {
            return state.tiffinList;
        },
        getSearchTiffinLoad(state) {
          return state.searchTiffinLoad;
        }
    },
    mutations: {
        setTiffinList(state, payload) {
          state.tiffinList = payload.tiffins
        },
        resetUserTiffinState(state) {
          state.tiffinList= []
        },
        mutateSearchTiffinLoad(state, value) {
          state.seachTiffinLoad = value
        }

    },
    actions: {
      async getAllTiffinListAction(context, payload) {
        try {
        context.commit('mutateSearchTiffinLoad', true)  
        const tiffins =  await getAllTiffinListApi(payload.data);          
        context.commit('setTiffinList', {tiffins: tiffins.data.data});
        context.commit('mutateSearchTiffinLoad', false)

        }catch(err) {
          console.log(err.response)
          openErrorNotification({err, place:"tiffinlist"})
        context.commit('mutateSearchTiffinLoad', false)

          // if(err.response.data.status == 402)
          //   router.replace('/signin')
        }
      }
    }
}

export default userTiffinState