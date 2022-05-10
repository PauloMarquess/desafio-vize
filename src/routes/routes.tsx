import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigIn from '../pages/SignIn';
import Register from '../pages/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
