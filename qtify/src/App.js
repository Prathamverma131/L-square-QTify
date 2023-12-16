import './App.css';
import Navbar from './components/navbar/navbar'; 
import Hero from './components/hero/hero';
import Album from './components/albums/albums'



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Album/>
    </div>
  );
}

export default App;
