// import getAllKitchenListApi from "@/Api/kitchenAdminApi/kitchenAdminApi";
import getAllTiffinListApi from "@/Api/userApi/tiffinApi";
import openErrorNotification from "@/commonComponents/openNotification";
// import router from "@/Routes";

const userTiffinState = {
    state() {
        return {
            tiffinList: []
        }
    },
    getters: {
        getTiffinList(state) {
            return state.tiffinList;
        },
    },
    mutations: {
        setTiffinList(state, payload) {
          state.tiffinList = payload.tiffins
        },
        resetUserTiffinState(state) {
          state.tiffinList= []
        }

    },
    actions: {
      async getAllTiffinListAction(context, payload) {
        try {
        const tiffins =  await getAllTiffinListApi(payload.data);          
        context.commit('setTiffinList', {tiffins: tiffins.data.data});
        }catch(err) {
          console.log(err.response)
          openErrorNotification({err, place:"tiffinlist"})
          // if(err.response.data.status == 402)
          //   router.replace('/signin')
        }
      }
    }
}

export default userTiffinState