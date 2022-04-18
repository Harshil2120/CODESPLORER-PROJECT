import Image from 'next/image'
import Hearticon from './Hearticon'

const Footer = (props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-28 border-t-2 border-slate-600 border-dashed'>
        <div className='flex flex-row items-center justify-center pt-2'>
          <h1 className='m-1'>Built</h1>
          <h1 className='m-1'>with</h1>
          <Hearticon className='w-4 h-4 text-red-600' />
          <h1 className='m-1'>using</h1>
          <div className='flex flex-row items-center justify-center space-x-1'>
            <button className=' dark:bg-slate-100 bg-gray-900 text-white  dark:text-black py-[1px] px-1 rounded ml-2 mr-1'>
              Next.js
            </button>
            &
            <button className='bg-blue-500 hover: text-white py-[1px] px-1 rounded font-bold'>
              Tailwind-css
            </button>
          </div>
        </div>
        <h2 className='pb-2'>by Harshil Donga</h2>
      </div>
    </>
  )
}

export default Footer
