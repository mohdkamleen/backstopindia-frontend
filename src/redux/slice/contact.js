import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from '../../apis/axios'

const initialState = {
  loading: false,
  name: "",
  contact: "",
  query: ""
}
 

const contactSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(contacUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(contacUser.fulfilled, (state, action) => {
        console.log("success");
        state.loading = false
      })
      .addCase(contacUser.rejected, (state, action) => {
        console.log("error");
        state.loading = false
      })
  }
})


export const contacUser = createAsyncThunk(
  "user/contact",
  async (data) => {
    try {
      const res = await axios.post('/contact', data)
      res.data?.message && toast.success(res.data?.message);
      return res.data
    } catch (error) {
      console.log(error);
    }
  }
)

export const { contactUser } = contactSlice.actions
export default contactSlice.reducer