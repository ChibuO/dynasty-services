import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
//so that the page scrolls to the top when you go back home

function App() {
  return (
    <div>
      <Router basemname={`/${process.env.PUBLIC_URL}`}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path='' exact element={Home}/>
            <Route path='/services' exact element={Services}/>
            <Route path='/products' exact element={Products}/>
            <Route path='/sign-up' exact element={SignUp}/>
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
