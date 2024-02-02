
// import Home from "./components/card";
// import Newspress from "./pages/Newspress";
import Event from "./components/Event/Eventcard"

import Allimagegallery from "./components/pages/allimagegallery";
import Home from "./components/card";

import Photogallery from "./components/pages/photogallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Photogallery/>} />
     <Route path='/Allimages' element={<Allimagegallery/>} />
     </Routes>
     </BrowserRouter>
     
      {/* <Home /> */}

    </div>
  );
}

export default App;
