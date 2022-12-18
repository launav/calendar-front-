import React from 'react'
import { AppRouter } from './router/AppRouter'


function App() {


  return (
    <>
      <header className='bg-dark text-light text-center py-3'>
        <div className='container'>
          <p className='display-4'>PRÁCTICA CALENDARIO DE EVENTOS</p>
        </div>
      </header>
      <AppRouter />

      <footer className='bg-dark text-light text-center '>
        <div className='container'>
          <p className='py-1'>footer</p>
        </div>
      </footer>
    </>
  )
}

export default App
