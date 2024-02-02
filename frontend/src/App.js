
// import Home from "./components/card";
import Newspress from "./pages/Newspress";
import Allimagegallery from "./components/pages/allimagegallery";
import Photogallery from "./components/pages/photogallery";
import PublicConsultations from "./pages/PublicConsultations";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
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

      {/* <Home /> */}




function App() {
  return (
    <div className="App">
  
    

    </div>
  );
}

export default App;
