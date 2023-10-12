import './App.css'
import Navbar from './Components/Navbar/navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RawPost/RowPost'
import PrimeRelease from './Components/PrimeRelease/PrimeRelease'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner/>
        <PrimeRelease/>
        <RowPost/>
        <Footer/>
      </div>
    </>
  )
}
export default App
