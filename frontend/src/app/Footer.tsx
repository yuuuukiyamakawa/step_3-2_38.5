import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    // <footer className='fixed bottom-0 w-full flex justify-center items-center gap-auto py-1 bg-gray-200 border-t'>
    <footer className='fixed bottom-0 left-0 right-0 flex justify-center items-center py-1 bg-white border-t'>
    {/* // <footer className='fixed inset-x-0 bottom-0 flex justify-center items-center py-1 bg-gray-200 border-t px-4 lg:px-8'> */}
      <div className='rounded-full overflow-hidden w-12 h-12 mx-auto'>
        <Image src='/footer/earth.png' alt='Description 4' width={48} height={48} />
      </div>
      <div className='rounded-full overflow-hidden w-12 h-12 mx-auto'>
        <Image src='/footer/bell.png' alt='Description 4' width={48} height={48} />
      </div>
      <div className='rounded-full overflow-hidden w-12 h-12 mx-auto'>
        <Image src='/footer/message.png' alt='Description 4' width={48} height={48} />
      </div>
      <div className='rounded-full overflow-hidden w-12 h-12 mx-auto'>
        <Image src='/footer/user-bold.png' alt='Description 4' width={48} height={48} />
      </div>
    </footer>
  )
}

export default Footer