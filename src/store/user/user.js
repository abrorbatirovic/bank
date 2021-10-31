import {createSlice} from "@reduxjs/toolkit";

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
            state.user.push({
                id: action.payload.id,
                name: action.payload.name,
            })
        },
        editUser: (state, action)=>{
            state.user.forEach(item=>{
                if(item.id === action.payload.id){
                    item.name = action.payload.name
                }
            })
        },
        deleteUser: (state,action)=>{
            state.user.forEach((item,index)=>{
                if(item.id === action.payload.id) {
                    state.user.splice(index, 1)
                }
            })
        }
    }
})

export const {getUser, saveUser, editUser, deleteUser} = user.actions

export default user.reducer