import React from 'react'
import { Main } from './sections/Main'
import { Sidebar } from './sections/Sidebar'

const App = () => {
  return (
    <main className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main />
    </main>
  )
}

export default App