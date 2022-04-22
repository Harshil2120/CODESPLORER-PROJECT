import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
      <div className='pt-24 py-7 flex flex-col lg:flex-row items-center justify-center w-full h-full xl:space-x-72 lg:space-x-48 space-y-2'>
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

      <div className='flex pt-[80px] flex-col items-center w-full h-full p-8 border-t-2 border-dashed md:border-t-2 md:border-dashed border-slate-600 '>
        <h1 className='text-3xl font-bold'>🚀Home Page🚀</h1>
        <p className=' p-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
          voluptatibus maxime at error corrupti nobis laboriosam assumenda non
          eligendi? At accusantium iusto amet est deserunt eveniet cum nemo,
          veniam in fuga suscipit consectetur magni aspernatur. Animi quasi
          veritatis culpa architecto esse aut deserunt, autem dicta!
          Voluptatibus, aliquam impedit quasi voluptatum placeat dolorum, quis
          reprehenderit at in perspiciatis ipsum corporis, qui nulla omnis
          fugiat modi. Voluptates explicabo praesentium deleniti nesciunt
          corporis laboriosam a, ipsum necessitatibus rem quo facere possimus
          corrupti quidem doloribus illum excepturi quos quaerat autem iste
          impedit repellendus saepe aut non? Unde amet, ullam in nostrum sed
          debitis minus, harum, veritatis fugit hic modi delectus ex enim
          perferendis neque iusto tempore consequatur sit. Sapiente aut quia cum
          nihil doloremque dignissimos nulla animi atque unde maxime ex non
          dolore blanditiis sunt, voluptatibus nesciunt earum illum! Recusandae
          neque eveniet minima optio quos eaque consequuntur voluptatem natus
          voluptate? Animi asperiores nulla est ab veritatis quod alias officiis
          odit voluptatem labore facere, quae eius repellat vero consectetur
          ratione sint illum maiores non explicabo aliquid debitis soluta dolor
          at! Ad dolor cum tempore distinctio doloribus aut corporis nam sit
          iusto debitis ipsum suscipit eum, tempora quam minus quas ex. Magni
          laboriosam voluptatem deserunt dolore repellendus, enim perspiciatis
          minima, nemo provident nihil aliquid assumenda quasi fuga suscipit?
          Aliquid excepturi ullam debitis, commodi aut autem expedita maxime ea
          praesentium totam aperiam fuga fugit accusamus ipsum odit eos quia sit
          doloremque ex aliquam, obcaecati alias molestias veritatis a? Sequi
          possimus animi magni ut, dolorem asperiores voluptatum corporis.
          Error, quidem corporis! Nam excepturi placeat molestiae ipsam odit
          nemo hic expedita nihil culpa doloremque in, omnis blanditiis
          molestias doloribus quos deleniti? Eos, consequatur placeat magnam
          rerum quae provident et modi mollitia voluptatem dolor aliquam nemo
          minima incidunt at doloremque, nesciunt magni sunt? Sapiente tempora
          autem eum porro impedit.
        </p>
        <p className=' p-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
          voluptatibus maxime at error corrupti nobis laboriosam assumenda non
          eligendi? At accusantium iusto amet est deserunt eveniet cum nemo,
          veniam in fuga suscipit consectetur magni aspernatur. Animi quasi
          veritatis culpa architecto esse aut deserunt, autem dicta!
          Voluptatibus, aliquam impedit quasi voluptatum placeat dolorum, quis
          reprehenderit at in perspiciatis ipsum corporis, qui nulla omnis
          fugiat modi. Voluptates explicabo praesentium deleniti nesciunt
          corporis laboriosam a, ipsum necessitatibus rem quo facere possimus
          corrupti quidem doloribus illum excepturi quos quaerat autem iste
          impedit repellendus saepe aut non? Unde amet, ullam in nostrum sed
          debitis minus, harum, veritatis fugit hic modi delectus ex enim
          perferendis neque iusto tempore consequatur sit. Sapiente aut quia cum
          nihil doloremque dignissimos nulla animi atque unde maxime ex non
          dolore blanditiis sunt, voluptatibus nesciunt earum illum! Recusandae
          neque eveniet minima optio quos eaque consequuntur voluptatem natus
          voluptate? Animi asperiores nulla est ab veritatis quod alias officiis
          odit voluptatem labore facere, quae eius repellat vero consectetur
          ratione sint illum maiores non explicabo aliquid debitis soluta dolor
          at! Ad dolor cum tempore distinctio doloribus aut corporis nam sit
          iusto debitis ipsum suscipit eum, tempora quam minus quas ex. Magni
          laboriosam voluptatem deserunt dolore repellendus, enim perspiciatis
          minima, nemo provident nihil aliquid assumenda quasi fuga suscipit?
          Aliquid excepturi ullam debitis, commodi aut autem expedita maxime ea
          praesentium totam aperiam fuga fugit accusamus ipsum odit eos quia sit
          doloremque ex aliquam, obcaecati alias molestias veritatis a? Sequi
          possimus animi magni ut, dolorem asperiores voluptatum corporis.
          Error, quidem corporis! Nam excepturi placeat molestiae ipsam odit
          nemo hic expedita nihil culpa doloremque in, omnis blanditiis
          molestias doloribus quos deleniti? Eos, consequatur placeat magnam
          rerum quae provident et modi mollitia voluptatem dolor aliquam nemo
          minima incidunt at doloremque, nesciunt magni sunt? Sapiente tempora
          autem eum porro impedit.
        </p>
        <p className=' p-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
          voluptatibus maxime at error corrupti nobis laboriosam assumenda non
          eligendi? At accusantium iusto amet est deserunt eveniet cum nemo,
          veniam in fuga suscipit consectetur magni aspernatur. Animi quasi
          veritatis culpa architecto esse aut deserunt, autem dicta!
          Voluptatibus, aliquam impedit quasi voluptatum placeat dolorum, quis
          reprehenderit at in perspiciatis ipsum corporis, qui nulla omnis
          fugiat modi. Voluptates explicabo praesentium deleniti nesciunt
          corporis laboriosam a, ipsum necessitatibus rem quo facere possimus
          corrupti quidem doloribus illum excepturi quos quaerat autem iste
          impedit repellendus saepe aut non? Unde amet, ullam in nostrum sed
          debitis minus, harum, veritatis fugit hic modi delectus ex enim
          perferendis neque iusto tempore consequatur sit. Sapiente aut quia cum
          nihil doloremque dignissimos nulla animi atque unde maxime ex non
          dolore blanditiis sunt, voluptatibus nesciunt earum illum! Recusandae
          neque eveniet minima optio quos eaque consequuntur voluptatem natus
          voluptate? Animi asperiores nulla est ab veritatis quod alias officiis
          odit voluptatem labore facere, quae eius repellat vero consectetur
          ratione sint illum maiores non explicabo aliquid debitis soluta dolor
          at! Ad dolor cum tempore distinctio doloribus aut corporis nam sit
          iusto debitis ipsum suscipit eum, tempora quam minus quas ex. Magni
          laboriosam voluptatem deserunt dolore repellendus, enim perspiciatis
          minima, nemo provident nihil aliquid assumenda quasi fuga suscipit?
          Aliquid excepturi ullam debitis, commodi aut autem expedita maxime ea
          praesentium totam aperiam fuga fugit accusamus ipsum odit eos quia sit
          doloremque ex aliquam, obcaecati alias molestias veritatis a? Sequi
          possimus animi magni ut, dolorem asperiores voluptatum corporis.
          Error, quidem corporis! Nam excepturi placeat molestiae ipsam odit
          nemo hic expedita nihil culpa doloremque in, omnis blanditiis
          molestias doloribus quos deleniti? Eos, consequatur placeat magnam
          rerum quae provident et modi mollitia voluptatem dolor aliquam nemo
          minima incidunt at doloremque, nesciunt magni sunt? Sapiente tempora
          autem eum porro impedit.
        </p>
        <p className=' p-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
          voluptatibus maxime at error corrupti nobis laboriosam assumenda non
          eligendi? At accusantium iusto amet est deserunt eveniet cum nemo,
          veniam in fuga suscipit consectetur magni aspernatur. Animi quasi
          veritatis culpa architecto esse aut deserunt, autem dicta!
          Voluptatibus, aliquam impedit quasi voluptatum placeat dolorum, quis
          reprehenderit at in perspiciatis ipsum corporis, qui nulla omnis
          fugiat modi. Voluptates explicabo praesentium deleniti nesciunt
          corporis laboriosam a, ipsum necessitatibus rem quo facere possimus
          corrupti quidem doloribus illum excepturi quos quaerat autem iste
          impedit repellendus saepe aut non? Unde amet, ullam in nostrum sed
          debitis minus, harum, veritatis fugit hic modi delectus ex enim
          perferendis neque iusto tempore consequatur sit. Sapiente aut quia cum
          nihil doloremque dignissimos nulla animi atque unde maxime ex non
          dolore blanditiis sunt, voluptatibus nesciunt earum illum! Recusandae
          neque eveniet minima optio quos eaque consequuntur voluptatem natus
          voluptate? Animi asperiores nulla est ab veritatis quod alias officiis
          odit voluptatem labore facere, quae eius repellat vero consectetur
          ratione sint illum maiores non explicabo aliquid debitis soluta dolor
          at! Ad dolor cum tempore distinctio doloribus aut corporis nam sit
          iusto debitis ipsum suscipit eum, tempora quam minus quas ex. Magni
          laboriosam voluptatem deserunt dolore repellendus, enim perspiciatis
          minima, nemo provident nihil aliquid assumenda quasi fuga suscipit?
          Aliquid excepturi ullam debitis, commodi aut autem expedita maxime ea
          praesentium totam aperiam fuga fugit accusamus ipsum odit eos quia sit
          doloremque ex aliquam, obcaecati alias molestias veritatis a? Sequi
          possimus animi magni ut, dolorem asperiores voluptatum corporis.
          Error, quidem corporis! Nam excepturi placeat molestiae ipsam odit
          nemo hic expedita nihil culpa doloremque in, omnis blanditiis
          molestias doloribus quos deleniti? Eos, consequatur placeat magnam
          rerum quae provident et modi mollitia voluptatem dolor aliquam nemo
          minima incidunt at doloremque, nesciunt magni sunt? Sapiente tempora
          autem eum porro impedit.
        </p>
      </div>
    </>
  )
}
