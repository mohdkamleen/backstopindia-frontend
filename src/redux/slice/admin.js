import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../apis/axios';
import { toast } from 'react-toastify';

export const authenticateUser = createAsyncThunk(
    'auth/authenticateUser',
    async (payload, { rejectWithValue }) => {
        const { method, endpoint, data } = payload;
        try {
            const res = await axios[method](`/${endpoint}`, data && { ...data });
            res.data?.message && toast.success(res.data?.message);
            return res.data;
        } catch (error) {
            if (!error.response) throw error;
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    loading: false,
    user: null
};

export const authSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(authenticateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload || null;

            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            });
    },
});
 
export const AllQuery = (data) => authenticateUser({ method: 'get', endpoint: 'admin/query', data }); 
export const AllUser = (data) => authenticateUser({ method: 'get', endpoint: 'admin/user', data }); 
export const ChangeVerified = (data) => authenticateUser({ method: 'patch', endpoint: 'admin/verified', data }); 
export const LoginAdmin = (data) => authenticateUser({ method: 'post', endpoint: 'admin/login', data }); 
export const ServicesUser = (data) => authenticateUser({ method: 'post', endpoint: 'admin/servicesUser', data }); 


// this is user function 
export const patchUser = (data) => authenticateUser({ method: 'post', endpoint: 'patchUser', data }); 
export const getCoustomer = (data) => authenticateUser({ method: 'post', endpoint: 'getCoustomer', data }); 
export const updatePayment = (data) => authenticateUser({ method: 'post', endpoint: 'updatePayment', data }); 
export default authSlice.reducer;   