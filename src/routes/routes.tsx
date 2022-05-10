import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigIn from '../pages/SignIn';
import Register from '../pages/Register';
import { Users } from '../pages/Users';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
