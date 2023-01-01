// import axios_backend from "@/Utils/axios_utils";
// import axios from "axios";
import { axios_backend } from "@/Utils/axios_utils";

const getAllKitchenListApi = () => {


      let config = {
        method: 'get',
        url: 'admin/getAllTiffin',
        withCredentials: true
      };
     return axios_backend(config)
   
      
      
}

export default getAllKitchenListApi;