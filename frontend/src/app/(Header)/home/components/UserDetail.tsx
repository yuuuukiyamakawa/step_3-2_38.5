import React, { useState } from 'react';
import Image from 'next/image';
import LikeConfirm from './LikeConfirm';

// UserDetailPropsに直接User型を含める
type UserDetailProps = {
  user: {
    ID: number;
    Name: string;
    Login_icon_color: string;
    // その他のプロパティがあればここに追加します。
  };
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
      <h3 className="text-center text-xl font-bold">{user.Name}</h3>
      <div className="flex justify-center my-4">
        <Image
            // src={`/icon/${user.Login_icon_color}`} // user.image_idに後程修正
            src="/icon/img1.png"
            alt={user.Name}
            width={100}
            height={100}
            className="rounded-full" />
      </div>
      <div className="text-center">
        <p>ユーザーID: {user.ID}</p>
        <p>名前: {user.Name}</p>
        <p>色ID: {user.Login_icon_color}</p>
      </div>
      <div className="text-center">
        <button className='text-white bg-[#44AFFF] rounded-full text-md px-8 py-2 my-3' onClick={handleLikeClick}>いいね！</button>
      </div>
      {showLikePopup && (
        <LikeConfirm
          onSendLike={handleSendLike}
          onSendLikeWithMessage={handleSendLikeWithMessage}
          onClose={() => setShowLikePopup(false)} />
      )}
    </div>
  );
};

export default UserDetail;
