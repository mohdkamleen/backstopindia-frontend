import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'; 
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>
		<Provider store={store}> 
			<App />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
			/>
		</Provider>
	</React.StrictMode>
);