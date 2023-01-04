// import axios_backend from "@/Utils/axios_utils";
// import axios from "axios";
import { axios_backend } from "@/Utils/axios_utils";
import FormData from "form-data";
const addMenuApi = (data) => {
        console.log(data)
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', data.image)

        // let Data = JSON.stringify(data);

        // console.log(Data)

      let config = {
        method: 'post',
        url: `admin/addItem/${data.tiffinId}`,
        withCredentials: true,
        headers: { 
            'Content-Type': 'multipart/form-data'
                },
        data: formData
      };



     return axios_backend(config)
   
      
      
}

export default addMenuApi;