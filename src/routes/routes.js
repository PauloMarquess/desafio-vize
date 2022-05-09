import { BrowserRouter,Routes, Route}from 'react-router-dom'
import SigIn from '../Pages/SignIn'

function Router ()  {
  return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<SigIn/>}/>
    </Routes>
  </BrowserRouter>
)}

export default Router