import React from 'react';
import { Icon } from '@iconify/react';

const RunIcons = ({ rating }) => {
  const totalIcons = 5;

  // 評価に応じた色を計算する関数
  const calculateColor = (index) => {
    if (index < rating) {
      return `text-[#FF7251]`; // 評価されたアイコンは青色
    } else {
      return `text-gray-300`; // それ以外は灰色
    }
  };

  return (
    <div className="flex">
      {[...Array(totalIcons)].map((_, index) => (
        <Icon key={index} icon="mdi-run" className={`text-3xl ${calculateColor(index + 1)}`} />
      ))}
    </div>
  );
};

export default RunIcons;