import axios from 'axios';  
 
export default axios.create({ 
  baseURL: "http://43.205.213.166:8000/api", //for production mode 
  headers: {
    "Content-type": "application/json"
  }
});
