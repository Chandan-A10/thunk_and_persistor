import {configureStore} from '@reduxjs/toolkit'
import  persistreducer from './rootreducer'

const store=configureStore({
    reducer:persistreducer,
})
export default store