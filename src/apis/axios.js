import axios from 'axios'; 
// const https = require('https')

// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });
 
export default axios.create({ 
  baseURL: "https://easy-blue-indri-cap.cyclic.app/api", //for production mode
  httpsAgent:false,
  headers: {
    "Content-type": "application/json"
  }
});
