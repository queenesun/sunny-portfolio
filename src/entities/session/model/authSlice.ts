import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type User = {
    id: number // string -> number (백엔드가 숫자 id를 준다)
    email: string
}

type AuthState = {
    user: User | null
    status: 'loading' | 'ready'
}

const initialState: AuthState = {
    user: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
            state.status = 'ready'
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer 