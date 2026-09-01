import type { Session } from "@supabase/supabase-js";
import { useEffect } from "react";
import { setUser } from "../entities/session/model/authSlice";
import { supabase } from "../shared/api/supabase";
import { useAppDispatch } from "./hooks";

function pickUser(session: Session | null) {
    if (!session) return null
    return {
        id: session.user.id,
        email: session.user.email ?? ''
    }
}

export default function AuthListener() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // 앱이 켜질 때 한 번 - 지금 로그인 상태가 뭔지 물어본다
        supabase.auth.getSession()
            .then(({ data }) => {
                dispatch(setUser(pickUser(data.session)))
            })

        // 그 뒤로는 바뀔 때마다 알려달라고 구독해준다.
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                dispatch(setUser(pickUser(session)))
            }
        )

        return () => listener.subscription.unsubscribe()
    }, [dispatch])

    return null
}