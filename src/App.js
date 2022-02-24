import DiffForm from './components/DiffForm';
import NavBar from'./components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import About from './pages/About';
import DiffEditor from './components/DiffEditor';
import Error from './pages/Error';
import Background from './components/Background';

import './index.css';

const App = () => {
  return (
      <AnimatePresence exitBeforeEnter>
        <div className="App">
        <NavBar />
            <Routes>
              <Route path='/' element={<DiffForm />} />
              <Route path='/diff' element={<DiffEditor />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<Error />} />
            </Routes>
          <Background />
        </div>
      </AnimatePresence>
  );
};

export default App;
