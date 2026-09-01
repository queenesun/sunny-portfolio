import { useEffect } from "react";
import { setUser, type User } from "../entities/session/model/authSlice";
import { useAppDispatch } from "./hooks";
import { clearToken, getToken } from "../shared/api/token";
import { api } from "../shared/api/client";

export default function AuthListener() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // 1) 토큰이 없으면 물어볼 것도 없다
        if (!getToken()) {
            dispatch(setUser(null))
            return
        }

        // 2) 토큰이 있으면 서버에 "이거 누구냐"고 묻는다
        api<User>('/api/auth/me')
            .then(user => dispatch(setUser(user)))
            .catch(() => {
                // 3) 만료됐거나 잘못된 토큰 — 버린다
                clearToken()
                dispatch(setUser(null))
            })
    }, [dispatch])

    return null
}