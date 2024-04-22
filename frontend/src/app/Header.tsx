import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header className='px-10 border-b flex flex-col justify-between item-center bg-white'>
        <div className='py-5'> {/* このdivは空のままで、上の行を空けるために使います。 */}
        </div>
        <div className='flex justify-between items-center w-full'>
            <div className='flex pr-5 pl-1 py-1 my-2 rounded-lg bg-[#44AFFF]'>
                <p className="text-[#63E941] px-3">●</p>
                <p className='text-white font-bold'>表示条件を設定</p>
            </div>
            <Image
                src={`/icon/filter.png`}
                width={40}
                height={40}
                className="rounded-full"/>
        </div>
    </header>
  )
}

export default Header