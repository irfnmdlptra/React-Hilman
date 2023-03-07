import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
