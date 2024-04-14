// frontend>src>app>(Header)>home>page.tsx

import Mapping from "./components/Mapping";
import fetchCustomers from "@/fetchCustomer"; // getAllUsersの代わりにfetchCustomersをインポート

export default async function Home() {
  const users = await fetchCustomers(); // fetchCustomersを使用
  // console.log(users); // コンソールでユーザーデータを確認

  return (
    <div className='md:flex'>
      <section className='w-full flex-col items-center px-3'>
        <Mapping users={users} />
      </section>
    </div>
  );
}
