export async function fetchCustomers() {
  const res = await fetch("http://127.0.0.1:5000/mapping", { cache: "no-cache" });
  if (!res.ok) {
    throw new Error('ネットワークレスポンスが正常ではありません');
  }
  return res.json();
}

export async function fetchUserProfile() {
  const response = await fetch("http://127.0.0.1:5000/user_profile");
  if (!response.ok) {
    throw new Error('ネットワークレスポンスが正常ではありません');
  }
  return response.json();
}
