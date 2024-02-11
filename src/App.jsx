import './App.css'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import ChooseUs from './Components/ChooseUs/chooseUs'
import Plan from './Components/Plans/Plan'
import Join from './Components/Join/Join'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='App'>
      <Hero/>
      <Programs/>
      <ChooseUs/>
      <Plan/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default App
