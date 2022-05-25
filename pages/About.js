import Image from 'next/image'
import Head from 'next/head'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

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
      <div className='divide-y pt-24 px-14'>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8'>
            <Image
              src='/profile1.jpg'
              alt='profile'
              width='200px'
              height='205px'
              placeholder='blur'
              className=' rounded-md shadow-lg'
              blurDataURL={rgbDataURL(204, 0, 255)}
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
              Harshil Donga
            </h3>
            <div className='text-gray-500 dark:text-gray-400'>
              Associate Software Engineer
            </div>
            <div className='text-gray-500 dark:text-gray-400'>Accenture</div>
            <div className='flex space-x-3 pt-6'>
              <a
                href='https://www.linkedin.com/in/harshil-donga-hd212/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='-z-10'>
                  <Image
                    src='/linkedin.svg'
                    alt='Linkedin'
                    width={40}
                    height={40}
                    priority
                    className='hover:opacity-[.85] transition-all duration-150 shadow'
                  />
                </div>
              </a>
              <a
                href='https://github.com/Harshil2120'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='-z-10'>
                  <Image
                    src='/github.svg'
                    alt='Github'
                    width={40}
                    height={40}
                    priority
                    className='hover:opacity-[.85] transition-all duration-150 shadow'
                  />
                </div>
              </a>
              <a
                href='https://twitter.com/donga_harshil'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='-z-10'>
                  <Image
                    src='/twitter.svg'
                    alt='Github'
                    width={40}
                    height={40}
                    priority
                    className='hover:opacity-[.85] transition-all duration-150 shadow'
                  />
                </div>
              </a>
            </div>
          </div>
          <div className='prose max-w-5xl pt-8 pb-8 dark:prose-dark xl:col-span-2'>
            <h1 className='text-3xl text-center md:text-justify xl:text-3xl py-1 font-extrabold lg:text-3xl '>
              <span>Hello! I&apos;m Harshil 👋</span>
            </h1>
            <h3 className='text-xl xl:text-xl text-justify md:text-justify lg:text-xl py-1 font-bold '>
              <span>
                Welcome to Codesplorer.me! This website is about showcasing my
                profile, portfolio and blog posts about some interesting things
                that i learn. I&apos;m currently working as Associate Software
                Engineer at Accenture under Java domain and aspire to become
                Full-Stack Developer.
              </span>
            </h3>
            <h2 className='text-2xl font-extrabold pt-8 pb-4'>
              Front-End Skills
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t-2 border-dashed border-black dark:border-white'>
              <button className='shadow bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent rounded'>
                HTML
              </button>
              <button className='shadow bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                CSS
              </button>
              <button className='shadow bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded'>
                JAVASCRIPT
              </button>
              <button className='shadow bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded'>
                TAILWIND-CSS
              </button>
              <button className='shadow bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>
                BOOTSTRAP
              </button>
              <button className='shadow bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>
                THYMELEAF
              </button>
            </div>
            <h2 className='text-2xl font-extrabold pt-2 pb-4'>
              Back-End Skills
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t-2 border-dashed border-black dark:border-white'>
              <button className='shadow bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>
                JAVA
              </button>
              <button className='shadow bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500  hover:border-transparent rounded'>
                SPRING
              </button>
              <button className='shadow bg-transparent hover:bg-pink-600 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded'>
                REST-API
              </button>
              <button className='shadow bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-700  hover:border-transparent rounded'>
                SPRING-BOOT
              </button>
              <button className='shadow bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-500 hover:border-transparent rounded'>
                JPA
              </button>
              <button className='shadow bg-transparent hover:bg-rose-600 text-rose-700 font-semibold hover:text-white py-2 px-4 border border-rose-500 hover:border-transparent rounded'>
                JDBC
              </button>
              <button className='shadow bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                MYSQL
              </button>
              <button className='shadow bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>
                MAVEN
              </button>
            </div>
            <h2 className='text-2xl font-extrabold pt-2 pb-4'>Beginner</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t-2 border-dashed border-black dark:border-white'>
              <button className='shadow bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded'>
                NodeJs
              </button>
              <button className='shadow bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                ReactJs
              </button>
              <button className='shadow bg-transparent hover:bg-slate-400 text-slate-500 font-semibold hover:text-black py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
                NextJs
              </button>
              <button className='shadow bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                Docker
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
