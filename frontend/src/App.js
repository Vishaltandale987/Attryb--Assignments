
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import CarSubmitform from './components/submit new car form/NewCarSubmitform';
import All_route from './pages/All_route';

function App() {
  return (
    <div className="App">
<Navbar/>
<All_route/>
{/* <Footer/> */}
    </div>
  );
}

export default App;
