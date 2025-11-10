 "use server"
import axios from "axios";
 export async function findIP(ip: string) {
    
    try {
        const response = await axios.get(`https://api.ipstack.com/${ip}?access_key=e543d5f4ad05e1312e8b8b1c4e8e84fc`); 
          return {
           data:response?.data,
           status:response?.status,
           message:response?.data?.message
          }
          
     } catch (error : unknown) {
         if (axios.isAxiosError(error)) {
          return{
             data:[],
             status: error?.response?.status,
             message: error?.response?.data.message || "An error occurred"
         }   
         }
         
     }
}