// import axios_backend from "@/Utils/axios_utils";
// import axios from "axios";
import { axios_backend } from "@/Utils/axios_utils";

const addNewKitchenApi = (data) => {
        console.log(data)
        let Data = JSON.stringify(data);

        console.log(Data)

      let config = {
        method: 'post',
        url: 'admin/createTiffin',
        data : Data,
        withCredentials: true,
        headers: { 
            'Content-Type': 'application/json',
        }
      };



     return axios_backend(config)
   
      
      
}

export default addNewKitchenApi;