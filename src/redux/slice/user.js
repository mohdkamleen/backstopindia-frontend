import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from '../../apis/axios'

const initialState = {
  loading : false, 
  profile: { 
    full_name: "",
    phone: "",
    email: ""
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(registeUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(registeUser.fulfilled, (state, action) => {
        console.log("success");
        state.loading = false
      })
      .addCase(registeUser.rejected, (state, action) => {
        console.log("error");
        state.loading = false
      })
  }
})

export const registeUser = createAsyncThunk(
  "user/register",
  async (data) => {
    try {
      const res = await axios.post('/register', data)
      res.data?.message && toast.success(res.data?.message);
      return res.data
    } catch (error) {
      console.log(error);
    }
  }
)

export const { registerUser } = userSlice.actions
export default userSlice.reducer