import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Head>
        <title>CodeSplorer | Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/rocket.png' type='image/x-icon'></link>
      </Head>

      <div className='flex md:flex-row flex-col items-center w-full h-full pt-24 md:pt-[70px] pl-24 pr-24 space-y-3'>
        <div>
          <h1 className='text-4xl md:text-8xl font-extrabold p-1'>
            <span className='hover:text-transparent bg-gradient-to-br from-sky-800 to-sky-200 via-sky-500 bg-clip-text'>
              Explore.Learn.
            </span>
          </h1>
          <h1 className='text-4xl md:text-8xl font-extrabold p-1'>
            <span className='hover:text-transparent bg-gradient-to-br from-indigo-800 via-fuchsia-700 to-pink-400 bg-clip-text '>
              Blog.Portfolio.
            </span>
          </h1>
        </div>
        <div className=' border-b-2 py-2 md:ml-auto md:mr-14 md:border-0 border-dashed border-slate-400 -z-10'>
          <Image
            src='/home.svg'
            alt='profile'
            width='350'
            height='350'
            className='rounded-full -z-10'
            priority
          />
        </div>
      </div>
      <div className='flex flex-col items-center w-full h-full p-8 md:border-t-2 md:border-dashed border-slate-400 '>
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
