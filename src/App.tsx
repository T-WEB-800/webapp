import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LayoutComponent from './components/MainComponent'
import DestinationSuggestion from './components/DestinationSuggestion'
import TravelAdvice from './components/TravelAdivce'
import MapSideBar from './components/MapNavBar'

function App() {

  return (
    <div className="bg-white">
    {/* <Navbar /> */}
    {/* <div className='bg-white'>
    <LayoutComponent />
    </div>
    <DestinationSuggestion />
    <TravelAdvice />
    <Footer /> */}
    <MapSideBar />
    </div>
  )
}

export default App
