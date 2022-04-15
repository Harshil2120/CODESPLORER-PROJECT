import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  const email = 'harshil212@icloud.com'
  return (
    <>
      <Head>
        <title>CodeSplorer | About</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/rocket.png' type='image/x-icon'></link>
      </Head>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center w-full h-full pt-28 -z-10'>
          <Image
            src='/profile1.jpg'
            alt='profile'
            width='140px'
            height='145px'
            className='rounded-full'
          />
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            Harshil Donga
          </h3>
          <div className='text-gray-800 dark:text-gray-400'>
            Associate Software Engineer
          </div>
          <div className='text-gray-800 dark:text-gray-400'>Accenture</div>
        </div>
      </div>
      <div className=' h-[470px] w-full'></div>
    </>
  )
}
