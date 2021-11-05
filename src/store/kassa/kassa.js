import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

const kassa = createSlice({
    name: 'kassa',
    initialState: {
        kassa: [
            {id: 1, name: 'kassa1'},
            {id: 2, name: 'kassa2'},
            {id: 3, name: 'kassa3'},
        ]
    },
    reducers: {
        getKassa: (state, action) => {
            state.kassa = action.payload
        },
        saveKassa: (state, action) => {
            state.kassa.push({id: state.kassa.length + 1, ...action.payload})
            toast.success('Добавлено новый кассовый аппарат')
        },
        editKassa: (state, action) => {
            state.kassa.forEach(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                }
            })
            toast.success('Информация изменена')
        },
        deleteKassa: (state, action) => {
            state.kassa.forEach((item, index) => {
                if(item.id === action.payload){
                    state.kassa.splice(index, 1)
                }
            })
            toast.success('Данные удалены')
        }

    }
})

export const {getKassa, saveKassa, editKassa, deleteKassa} = kassa.actions

export default kassa.reducer