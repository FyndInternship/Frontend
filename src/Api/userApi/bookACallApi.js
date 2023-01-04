import { axios_backend } from "@/Utils/axios_utils";

const bookCallApi = (data) => {

      let config = {
        method: 'post',
        url: `user/requestCall/${data}`,
        withCredentials: true,
      };
     return axios_backend(config)
              
}

export default bookCallApi;