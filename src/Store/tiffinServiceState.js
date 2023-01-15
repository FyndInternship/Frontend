import addMenuApi from "@/Api/kitchenAdminApi/addMenuApi";
import addNewKitchenApi from "@/Api/kitchenAdminApi/addNewKitchenApi";
import getAllKitchenListApi from "@/Api/kitchenAdminApi/kitchenAdminApi";
import openErrorNotification from "@/commonComponents/openNotification";
// import router from "@/Routes";

const tifinServiceState = {
    state() {
        return {
            loadingAdminKitchenList: false,
            activeKitchen:{},
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
        },
        getLoadingAdminKitchenList(state) {
          return state.loadingAdminKitchenList
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
        },
        setLoadingAdminKitchenList(state, value) {
          state.loadingAdminKitchenList = value
        },
        resetTiffinServiceState(state) {
          state.loadingAdminKitchenList= false,
          state.activeKitchen = {}
          state.activeKitchenFinal= {},
          state.activeTab= "",
          state.kitchenList= []
        }
    },
    actions: {
      async getAllKitchListAction(context) {
        try {
          context.commit('setLoadingAdminKitchenList', true)
          const kitchens =  await getAllKitchenListApi();

          context.commit('setKitchenList', {kitchens: kitchens.data.data});
          context.commit('setActiveKitchen', kitchens.data.data.length>0? kitchens.data.data[0]: {});
          context.commit('setLoadingAdminKitchenList', false)

        }catch(err) {
          console.log(err.response)
          openErrorNotification({err, place: "Get all Kitchen List admin"})
          // if(err.response.data.status == 402)
          //   router.replace('/signin')
          console.log("error from getAllKitchens action", err);
          context.commit('setLoadingAdminKitchenList', false)

        }
      },
      async addNewKitchenAction(context, payload) {
        try {
          await addNewKitchenApi(payload.data);
          context.dispatch('getAllKitchListAction')

        } catch(err) {
            console.log(err)
            openErrorNotification({err, place: "adding new kitchen"})
            // if(err.response.data.status == 402)
            // router.replace('/signin')
        }
      },
      async addMenuItem(context, payload) {
        try {
            const {data} = payload
            await addMenuApi(data);
        } catch(err) {
          console.log(err)
          openErrorNotification({err, place: "adding menu item"})
        }
      }
    }
}

export default tifinServiceState