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
        withCredentials: true,
        crossDomain: true,
        
      };
     return axios_backend(config)
    //  .then((res) => {
    //     console.log(res)
    //  }).catch(err => {
    //     console.log(err)
    //  })
      
      
}

const signOutApi = () => {
      let config = {
        method: 'post',
        url: 'auth/signout',
        withCredentials: true,
        headers: { 
            'Content-Type': 'application/json',
        }
      };

     return axios_backend(config)   
}

const signUpApi = (data) => {
  


  let Data = JSON.stringify(data);

  console.log(Data)

let config = {
  method: 'post',
  url: 'auth/signup',
  data : Data,
  headers: { 
      'Content-Type': 'application/json',
  }
};



return axios_backend(config)



}


export default signInApi;
export {
   signOutApi,
   signUpApi
}