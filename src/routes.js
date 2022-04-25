import { BrowserRouter,Routes, Route}from 'react-router-dom'
import Home from './Pages/Home'

function Router ()  {
  return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Home/>}/>
    </Routes>
  </BrowserRouter>
)}

export default Router