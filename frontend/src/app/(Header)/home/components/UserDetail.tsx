import React, { useState } from 'react';
import Image from 'next/image';
import { User } from '@/types'; // User型をインポート
import LikeConfirm from './LikeConfirm';

// UserDetailPropsにUser型を含める
type UserDetailProps = {
  user: User;
  onClose: () => void;
};

const UserDetail: React.FC<UserDetailProps> = ({ user, onClose }) => {
  const [showLikePopup, setShowLikePopup] = useState(false);

  const handleLikeClick = () => {
    setShowLikePopup(true);
  };

  const handleSendLike = () => {
    // いいねを送る処理
    setShowLikePopup(false);
  };

  const handleSendLikeWithMessage = () => {
    // メッセージ付きいいねを送る処理
    setShowLikePopup(false);
  };

  return (
    <div className='bg-white text-[#474747] font-zenkaku rounded-lg my-4'>
      <div className='flex justify-end'>
        <button onClick={onClose} className='text-[#474747] mr-2 mt-1 text-3xl'>×</button>
      </div>
      <h3 className="text-center text-xl font-bold">{user.user_name}</h3>
      <div className="flex justify-center my-4">
        <Image
            src={`/icon/${user.career}.png`} // 正しい画像パスを設定
            alt={user.user_name}
            width={100}
            height={100}
            className="rounded-full" />
      </div>
      <div className="text-center">
        <p>ユーザーID: {user.id}</p>
        <p>名前: {user.user_name}</p>
        <p>色ID: {"#0000ff"}</p>
      </div>
      <div className="text-center">
        <button className='text-white bg-[#44AFFF] rounded-full text-md px-8 py-2 my-3' onClick={handleLikeClick}>いいね！</button>
      </div>
      {showLikePopup && (
        <LikeConfirm
          user={user} // LikeConfirmにuserプロパティを渡す
          onSendLike={handleSendLike}
          onSendLikeWithMessage={handleSendLikeWithMessage}
          onClose={() => setShowLikePopup(false)}
        />
      )}
    </div>
  );
};

export default UserDetail;
