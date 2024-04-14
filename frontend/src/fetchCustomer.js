// frontend>src>fetchCustomer.js

export default async function fetchCustomers() {
    const response = await fetch('http://127.0.0.1:5000/allusers', { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('ネットワークレスポンスが正常ではありません');
    }
    return response.json();
  }