import Navbar from "./components/Navbar/Navbar";
import Newspress from "./pages/Newspress";
import Allimagegallery from "./pages/allimagegallery";
import Photogallery from "./pages/photogallery";
import UsefulLinks from "./pages/UsefulLinks";
import Events from "./components/Event/EventView";
import PublicConsultations from "./pages/PublicConsultations";
import Event from "./pages/event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedBack from "./components/Feedback/FeedBack";
import GenaralFeedback from "./components/GenaralFeedback/Genaral FeedBack";
import FAQs from "./pages/FAQs";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Termofuse from "./pages/Termofuse";
import Newsletter from "./pages/Newsletter";
import PublicConsultationsView from "./components/publicConsultations/PublicConsultationView";
import Comment from "./components/Comment/Comment";
import PublicConsultationView from "./components/publicConsultations/PublicConsultationView";
import TestPath from "./components/Test-Navbar/test";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/testpath" element={<TestPath />} />
        <Route path="/" element={<Home />} />
        <Route path="/photogallery" element={<Photogallery />} />
        <Route
          path="/news-and-press-releases/latest-news"
          element={<Newspress />}
        />
        <Route
          path="/consultations/public-consultations"
          element={<PublicConsultations />}
        />

        <Route path="/consultations/events" element={<Event />} />
        <Route path="/consultations/events/:event_id" element={<Events />} />

        <Route path="/Allphotogallery" element={<Allimagegallery />} />
        <Route path="/Addfeedback/:content_id" element={<FeedBack />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/useful-links" element={<UsefulLinks />} />
        <Route path="/termofuse" element={<Termofuse />} />
        <Route path="/genaral-feedback" element={<GenaralFeedback />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route
          path="/public-consultationsview"
          element={<PublicConsultationsView />}
        />

        <Route path="/newsletter" element={<Newsletter />} />
        <Route
          path="/consultations/public-consultations/:content_id"
          element={<PublicConsultationView />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
