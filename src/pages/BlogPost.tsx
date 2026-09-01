import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'

export default function BlogPost() {
    const { slug } = useParams() // 객체로 넘어오는 것들 중 슬러그만 빼서 사용
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(`/posts/${slug}.md`)
            .then(res => res.text())
            .then(con => setContent(con))
    }, [slug]) // 의존성 배열 (slug값이 바뀔 때마다 함수 실행됨)

    return (
        <div>
            <h2>블로그 화면</h2>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}