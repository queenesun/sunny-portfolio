import { api } from "../../../shared/api/client";
import type { Post } from "../model/types";

export async function getPosts(): Promise<Post[]> {
    return api<Post[]>('/api/posts')
    
}