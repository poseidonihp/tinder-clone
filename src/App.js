import Home from './pages/Home';
import Dasboard from './pages/Dasboard';
import OnBoarding from './pages/OnBoarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/dashboard" element={<Dasboard />} />
   <Route path="/onboarding" element={<OnBoarding />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
