import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, UserProfile } from '@/types'; // User型とUserProfile型をインポート
import LikeConfirm from './LikeConfirm';
import { fetchUserProfile } from '@/fetchCustomer'; // fetchUserProfile関数をインポート
import LikeSended from './LikeSended'; // これを追加
import Head from 'next/head';
import FireIcons from '@/app/FireIcons';
import RunIcons from '@/app/RunIcons';

// UserDetailPropsにUser型を含める
type UserDetailProps = {
  user: User;
  onClose: () => void;
};

const UserDetail: React.FC<UserDetailProps> = ({ user, onClose }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLikePopup, setShowLikePopup] = useState(false);
  const [likeSent, setLikeSent] = useState(false); // いいね送信状態を追加

  useEffect(() => {
    // APIを呼び出してユーザープロファイルを取得する
    const fetchProfile = async () => {
      try {
        const profileData = await fetchUserProfile();
        setUserProfile(profileData.find((p) => p.id === user.id)); // IDでユーザーを絞り込む
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [user.id]); // user.idが変わったときに再取得

  const handleLikeClick = () => {
    setShowLikePopup(true);
  };

  const handleSendLike = () => {
    // いいねを送る処理
    setLikeSent(true); // いいね送信状態をtrueに設定
    setShowLikePopup(false); // LikeConfirmポップアップを非表示に設定
  };

  const handleSendLikeWithMessage = () => {
    // メッセージ付きいいねを送る処理
    setShowLikePopup(false);
  };

  return (
    <div className='bg-white text-[#474747] my-4 pb-1 font-zenkaku rounded-lg pb-12'>
      <div className='flex justify-end'>
        <button onClick={onClose} className='text-[#474747] mr-2 mt-1 text-3xl'>×</button>
      </div>
      <div className=''>
        <div className='py-2'>
          <div className='mx-6'>
            <p className='text-2xl mb-2 font-bold'>{userProfile?.user_name}</p>
            <div className='flex items-center text-sm'>
              {user.login_status === 'オンライン' ? (
                <i className="text-[#63E941]">●</i>
              ) : user.login_status === 'ログアウトから1日以内' ? (
                <i className="text-[#FFE03D]">●</i>
              ) : (
                <i className="text-[#C3C3C3]">●</i>
              )}
              <p className='text-sm'>{user.login_status}</p>
            </div>
          </div>
        </div>
        <div className='py-2 border-t border-b font-bold'>
          {/* <div className='my-2 mx-6'>
            <p className='text-[#44AFFF] text-xs'>興味のある分野</p>
            <p className='text-lg'>{userProfile?.spend_time}</p>
          </div> */}
          <div className='my-2 mx-6'>
            <p className='text-xs'>やりたいこと</p>
            <p className='text-lg text-[#FF7251]'>{userProfile?.want}</p>
          </div>

          <div className='flex mx-6 justify-between my-2'>
            <div className='text-left flex-1'>
              <p className='text-xs'>いつまでに実現したいか</p>
              <div className="mx-auto my-2">
                <FireIcons rating={userProfile?.by_when_id} /> {/* 3.5という評価を表示 */}
              </div>
              <p className='text-sm ml-12'>{userProfile?.by_when}</p>
            </div>
            <div className='text-left flex-1'>
              <p className='text-xs'>活動に使いたい時間</p>
              <div className="mx-auto my-2">
                <RunIcons rating={userProfile?.spend_time_id} /> {/* 3.5という評価を表示 */}
              </div>
              <p className='text-sm ml-12'>{userProfile?.spend_time}</p>
            </div>
          </div>
        </div>

        <div className='mx-6 py-2 border-b font-bold flex'>
          <div className='mr-6 text-center text-xs'>
            <p className='py-3 min-w-[75px]'>職種タイプ</p>
            <Image
              src={`/icon/${user.occupation_attributes_image}`} // userから適切な画像を取得
              alt={user.user_name
              }
              width={75}
              height={75}
              className="rounded-full"/>
            <p className='py-3'>{user.occupation_attributes_name}</p>
          </div>
          <div>
            <div className='flex py-3'>
              <p className='text-xs flex-shrink-0 min-w-[75px]'>業種</p>
              <p className='text-[#44AFFF] text-xs'>{userProfile?.industry}</p>
            </div>
            <div className='flex py-3'>
              <p className='text-xs flex-shrink-0 min-w-[75px]'>職種</p>
              <p className='text-[#44AFFF] text-xs'>{userProfile?.occupation}</p>
            </div>
            {/* <div className='flex py-3'>
              <p className='text-[#44AFFF] text-xs flex-shrink-0 min-w-[75px]'>得意なこと</p>
              <p className='text-xs'>{userProfile?.}</p>
            </div> */}
            <div className='flex py-3'>
              <p className='text-xs flex-shrink-0 min-w-[75px]'>スキル</p>
              <p className='text-[#44AFFF] text-xs'>{userProfile?.skill}</p>
            </div>
            <div className='flex py-3'>
              <p className='text-xs flex-shrink-0 min-w-[75px]'>資格</p>
              <p className='text-[#44AFFF] text-xs'>{userProfile?.certification}</p>
            </div>
            <div className='flex py-3'>
              <p className='text-xs flex-shrink-0 min-w-[75px]'>職歴</p>
              <p className='text-[#44AFFF] text-xs'>{userProfile?.career}</p>
            </div>
          </div>
        </div>

        <div className='py-2 border-b'>
          <div className='mx-6'>
            <p className='text-xl mb-2 font-bold'>自己紹介</p>
            {/* <div className='flex py-3'>
              <p className='text-xs flex-shrink-0 min-w-[150px]'>大切にしている価値観</p>
              <p className='text-[#44AFFF] text-xs font-bold'>{userProfile?.}</p>
            </div> */}
            <p className='text-xs'>{userProfile?.self_introduction}</p>
          </div>
        </div>

        <div className='py-2'>
          <div className='mx-6'>
            <p className='text-xl mb-2 font-bold'>基本情報</p>
            <div className='flex py-3'>
              <p className='text-[#44AFFF] text-xs flex-shrink-0 min-w-[75px]'>性別</p>
              <p className='text-xs'>{userProfile?.sex_name}</p>
            </div>
            <div className='flex py-3'>
              <p className='text-[#44AFFF] text-xs flex-shrink-0 min-w-[75px]'>年齢</p>
              <p className='text-xs'>{userProfile?.age}</p>
            </div>
            <div className='flex py-3'>
              <p className='text-[#44AFFF] text-xs flex-shrink-0 min-w-[75px]'>居住地</p>
              <p className='text-xs'>{userProfile?.living_place_name}</p>
            </div>
            <div className='flex py-3'>
              <p className='text-[#44AFFF] text-xs flex-shrink-0 min-w-[75px]'>出身地</p>
              <p className='text-xs'>{userProfile?.birth_place_name}</p>
            </div>
          </div>
        </div>
      </div>


      {!showLikePopup && !likeSent && ( //showLikePopupがfalseの時のみいいねボタンを表示
        <button className="fixed left-1/2 bottom-16 z-10 w-[320px] h-11 -translate-x-1/2 text-white bg-[#44AFFF] rounded-full" onClick={handleLikeClick}>いいね！</button>
      )}
      {showLikePopup && (
        <LikeConfirm
          user={user} // LikeConfirmにuserプロパティを渡す
          onSendLike={handleSendLike}
          onSendLikeWithMessage={handleSendLikeWithMessage}
          onClose={() => setShowLikePopup(false)}
        />
      )}
      {likeSent && userProfile && (
        <LikeSended
          user={user} // User型のデータを渡す
          onClose={() => setLikeSent(false)} // onCloseハンドラーを渡す
        />
      )}
    </div>
  );
};

export default UserDetail;
