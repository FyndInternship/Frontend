// import axios_backend from "@/Utils/axios_utils";
// import axios from "axios";
import { axios_backend } from "@/Utils/axios_utils";

const getAllTiffinListApi = (data) => {

      let config = {
        method: 'get',
        url: 'user/getAllTiffin',
        withCredentials: true,
        params: data
      };
     return axios_backend(config)
   
      
      
}

export default getAllTiffinListApi;