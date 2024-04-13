// 'use client';  // client-sideでレンダリングすると、OSやパソコンのスペックでレンダリング速度が変わる。データとAPIの近さもserver-sideの方が近いので、レスポンスが早い。

import Mapping from "@/app/components/Mapping";
import { getAllUsers } from "@/API";

export default async function Home() {
  const users = await getAllUsers();
  // console.log(users); // server-sideレンダリングなので、F12ではなく、コンソールで確認

  return(
    <div className='md:flex'>
      <section className='w-full flex-col items-center px-3'>
        <Mapping users={users} />
      </section>
    </div>
  );
}
