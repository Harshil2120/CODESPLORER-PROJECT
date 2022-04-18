import Image from 'next/image'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/rocket.png' type='image/x-icon'></link>
        <meta name='twitter:card' content='About Harshil Donga' key='twcard' />
        <meta name='twitter:creator' content='@donga_harshil' key='twhandle' />
        <meta property='og:url' content='www.codesplorer.me' key='ogurl' />
        <meta property='og:image' content='/codesplore.jpg' key='ogimage' />
        <meta
          property='og:site_name'
          content='CodeSplorer.me'
          key='ogsitename'
        />
        <meta property='og:title' content='CodeSplorer | About' key='ogtitle' />
        <meta
          property='og:description'
          content='About Harshil Donga'
          key='ogdesc'
        />
        <title>CodeSplorer | About</title>
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
