'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { User } from '@/types'; // User型をインポート
import UserDetail from './UserDetail';

// MappingProps型の定義
type MappingProps = {
  users: User[]; // User型の配列を受け取る
};

// Mappingコンポーネントの定義
const Mapping: React.FC<MappingProps> = ({ users }) => {
  // SVG要素を参照するためのrefオブジェクト
  const d3Container = useRef(null);
  // 選択されたユーザーを状態として持つ
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // コンポーネントがマウントされた後に一度だけ実行されるEffect
  useEffect(() => {
    // ユーザーが存在し、refが割り当てられていれば実行
    if (users.length > 0 && d3Container.current) {
      // SVG要素を選択
      const svg = d3.select(d3Container.current);
      // 既存のSVG要素を全て削除
      svg.selectAll("*").remove();

      // SVG内にdefsタグを追加し、画像のパターンを定義
      const defs = svg.append("defs");
      users.forEach(user => {
        defs.append("pattern")
          .attr("id", `image-${user.id}`) // パターンにIDを設定
          .attr("height", "100%")
          .attr("width", "100%")
          .attr("patternContentUnits", "objectBoundingBox")
          .append("image")
          .attr("height", 1)
          .attr("width", 1)
          .attr("preserveAspectRatio", "none")
          .attr("href", `/icon/${user.occupation_attributes_image}`); // 画像のパスを設定
      });

      // SVGの幅と高さを定義
      const width = 1000;
      const height = 1000;

      // データの範囲とSVGのサイズをマッピング（D3.jsのスケール関数）
      const scale = d3.scaleLinear().domain([-3.5, 3.5]).range([0, width]);

      // ズーム機能を設定するzoom関数を定義
      const zoom = d3.zoom().scaleExtent([0, 8]).on("zoom", zoomed);
      // SVGのビューボックスを設定し、ズーム機能を適用
      svg.attr('viewBox', `0 0 ${width} ${height}`)
         .style('width', '100%')
         .style('height', 'auto')
         .call(zoom);

      // SVG内にグループ要素を追加して、ズーム機能のためのビューを作成
      const view = svg.append("g").attr("class", "view");

      // ユーザーのデータを基に、円とテキストをSVGに追加
      users.forEach(user => {
        view.append('circle')
            .attr('cx', scale(user.user_x_grid))
            .attr('cy', scale(user.user_y_grid))
            .attr('r', 25)
            .attr('fill', `url(#image-${user.id})`) // パターンを塗りつぶしに使用
            .attr('stroke', `${user.status_color}`) // 枠線の色を設定
            .attr('stroke-width', 3) // 枠線の幅を設定
            .on('click', () => setSelectedUser(user)); // クリックイベントを設定

        view.append('text')
            .attr('x', scale(user.user_x_grid))
            .attr('y', scale(user.user_y_grid))
            .attr('dy', '3.2em') // テキストの位置調整
            .style('text-anchor', 'middle')
            .style('fill', 'white')
            .style('font-family', 'sans-serif')
            .style('font-size', '10px')
            .text(user.user_name); // ユーザー名を表示
      });

      // ズームイベント時にビューを更新する関数
      function zoomed(event) {
        view.attr("transform", event.transform); // ズーム状態に応じた変形を適用
      }
    }
  }, [users]); // 依存配列：usersが変わった時にEffectを再実行

  // コンポーネントがレンダリングする内容
  return (
    <div>
      <svg className='px-3' ref={d3Container}></svg>
      {selectedUser && <UserDetail user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default Mapping;
