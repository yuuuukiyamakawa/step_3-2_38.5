import Mapping from "./components/Mapping";
import {fetchCustomers} from "@/fetchCustomer";

export default async function Home() {
  const users = await fetchCustomers(); // fetchCustomersを使用
  // console.log(users); // コンソールでユーザーデータを確認

  return (
    <div className='md:flex'>
      <section className='w-full flex-col items-center'>
        <Mapping users={users} />
      </section>
    </div>
  );
}
