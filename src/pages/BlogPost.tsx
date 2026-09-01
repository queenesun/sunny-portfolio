import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import { api } from "../shared/api/client"
import type { PostDetail } from "../entities/post/model/types"

export default function BlogPost() {
    const { slug } = useParams() // 객체로 넘어오는 것들 중 슬러그만 빼서 사용
    const [content, setContent] = useState('')

    useEffect(() => {
        api<PostDetail>(`/api/posts/${slug}`)
            .then(post => setContent(post.content))
            .catch(() => setContent('글을 찾을 수 없습니다.'))
    }, [slug]) // 의존성 배열 (slug값이 바뀔 때마다 함수 실행됨)

    return (
        <>
            <h1>Blog</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}