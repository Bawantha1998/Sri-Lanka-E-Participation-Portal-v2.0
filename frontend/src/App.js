

import Newspress from "./pages/Newspress";
import Allimagegallery from "./pages/allimagegallery";
import Photogallery from "./pages/photogallery";
import PublicConsultations from "./pages/PublicConsultations";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Photogallery />} />
          <Route path="/newspress" element={<Newspress />} />
          <Route
            path="/public-consultations"
            element={<PublicConsultations />}
          />
          <Route path="/Allimages" element={<Allimagegallery />} />
        </Routes>
      </BrowserRouter>


  )
}




export default App;

