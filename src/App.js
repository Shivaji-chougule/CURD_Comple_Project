import Create from "./Components/Create/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read/Read";
import Update from "./Components/Update/Update";
import Nav from "./Components/Nav/Nav";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
   
    <Route path="/" element={<Create />}></Route>
    <Route path="/update" element={<Update />}></Route>
    <Route path="/read" element={<Read />}></Route>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
