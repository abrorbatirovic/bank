import {createSlice} from "@reduxjs/toolkit";

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
            state.kassa.push({
                id: action.payload.id,
                name: action.payload.name,
            })
        },
        editKassa: (state, action) => {
            state.kassa.forEach(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                }
            })
        },
        deleteKassa: (state, action) => {
            state.kassa.forEach((item, index) => {
                state.kassa.splice(index, 1)
            })
        }

    }
})

export const {getKassa, saveKassa, editKassa, deleteKassa} = kassa.actions

export default kassa.reducer