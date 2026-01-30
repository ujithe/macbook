import Hero from './components/Hero.jsx';
import NavBar from './components/navBar.jsx';
import ProductViewer from './components/productViewer.jsx';
const App = () => {
  return (
    <main className='overflow-hidden'>
     <NavBar />
     <Hero />
     <ProductViewer />
    </main>
  )
}

export default App