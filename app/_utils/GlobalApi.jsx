const { default: axios } = require("axios");

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClint=axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        "Authorization" : `Bearer ${API_KEY}`
    }
})

const getCategory=()=>axiosClint.get('/categories?populate=*')
const getDoctorList=()=>axiosClint.get('/doctors?populate=*')

export default{
    getCategory,
    getDoctorList
}