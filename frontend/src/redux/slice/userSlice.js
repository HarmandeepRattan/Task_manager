import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    currentUser:null,
    error:null,
    loading:null
}

const userSlice =createSlice({
    name:'user',
    initialState,
    reducers :{
        signInStart:(state)=>{
            state.loading=true
            state.error=null
        },
        signInStartSuccess:(state,action)=>{
            state.loading=action.payload
            state.error=null
        },
        signInStartFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
    },
})

export const {signInStart,signInStartSuccess,signInStartFailure}=userSlice.actions
export default userSlice.reducer

