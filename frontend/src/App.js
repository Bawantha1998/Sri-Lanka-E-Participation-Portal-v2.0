

import Newspress from "./pages/Newspress";


function App() {
  return (
 

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Photogallery />} />
          <Route path="/newspress" element={<Newspress />} />
          <Route
            path="/public-consultations"
            element={<PublicConsultations />}
          />
           <Route path="/event" element={<Event />} />
          <Route path="/Allimages" element={<Allimagegallery />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/genaral-feedback" element={<GenaralFeedback />} />
        </Routes>
      </BrowserRouter>


  )


}




export default App;

