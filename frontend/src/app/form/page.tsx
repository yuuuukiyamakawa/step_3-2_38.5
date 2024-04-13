// 'use client';  // client-sideでレンダリングすると、OSやパソコンのスペックでレンダリング速度が変わる。データとAPIの近さもserver-sideの方が近いので、レスポンスが早い。

export default async function Home() {
  return(
    <div>
      <h1>test</h1>
    </div>
  );
}