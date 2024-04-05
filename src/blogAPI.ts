import Error from "./app/error";
import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch (`http://localhost:3001/posts`, {cache : 'no-store'}); //SSR。更新頻度が高いため。
    
    if(!res.ok){
        throw new Error('エラーが発生しました。');
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));  // loading UI実装確認のため

    const articles = await res.json();
    return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
    const res = await fetch (`http://localhost:3001/posts/${id}`, {
        next : { revalidate: 60 },
    }); //ISR
    
    //notFoundページ
    if (res.status === 404) {
        notFound();
    }

    if (!res.ok) {
        throw new Error('エラーが発生しました。');
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));  // loading UI実装確認のため

    const article = await res.json();
    return article;
};