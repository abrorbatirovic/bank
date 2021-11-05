import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-hot-toast'
const income = createSlice({
    name: 'income',
    initialState: {
        income: [
            {id: 1, userId: 1, price: 1000, kassaId: 2, date: '2021-10-21', typeName: true},
            {id: 2, userId: 2, price: 1500, kassaId: 1, date: '2021-10-22', typeName: true},
            {id: 3, userId: 1, price: 2000, kassaId: 3, date: '2021-10-25', typeName: true},
        ]
    },
    reducers: {
        getIncome: (state, action) => {
            state.income = action.payload
        },
        saveIncome: (state, action) => {
            state.income.push({id:state.income.length + 1, ...action.payload, typeName: true})
            toast.success('Доход был реализован')
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
            toast.success('Информация изменена')
        },
        deleteIncome: (state, action) => {
            state.income.forEach((item, index) => {
                if (item.id === action.payload) {
                    state.income.splice(index, 1)
                }
            })
            toast.success('Данные удалены')
        }
    }
})

export const {getIncome, saveIncome, editIncome, deleteIncome} = income.actions

export default income.reducer
