import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Clients/>
      <Services/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
