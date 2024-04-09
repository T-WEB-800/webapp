import Navbar from './components/Navbar'
import SearchTabs from './components/TabComponent'
import TripleCards from './components/PricingComponent'
import SuggestionsComponent from './components/SuggestionCard'
import RegionsGrid from './components/RegionCard'
import Footer from './components/Footer'
import LayoutComponent from './components/MainComponent'

function App() {

  return (
    <div className="bg-white">
    <Navbar />
    <div className='bg-white'>
    <LayoutComponent />
    </div>
    <TripleCards />
    {/* <SuggestionsComponent />
    <RegionsGrid /> */}
    <Footer />
    </div>
  )
}

export default App
