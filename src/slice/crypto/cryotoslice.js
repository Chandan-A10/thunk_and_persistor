import { createSlice } from "@reduxjs/toolkit";
import {fetchcryptoData} from '../actions'

const initialState={
    cryptoData:[],
    status:'idle',
    error:""
}

const Crypto=createSlice({
    name:'Cryto',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchcryptoData.pending,(state,action)=>{
                state.status='Loading...'
            })
            .addCase(fetchcryptoData.fulfilled,(state,action)=>{
                state.status='Finished...'
                state.cryptoData=action.payload
            })
            .addCase(fetchcryptoData.rejected,(state,action)=>{
                state.status='Rejected...'
                state.error=action.error.message
            })
    }
})

export default Crypto.reducer