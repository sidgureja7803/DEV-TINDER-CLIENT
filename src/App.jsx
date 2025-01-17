import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from "./NavBar"
import Body from "./Body"
import Login from "./Login"
import {Provider} from "react-redux";
import Appstore from './utils/appStore'
function App() {


  return (
   <>
    <Provider store = {Appstore}>
    <BrowserRouter>
    <Routes>
    <Route  path = "/" element = {<Body></Body>}>

    <Route path = "/login" element= {<div>lOGIN Page</div>} ></Route>
    <Route path = "/test" element= {<div>TEST Page</div>} ></Route>
  </Route>
   
</Routes>
</BrowserRouter>
    </Provider>
  
   
   </>
  )
}

export default App
