import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AuthInitialState = {
    isSignedIn: boolean
    email: string
    password: string
}

const initialState: AuthInitialState = {
    isSignedIn: false,
    email: '',
    password: '123'
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<{ email: string, password: string }>) => {
            return {...action.payload, isSignedIn: true}
        },
        signUp: (state, action: PayloadAction<{ email: string, password: string }>) => {
            return {...state, ...action.payload}
        },
        signOut: () => {
            return initialState
        }
    }
})

export const {signIn, signUp, signOut} = authSlice.actions

export const authReducer = authSlice.reducer