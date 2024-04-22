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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-20 px-8" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center" onClick={e => e.stopPropagation()}>
        <div className="flex justify-center my-1 px-[100px]">
          <Image
              src={`/icon/${user.occupation_attributes_image}`} // userから適切な画像を取得
              alt={user.user_name
              }
              width={100}
              height={100}
              className="rounded-full" />
        </div>
        <h4 className="font-bold my-4">いいねを送りますか？</h4>
        <div>
          <button className="mx-auto bg-[#44AFFF] text-white rounded-full px-8 py-2 mb-3 flex" onClick={onSendLikeWithMessage}>メッセージ付きいいね！</button>
          <button className="mx-auto bg-[#44AFFF] text-white rounded-full px-8 py-2 flex" onClick={onSendLike}>いいね！</button>
        </div>
        {/* <button className="text-[#474747] mt-4" onClick={onClose}>閉じる</button> */}
      </div>
    </div>
  );
};

export default LikeConfirm;
