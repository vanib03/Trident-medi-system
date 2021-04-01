
import './assets/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';

function App () {
  return (
    <div className="App">

      <Router>
        <AnimatePresence>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/products" component={Products} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </Router>

    </div>
  );
}

export default App;
