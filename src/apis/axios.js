import axios from 'axios';  

export default axios.create({ 
  // baseURL: "http://localhost:8000/api", //for developement mode 
  baseURL: "https://easy-blue-indri-cap.cyclic.app/api", //for production mode 
  // headers: {
  //   "Content-type": "application/json",
  // }
});
