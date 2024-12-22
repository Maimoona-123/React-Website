import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import './App.css'

function App(){
  return <div>
    <Navbar/>
    <img src="mobileimg.webp" alt="" style={{width : '99rem', height : '45rem' }} />
    <Cards />
    <Footer />
    </div>
}

export default App
