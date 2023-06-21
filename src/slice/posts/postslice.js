import {createSlice} from '@reduxjs/toolkit'
import { fetchpost } from '../actions'

const initialState={
    posts:[],
    status:'idle',
    error:''
}

const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchpost.pending,(state,action)=>{
                state.status='Loading...'
            })
            .addCase(fetchpost.fulfilled,(state,action)=>{
                state.status='Finished'
                state.posts=action.payload
            })
            .addCase(fetchpost,(state,action)=>{
                state.status='Rejected'
                state.error=action.error.message
            })
    }
})

export default postsSlice.reducer