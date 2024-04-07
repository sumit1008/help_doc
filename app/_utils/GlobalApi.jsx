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
const getDoctorByCategory=(category)=>axiosClint.get('doctors?filters[categories][Name][$in]='+category+"&populate=*")
const getDoctorById=(id)=>axiosClint.get('/doctors/'+id+'?populate=*')
const bookAppointment=(data)=>axiosClint.post('/appointments',data);
const sendEmail=(data)=>axios.post('/api/sendEmail',data);
const getUserBookingList=(userEmail)=>axiosClint.get("/appointments?[filters][Email][$eq]="+userEmail+"&populate[doctors][populate][image][populate][0]=url&populate=*")
const deleteBooking=(id)=>axiosClint.delete('/appointments/'+id)

export default{
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    bookAppointment,
    sendEmail,
    getUserBookingList,
    deleteBooking
}