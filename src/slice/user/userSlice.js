import {createSlice} from '@reduxjs/toolkit'
import {fetchuserData} from '../actions'

const initialState={
    userData:[],
    status:'idle',
    error:''
}

const userSlice=createSlice({
    name:"Users",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchuserData.pending,(state,action)=>{
                state.status='Loading...'
            })
            .addCase(fetchuserData.fulfilled,(state,action)=>{
                state.status='Finished...'
                state.userData=state.userData.concat(action.payload)
            })
            .addCase(fetchuserData,(state,action)=>{
                state.status='Rejected...'
                state.error=action.error.message
            })
    }
})
export default userSlice.reducer