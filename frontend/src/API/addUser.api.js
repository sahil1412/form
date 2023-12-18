import axios from 'axios';

// let baseUrl = 'https://formbackend-0005.onrender.com';
let baseUrl = 'http://localhost:4000'

const apiCollections ={
    addUser : async function(data)
    {
        const message = await axios.post(`${baseUrl}/add`,data);
        return message;
    },

    makePayment : async function(data){
        console.log(data);
        const message = await axios.post(`${baseUrl}/payment`,data);
        return message;
    }
}

export default apiCollections;