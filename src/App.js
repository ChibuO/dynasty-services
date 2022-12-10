import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={Services}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/sign-up' exact component={SignUp}/>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
