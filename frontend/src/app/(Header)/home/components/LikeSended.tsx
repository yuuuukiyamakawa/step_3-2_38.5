import Image from 'next/image';
import React from 'react';
import { User } from '@/types'; // 必要に応じてパスを修正してください

type LikeSendedProps = {
  user: User;
  onClose: () => void;
};

const LikeSended: React.FC<LikeSendedProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-20" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center px-[82px]" onClick={e => e.stopPropagation()}>
        <div className="flex justify-center my-1">
          <Image
              src={`/icon/${user.occupation_attributes_image}`} // User型から画像のパスを取得
              alt={user.user_name}
              width={100}
              height={100}
              className="rounded-full" />
        </div>
        <h4 className="font-bold py-11 my-4 text-xl">いいねを送りました！</h4>
      </div>
    </div>
  );
};

export default LikeSended;
