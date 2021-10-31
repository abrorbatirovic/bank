import {configureStore} from '@reduxjs/toolkit'
import income from "./income/income";
export default configureStore({
    reducer: {
        income
    }
})