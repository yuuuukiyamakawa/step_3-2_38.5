import React from 'react';

type LikeConfirmProps = {
  onSendLike: () => void;
  onSendLikeWithMessage: () => void;
  onClose: () => void;
};

const LikeConfirm: React.FC<LikeConfirmProps> = ({
  onSendLike,
  onSendLikeWithMessage,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h4 className="font-bold mb-4">いいねをおくりますか？</h4>
        <div className="space-x-4">
          <button className="bg-[#44AFFF] text-white rounded-full px-8 py-2 my-3" onClick={onSendLike}>いいねをおくる</button>
          <button className="bg-[#44AFFF] text-white rounded-full px-8 py-2 my-3" onClick={onSendLikeWithMessage}>メッセージ付きいいねをおくる</button>
        </div>
        <button className="text-[#474747] mt-4" onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
};

export default LikeConfirm;
