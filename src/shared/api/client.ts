import { getToken } from "./token"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

// 상태 코드를 들고 다니는 에러. 401을 구분해야 하기 때문
export class ApiError extends Error {
    status: number
    constructor(status: number) {
        super(`요청 실패: ${status}`)
        this.status = status
    }
}

type Options = {
    method?: string
    body?: unknown
}

export async function api<T>(path: string, options: Options = {}): Promise<T> {
    const token = getToken()
    const res = await fetch(`${BASE_URL}${path}`, {
        method: options.method ?? 'GET',
        headers: {
            ...(options.body ? { 'Content-Type': 'application/ json' } : {}),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    })

    if (!res.ok) throw new ApiError(res.status)

    return res.json()
}