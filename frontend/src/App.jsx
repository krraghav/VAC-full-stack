import Parent from './components/Parent'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './pages/counter'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Service from './pages/Service'
const App = ()=>{
  return(
    //Fragment Tag
    <>
    <Navbar/>
    <h1>Hello world!!</h1>
    <h1>Hello world!!</h1>
    <Parent/>
    <Home/>
    <About/>
    <Contact/>
    <Service/>
    <Counter/>
    </>
  )
   
}

export default App