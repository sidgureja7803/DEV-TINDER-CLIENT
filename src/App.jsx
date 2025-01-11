import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from "./NavBar"
import Body from "./Body"
import Login from "./Login"

function App() {


  return (
   <>

   <BrowserRouter>

    <Routes>
      <Route  path = "/" element = {<Body></Body>}>

      <Route path = "/login" element= {<div>lOGIN Page</div>} ></Route>
      <Route path = "/test" element= {<div>TEST Page</div>} ></Route>

      </Route>
       
    </Routes>

    
   </BrowserRouter>
   
   </>
  )
}

export default App
