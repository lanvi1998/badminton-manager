import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import PlayerManager from "./pages/PlayerManager"
import Members from "./pages/Members"
import Schedule from "./pages/Schedule"
function App(){

return(

<BrowserRouter>

<Routes>
<Route path="/schedule" element={<Schedule/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/dashboard" element={<Dashboard/>} />

<Route path="/players" element={<PlayerManager/>} />

<Route path="/members" element={<Members/>} />

</Routes>

</BrowserRouter>

)

}

export default App
