import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/country/:OriginalName' element={<CountryDetails/>} ></Route>
          
        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
