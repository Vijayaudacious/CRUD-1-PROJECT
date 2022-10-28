import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import AddUpdate from "./Pages/AddUpdate";
import Home from "./Pages/Home";
import View from "./Pages/View";
import 'react-toastify/dist/ReactToastify.css'
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<AddUpdate/>}/>
          <Route path='/update/:id' element={<AddUpdate/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
