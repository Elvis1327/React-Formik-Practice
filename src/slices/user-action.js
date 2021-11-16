import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUser = () => {
    return async (dispatch) => {
        try{
            const { data } = await axios.get('https://reqres.in/api/users?page=2');
            dispatch(setUserList(data.data));
        }catch(err){
            console.log(err)
        } 
    };
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
        list: []
    },
    reducers: {
        loginUser: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        },
        setUserList: (state, action) => {
            return {
                ...state,
                list: action.payload
            }
        }
    }
});
export const { loginUser, logout, setUserList } = userSlice.actions;
export default userSlice.reducer;




