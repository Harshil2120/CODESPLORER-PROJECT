import Image from 'next/image'

const Footer = (props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-28 border-t-2 border-slate-600 border-dashed'>
        <div className='flex flex-row items-center justify-center pt-2'>
          <h1>Created with &nbsp;</h1>
          <div className='flex flex-row items-center justify-center space-x-1'>
            <div>
              <Image
                src='/nextjs-icon.png'
                alt='profile'
                width='26px'
                height='26px'
                className='rounded-full -z-10'
              />
            </div>
            <div>
              <Image
                src='/tailwindcss-icon.svg'
                alt='profile'
                width='24px'
                height='24px'
                className='rounded-full -z-10'
              />
            </div>
          </div>
          <h1>&nbsp; by Harshil Donga</h1>
        </div>
        <p className='pb-2'>No Copyrights</p>
      </div>
    </>
  )
}

export default Footer
