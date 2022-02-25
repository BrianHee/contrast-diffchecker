import DiffForm from './components/DiffForm';
import NavBar from'./components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import About from './pages/About';
import DiffEditor from './components/DiffEditor';
import Error from './pages/Error';
import Background from './components/Background';
import Feedback from './pages/Feedback';
import Footer from './components/Footer';

import './index.css';

const App = () => {
  return (
      <AnimatePresence exitBeforeEnter>
        <div className="App">
        <Background />
        <NavBar />
            <Routes>
              <Route path='/' element={<DiffForm />} />
              <Route path='/diff' element={<DiffEditor />} />
              <Route path='/about' element={<About />} />
              <Route path='/feedback' element={<Feedback />} />
              <Route path='*' element={<Error />} />
            </Routes>
          <Footer />
        </div>
      </AnimatePresence>
  );
};

export default App;
