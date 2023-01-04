// import axios_backend from "@/Utils/axios_utils";
// import axios from "axios";
import { axios_backend } from "@/Utils/axios_utils";

const signInApi = (data) => { 
  console.log(data)
     data = JSON.stringify({
        "email": data.email,
        "password": data.password,
        "isServiceProvider": data.isServiceProvider
      });
      console.log(data)
    let config = {
        method: 'post',
        url: 'auth/signin',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data,
        withCredentials: true
      };
     return axios_backend(config)
    //  .then((res) => {
    //     console.log(res)
    //  }).catch(err => {
    //     console.log(err)
    //  })
      
      
}

export default signInApi;