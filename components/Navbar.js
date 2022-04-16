import Menuicon from './Menuicon'
import Closeicon from './Closeicon'
import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { useTheme } from 'next-themes'

const Navbar = (props) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <>
          <button
            className='h-7 w-8 ml-auto pt-[18px] hover:cursor-pointer text-2xl transition-all'
            role='button'
            onClick={() => setTheme('light')}
          >
            🌞
          </button>
        </>
      )
    } else {
      return (
        <>
          <button
            className='h-7 w-8 ml-auto pt-[18px] hover:cursor-pointer text-2xl transition-all'
            role='button'
            onClick={() => setTheme('dark')}
          >
            🌛
          </button>
        </>
      )
    }
  }
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className='w-screen h-[72px] bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 border-b-2 fixed top-0 left-0 flex'></nav>
      <nav className=' w-screen h-[72px] border-b-2 border-dashed bg-black border-slate-600 fixed top-2 left-0 text-white flex md:justify-between'>
        <div className='flex px-2 items-center h-full'>
          <div className='md:text-3xl text-2xl p-2 hover:cursor-pointer'>🚀</div>
          <h1 className='md:text-3xl text-2xl font-bold hover:cursor-pointer hover:opacity-80 transition-all'>
            CodeSplorer.me
          </h1>
        </div>
        {renderThemeChanger()}
        {open ? (
          <Closeicon
            className='w-8 ml-7 mr-5 hover:cursor-pointer transition-all  md:hidden'
            onClick={() => setOpen(false)}
          />
        ) : (
          <Menuicon
            className='w-8 ml-7 mr-5 hover:cursor-pointer hover:opacity-80  transition-all md:hidden'
            onClick={() => setOpen(true)}
          />
        )}
        <ul
          className={`flex md:static md:flex-row md:w-auto md:h-auto md:text-white text-white flex-col absolute w-full h-auto bg-zinc-900 opacity-[.99] md:bg-black top-16 items-center justify-center p-4 ${
            open ? 'right-0' : 'right-[-100%] invisible md:visible'
          } transition-all duration-300 ease-in-out`}
        >
          {/* <li className='hover:cursor-pointer p-3 md:px-6 text-2xl font-semibold hover:text-yellow-200'>
            {renderThemeChanger()}
          </li> */}
          <li className='hover:cursor-pointer p-2 md:px-6 text-2xl font-semibold hover:text-sky-500 transition-all duration-200'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className='hover:cursor-pointer p-2 md:px-6 text-2xl font-semibold hover:text-sky-500 transition-all duration-200'>
            <Link href='/Projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li className='hover:cursor-pointer p-2 md:px-6 text-2xl font-semibold hover:text-sky-500 transition-all duration-200 z-10'>
            <Link href='/About'>
              <a>About</a>
            </Link>
          </li>
          <li className='hover:cursor-pointer pt-3 md:px-6 text-2xl font-semibold hover:text-sky-500 transition-all duration-200 z-10'>
            <a
              href='https://github.com/Harshil2120/CODESPLORER-PROJECT/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='-z-10'>
                <Image
                  src='/github-icon.svg'
                  alt='Github'
                  width={42}
                  height={42}
                  priority
                  className='hover:opacity-[.85] transition-all duration-150'
                />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
