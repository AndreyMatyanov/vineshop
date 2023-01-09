import './App.css';
import Navbar from "./components/app/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/pages/main/Main";
import Footer from "./components/app/footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/deliver' element={<Main/>}/>
              <Route path='/sheeps'/>
              <Route path='/goats'/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
