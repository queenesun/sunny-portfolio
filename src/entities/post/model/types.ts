export interface Post {
    id: number
    slug: string
    title: string
    summary: string
    created_at: string
}

export interface PostDetail extends Post {
    content: string
}