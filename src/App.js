import DiffForm from './components/DiffForm';
import NavBar from'./components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import DiffEditor from './components/DiffEditor';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<DiffForm />}>
            <Route path='/diff' element={<DiffEditor />} />
          </Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
