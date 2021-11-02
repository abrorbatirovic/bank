import {createSlice} from '@reduxjs/toolkit'

const income = createSlice({
    name: 'income',
    initialState: {
        income: [
            {id: 1, userId: 1, price: 1000, kassaId: 2, date: '21.10.2021'},
            {id: 2, userId: 2, price: 1500, kassaId: 1, date: '22.10.2021'},
            {id: 3, userId: 1, price: 2000, kassaId: 3, date: '25.10.2021'},
            {id: 4, userId: 3, price: 2000, kassaId: 1, date: '25.10.2021'},
            {id: 5, userId: 2, price: 2000, kassaId: 1, date: '25.10.2021'},
        ]
    },
    reducers: {
        getIncome: (state, action) => {
            state.income = action.payload
        },
        saveIncome: (state, action) => {
            state.income.push({
                id: state.income.length + 1,
                userId: action.payload.userId,
                price: action.payload.price,
                kassaId: action.payload.kassaId,
                date: action.payload.date
            })
        },
        editIncome: (state, action) => {
            state.income.forEach(item => {
                if (item.id === action.payload.id) {
                    item.userId = action.payload.userId
                    item.price = action.payload.price
                    item.kassaId = action.payload.kassaId
                    item.date = action.payload.date
                }
            })
        },
        deleteIncome: (state, action) => {
            state.income.forEach((item, index) => {
                if (item.id === action.payload) {
                    state.income.splice(index, 1)
                }
            })
        }
    }
})

export const {getIncome, saveIncome, editIncome, deleteIncome} = income.actions

export default income.reducer
