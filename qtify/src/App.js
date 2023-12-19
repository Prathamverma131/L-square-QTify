import './App.css';
import Navbar from './components/navbar/navbar'; 
import Hero from './components/hero/hero';
import Album from './components/albums/albums'
import Faq from './components/faq/faq';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Album/>
     <Faq/>
    </div>
  );
}

export default App;
