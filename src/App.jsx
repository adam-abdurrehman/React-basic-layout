import './App.css'
import Fotter from './componants/Fotter'
import Left from './componants/Left'
import Middle from './componants/Middle'
import NavBar from './componants/NavBar'
import Right from './componants/Right'

function App() {
  return (
    <>
      <div className='hero'>
      <NavBar/>
       <div className='main'>
        <Left/>
        <Middle/>
        <Right/>
       </div>
      <Fotter></Fotter>
      </div>
    </>
  )
}

export default App
