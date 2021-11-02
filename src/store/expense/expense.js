import {createSlice} from '@reduxjs/toolkit'

const expense = createSlice({
    name: 'expense',
    initialState: {
        expense: [
            {id: 1, userId: 2, price: 1000, kassaId: 1, date: '20.10.2021'},
            {id: 2, userId: 1, price: 1500, kassaId: 2, date: '21.10.2021'},
            {id: 3, userId: 3, price: 2000, kassaId: 3, date: '23.10.2021'},
        ]
    },
    reducers: {
        getExpense: (state,action)=>{
            state.expense = action.payload
        },
        saveExpense:(state,action)=>{
            state.expense.push({
                id: state.expense.length + 1,
                userId: action.payload.userId,
                price: action.payload.price,
                kassaId: action.payload.kassaId,
                date: action.payload.date
            })
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
        },
        deleteExpense:(state,action)=>{
            state.expense.forEach((item,index)=>{
                if(item.id === action.payload){
                    state.expense.splice(index,1)
                }
            })
        }
    }
})

export const {getExpense, saveExpense, editExpense, deleteExpense} = expense.actions

export default expense.reducer
