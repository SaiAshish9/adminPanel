import axios from 'axios'

const instance=axios.create({
    baseURL:'https://pracify.com/api/'
})

instance.interceptors.request.use(
async (config)=>{
   const token =
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNTg2NDU1MjgwLCJleHAiOjE1ODY0NTg4ODB9.uFbJlrwNHyrEltBNYdtigXvDEDZxcaJ1ujBfUyMeJiM";
   config.headers['Content-Type']='application/json';
   if(token){
       config.headers.token=`${token}`
   }
   return config;
},
(err)=>{
    return Promise.reject(err)
}
)

export default instance

