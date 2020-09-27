import Axios from "axios"

 const CallApi = async (method,endpoint,data = null)=>{
    const host = "https://senada.cikupalearningcenter.com";
    const version = "api/v1";
    const api_token = localStorage.getItem('api_token')

    if(method === "get"){
        const res = await Axios.get(`${host}/${version}/${endpoint}?api_token=${api_token}`)
        try {
            return res.data 
        } catch (error) {
            console.log(error)
        }
    }else if(method === "post"){
        const res = await Axios.post(`${host}/${version}/${endpoint}?api_token=${api_token}`,data)
        try {
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default CallApi