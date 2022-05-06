import Head from 'next/head'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Card from '../components/Card'
export default function Home({blog_posts }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/rocket.png' type='image/x-icon'></link>
        <meta
          name='twitter:card'
          content='CodeSplorer blogs and portfolio'
          key='twcard'
        />
        <meta name='twitter:creator' content='@donga_harshil' key='twhandle' />
        <meta property='og:url' content='www.codesplorer.me' key='ogurl' />
        <meta property='og:image' content='/codesplore.jpg' key='ogimage' />
        <meta
          property='og:site_name'
          content='CodeSplorer.me'
          key='ogsitename'
        />
        <meta property='og:title' content='CodeSplorer | Home' key='ogtitle' />
        <meta
          property='og:description'
          content='Blogs related to new technologies learnt'
          key='ogdesc'
        />
        <title>CodeSplorer | Home</title>
      </Head>
      <h1 className=' pt-[84px] text-center text-xl'>
        <b>🚧 Project-Codesplorer is under construction 🚧</b>
      </h1>
      <div className='py-4 flex flex-col lg:flex-row items-center justify-center w-full h-full xl:space-x-72 lg:space-x-48 space-y-2'>
        <div>
          <h1 className='text-5xl xl:text-8xl py-1 font-extrabold lg:text-6xl '>
            <span className='hover:text-transparent bg-gradient-to-br from-sky-800 to-sky-200 via-sky-500 bg-clip-text'>
              Explore.Learn.
            </span>
          </h1>
          <h1 className='text-5xl xl:text-8xl lg:text-6xl py-1 font-extrabold '>
            <span className='hover:text-transparent bg-gradient-to-br from-indigo-800 via-fuchsia-700 to-pink-400 bg-clip-text '>
              Blog.Portfolio.
            </span>
          </h1>
        </div>
        <div className='-z-10'>
          <Image
            src='/home.svg'
            alt='profile'
            width={350}
            height={350}
            className='-z-10'
            priority
          />
        </div>
      </div>

      <div className='flex pt-[30px] pb-[90px] flex-col items-center w-full h-full p-8 border-t-2 border-dashed  border-slate-800 dark:border-slate-800'>
        <h1 className='text-3xl font-bold p-9'>👾 My Blog Posts 👾</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          {blog_posts.map((post, index) => (
            <Card post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const blog_posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownmeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownmeta)
    return { slug, frontmatter }
  })


  return {
    props: {
      blog_posts,
    },
  }
}
