import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from '../../apis/axios'

const initialState = {
  loading : false, 
  profile: { 
    name: "",
    phone: "",
    email: ""
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    updateUser(state,action){
      state.profile = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registeUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(registeUser.fulfilled, (state, action) => {
        console.log("success");
        state.loading = false
        state.profile = action.payload?.profile 
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

export const { registerUser, updateUser } = userSlice.actions
export default userSlice.reducer