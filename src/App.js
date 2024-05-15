import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
