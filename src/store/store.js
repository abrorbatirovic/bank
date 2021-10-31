import {configureStore} from '@reduxjs/toolkit'
import income from "./income/income";
import expense from "./expense/expense";
import user from './user/user';
import kassa from './kassa/kassa'
export default configureStore({
    reducer: {
        income,
        expense,
        user,
        kassa
    }
})