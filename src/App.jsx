import 'react'
import './App.css'
import Description from './components/product/Description'
import Image from './components/product/Image'
import Name from './components/product/Name'
import Price from './components/product/Price' 


function App() {
  const myName = ''
  return (
    <>

<div class="card" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5 className='card-title'>Dress</h5>
  </div>
  <Image/>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">< Name/></li>
    <li class="list-group-item"><Price/></li>
    <li class="list-group-item"><Description/></li>
  </ul>
</div>
Hello, {myName || 'there!'}
    </>
  )
}

export default App
