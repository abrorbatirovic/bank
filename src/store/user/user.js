import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

const user = createSlice({
    name: 'user',
    initialState: {
        user: [
            {id: 1, name: 'Otto'},
            {id: 2, name: 'Mark'},
            {id: 3, name: 'Jacob'},
        ]
    },
    reducers: {
        getUser: (state,action)=>{
            state.user = action.payload
        },
        saveUser: (state,action)=>{
            state.user.push({id: state.user.length + 1, ...action.payload})
            toast.success('Добавлен новый пользователь')
        },
        editUser: (state, action)=>{
            state.user.forEach(item=>{
                if(item.id === action.payload.id){
                    item.name = action.payload.name
                }
            })
            toast.success('Информация изменена')
        },
        deleteUser: (state,action)=>{
            state.user.forEach((item,index)=>{
                if(item.id === action.payload) {
                    state.user.splice(index, 1)
                }
            })
            toast.success('Данные удалены')
        }
    }
})

export const {getUser, saveUser, editUser, deleteUser} = user.actions

export default user.reducer