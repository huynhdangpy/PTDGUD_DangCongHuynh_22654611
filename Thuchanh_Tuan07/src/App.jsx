import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/menu'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 "><Menu></Menu></div>
  <div class="col-span-2 ..."><Header></Header></div>
  <div class="col-span-2 row-span-2 ...">03</div>
</div>

    </>
  )
}

export default App
