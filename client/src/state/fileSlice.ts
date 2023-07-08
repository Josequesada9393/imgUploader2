import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface File {
    fileURL: String,
    loading: Boolean
}

const initialState: File = {
    fileURL: '',
    loading: false
  }


const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile: (state, action:PayloadAction<String>) => {
    state.fileURL = action.payload
    },
    loading: (state, action:PayloadAction<Boolean>) => {
        state.loading = action.payload
    }
  }
})

export const {addFile, loading} = fileSlice.actions
export default fileSlice.reducer