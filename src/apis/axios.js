import axios from 'axios'; 
// const https = require('https')

// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });
 
export default axios.create({ 
  baseURL: "http://43.205.213.166:8000/api", //for production mode
  httpAgent:false,
  headers: {
    "Content-type": "application/json"
  }
});
