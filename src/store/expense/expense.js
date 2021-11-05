import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-hot-toast";

const expense = createSlice({
    name: 'expense',
    initialState: {
        expense: [
            {id: 1, userId: 2, price: 1000, kassaId: 1, date: '2021-10-20', typeName: false},
            {id: 2, userId: 1, price: 1500, kassaId: 2, date: '2021-10-21', typeName: false},
            {id: 3, userId: 3, price: 2000, kassaId: 3, date: '2021-10-23', typeName: false},
        ]
    },
    reducers: {
        getExpense: (state,action)=>{
            state.expense = action.payload
        },
        saveExpense:(state,action)=>{
            state.expense.push({id: state.expense.length + 1, ...action.payload, typeName: false})
            toast.success('Расход был реализован')
        },
        editExpense: (state,action)=>{
            state.expense.forEach((item,index)=>{
                if(item.id === action.payload.id){
                    item.userId = action.payload.userId
                    item.price = action.payload.price
                    item.kassaId = action.payload.kassaId
                    item.date = action.payload.date
                }
            })
            toast.success('Информация изменена')
        },
        deleteExpense:(state,action)=>{
            state.expense.forEach((item,index)=>{
                if(item.id === action.payload){
                    state.expense.splice(index,1)
                }
            })
            toast.success('Данные удалены')
        }
    }
})

export const {getExpense, saveExpense, editExpense, deleteExpense} = expense.actions

export default expense.reducer
