import Navbar from "./components/Navbar/Navbar";
import Newspress from "./pages/Newspress";
import Allimagegallery from "./pages/allimagegallery";
import Photogallery from "./pages/photogallery";

import Event from "./pages/event";
import PublicConsultations from "./pages/PublicConsultations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedBack from "./components/Feedback/FeedBack";
import GenaralFeedback from "./components/GenaralFeedback/Genaral FeedBack";
import FAQs from "./pages/FAQs";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Comment from "./components/Comment/Comment";
import PublicConsultationsView from "./components/publicConsultations/PublicConsultationView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/photogallery" element={<Photogallery />} />
        <Route
          path="/news-and-press-releases/latest-news"
          element={<Newspress />}
        />
        <Route path="/public-consultations" element={<PublicConsultations />} />
        <Route path="/event" element={<Event />} />
        <Route path="/Allimages" element={<Allimagegallery />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/genaral-feedback" element={<GenaralFeedback />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/public-consultationsview"
          element={<PublicConsultationsView />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
