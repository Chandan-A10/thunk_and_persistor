import postReducer from "../slice/posts/postslice";
import cryptoReducer from "../slice/crypto/cryotoslice";
import userReducer from "../slice/user/userSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config={
    key:'root',
    storage,
    blacklist:['post']
}
const reducer=combineReducers({
    post:postReducer,
    users:userReducer,
    crypto:cryptoReducer
})

const persistor=persistReducer(config,reducer)


export default persistor