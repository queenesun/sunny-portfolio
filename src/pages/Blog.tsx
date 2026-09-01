import { useQuery } from "@tanstack/react-query"
// import { getPosts } from "../shared/api/getPosts"
import { Link } from "react-router-dom"
import { getPosts } from "../entities/post/api/getPosts"

// 전역 상태 관리
// - Context API
// - Redux, Redux Toolkit
// 구현 방법 -> 로그인, 로그아웃 상태 구분
// - 로그인: id, email 

export default function Blog() {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    })

    if (isLoading) return <p>Loading..</p>
    if (error) return <p>Error: {(error as Error).message}</p>

    // 로딩 중이 아니고 에러가 안 난 경우 리턴
    return (
        <div>
            <h2>Tech Blog</h2>
            <ul>
                {posts?.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        <p>{post.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}