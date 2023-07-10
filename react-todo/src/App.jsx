import { useState } from 'react'
import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/MoonIcon'

function App() {

  return (
    <div className="container bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <header className="container mx-auto px-4 pt-8">
        <div className='flex justify-between'>
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">
            TODO
          </h1>
          <button>
            <MoonIcon fill="#fff" />
          </button>
        </div>
        <form action="" className='mt-8 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4'>
          <span className='h-5 w-5 rounded-full border-2 inline-block'></span>
          <input className='w-full text-gray-400 outline-none' type="text" placeholder='Create a new todo...' />
        </form>
      </header>

      <main className='container mx-auto px-4'>

        <div className='bg-white mt-4 rounded-md'>

          <div className='border-b'>
            <article  className='flex gap-4 px-4 py-4 border-b-gray-400'>
              <button className='h-5 w-5 rounded-full border-2 inline-block'></button>
              <p className='text-gray-700 grow'>Complete Online Javascript Course</p>
              <button className='flex-none'>
                <CrossIcon />
              </button>
            </article>
          </div>
          <div className='border-b'>
            <article  className='flex gap-4 px-4 py-4 border-b-gray-400'>
              <button className='h-5 w-5 rounded-full border-2 inline-block'></button>
              <p className='text-gray-700 grow'>Complete Online Javascript Course</p>
              <button className='flex-none'>
                <CrossIcon />
              </button>
            </article>
          </div>
          <div className='border-b'>
            <article  className='flex gap-4 px-4 py-4 border-b-gray-400'>
              <button className='h-5 w-5 rounded-full border-2 inline-block'></button>
              <p className='text-gray-700 grow'>Complete Online Javascript Course</p>
              <button className='flex-none'>
                <CrossIcon />
              </button>
            </article>
          </div>
          <div className='border-b'>
            <article  className='flex gap-4 px-4 py-4 border-b-gray-400'>
              <button className='h-5 w-5 rounded-full border-2 inline-block'></button>
              <p className='text-gray-700 grow'>Complete Online Javascript Course</p>
              <button className='flex-none'>
                <CrossIcon />
              </button>
            </article>
          </div>
          <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>5 items left</span>
            <button className='text-gray-400'>Clear completed</button>
          </section>
        </div>
      </main>

      <section className='container mt-5 mx-auto px-4'>
        <div className='bg-white p-4 flex justify-center gap-4 rounded-md'>
          <button className='text-blue-500'>All</button>
          <button className='hover:text-blue-500'>Active</button>
          <button className='hover:text-blue-500'>Complete</button>
        </div>
      </section>

      <section className='text-center mt-8'>Drag and drop</section>
    </div>
  )
}

export default App
