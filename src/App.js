import NavBar from'./components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Background from './components/Background';
import Footer from './components/Footer';

import './index.css';
import ROUTES from './constants/routes';

const App = () => {
  return (
      <AnimatePresence exitBeforeEnter>
        <div className="App">
        <Background />
        <NavBar />
            <Routes>
              {ROUTES.map((route, idx) =>(
                <Route path={route.path} element={route.element} key={idx}/>
              ))}
            </Routes>
          <Footer />
        </div>
      </AnimatePresence>
  );
};

export default App;
