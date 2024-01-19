import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface infoType {
    userName: string;
    birthDate: Date;
    sex: ('m' | 'f');
    lifeStyle: ('inactive' | 'usual' | 'active');
    weight: number;
    height: number;
}

interface userType {
    value: infoType
}

const initialState: userType = {
    value: {
        userName: '1',
        birthDate: new Date(2000, 1, 1),
        sex: 'm',
        lifeStyle: 'usual',
        weight: 35,
        height: 120
    }
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers:{
        updateInfo(state, action: PayloadAction<infoType>){ 
            state.value = action.payload
        },
    }
});

export const {updateInfo,  } = userInfoSlice.actions;

export const userInfo = (state: RootState) => state.userInfo.value;

export default userInfoSlice.reducer;