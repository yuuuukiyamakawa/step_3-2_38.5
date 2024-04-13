import Error from "./app/error";
import { User } from "./types";

export const getAllUsers = async (): Promise<User[]> => {
    const res = await fetch (`http://localhost:3001/posts`, {cache : 'no-store'}); //SSR。更新頻度が高いため。
    
    if(!res.ok){
        throw new Error('エラーが発生しました。');
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));  // loading UI実装確認のため

    const users = await res.json();
    return users;
};