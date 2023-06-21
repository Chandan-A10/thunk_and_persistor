import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchpost=createAsyncThunk('posts/fetchposts',async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res?.data
})

export const fetchcryptoData=createAsyncThunk('crypto/fetchcrytodata',async()=>{
    const data=await axios.get("https://data.binance.com/api/v3/ticker/24hr")
    return data?.data
})

export const fetchuserData=createAsyncThunk('post/fetchpost',async()=>{
    const data=await axios.get('https://reqres.in/api/users?page=1')
    return data?.data
})