import React from 'react';
import Image from 'next/image';
import { User } from '@/types'; // User型をインポート

type LikeConfirmProps = {
  user: User; // LikeConfirmPropsにuserプロパティを追加
  onSendLike: () => void;
  onSendLikeWithMessage: () => void;
  onClose: () => void;
};

const LikeConfirm: React.FC<LikeConfirmProps> = ({
  user, // userプロパティを受け取る
  onSendLike,
  onSendLikeWithMessage,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center my-1">
          <Image
              src={`/icon/img${user.Occupation_image}.png`} // userから適切な画像を取得
              alt={user.Name}
              width={100}
              height={100}
              className="rounded-full" />
        </div>
        <h4 className="font-bold mb-4">いいねを送りますか？</h4>
        <div className="space-x-4">
          <button className="bg-[#44AFFF] text-white rounded-full px-8 py-2 my-3" onClick={onSendLike}>いいねを送る</button>
          <button className="bg-[#44AFFF] text-white rounded-full px-8 py-2 my-3" onClick={onSendLikeWithMessage}>メッセージ付きいいねを送る</button>
        </div>
        <button className="text-[#474747] mt-4" onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
};

export default LikeConfirm;
