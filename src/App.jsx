import Navbar from './Components/Navbar/navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RawPost/RowPost'
import PrimeRelease from './Components/PrimeRelease/PrimeRelease'
import Footer from './Components/Footer/Footer'
import { originalsUrl,ActionUrl } from './constants/constant'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner/>
        <PrimeRelease/>
        <RowPost title ='Netflix Originals' url={originalsUrl} noPreview/>
        <RowPost title ='Action Movies' isSmall  url={ActionUrl}/>
        <Footer/>
      </div>
    </>
  )
}
export default App
