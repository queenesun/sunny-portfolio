import type { Post } from "../../entities/post/model/types";
import { supabase } from "./supabase";

export async function getPosts(): Promise<Post[]> {
    const { data, error } = await supabase
        .from('posts')
        .select('id, slug, title, summary, created_at')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}