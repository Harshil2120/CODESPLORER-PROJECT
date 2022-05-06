import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <div className=' shadow-slate-400 dark:shadow-slate-900 shadow-lg bg-gradient-to-r from-orange-400 via-violet-500 to-pink-600 hover:from-pink-500 hover:to-orange-500 p-1 rounded-lg'>
      <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-zinc-900 dark:border-gray-700 transition-all duration-300 min-h-full'>
        <a href='#'>
          <Image
            src={post.frontmatter.cover_image}
            alt='profile'
            width='440px'
            height='250px'
            layout='responsive'
            className=' rounded-lg z-0'
            priority
          />
        </a>
        <div className='p-5 -z-10'>
          <a href='#'>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300'>
              {post.frontmatter.title}
            </h2>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 transition-all duration-300'>
            {post.frontmatter.excerpt}
          </p>
          <button className=' bg-emerald-600 hover: text-white px-2 py-1 rounded font-bold '>
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}
