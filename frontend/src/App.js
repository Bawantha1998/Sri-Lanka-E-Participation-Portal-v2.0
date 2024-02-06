import Newspress from "./pages/Newspress";
import Allimagegallery from "./pages/allimagegallery";
import Photogallery from "./pages/photogallery";
import Event from "./pages/event";
import PublicConsultations from "./pages/PublicConsultations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedBack from "./components/Feedback/FeedBack";
import GenaralFeedback from "./components/GenaralFeedback/Genaral FeedBack";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Photogallery />} />
        <Route path="/newspress" element={<Newspress />} />
        <Route path="/public-consultations" element={<PublicConsultations />} />
        <Route path="/event" element={<Event />} />
        <Route path="/Allimages" element={<Allimagegallery />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/genaral-feedback" element={<GenaralFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
