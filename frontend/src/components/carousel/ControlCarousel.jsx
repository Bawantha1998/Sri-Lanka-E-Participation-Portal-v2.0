// ControlledCarousel.jsx
// import React, { useState, useEffect } from "react";
// import { Grid, Paper } from "@mui/material";
// import image1 from "../images/abc.jpg";
// import image2 from "../images/temppic1.jpg";
// import image3 from "../images/temppic3.jpg";


// export default function Home() {
//   const images = [image1, image2, image3];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);
//   return (
//     <div>
//       <Grid container justifyContent="center">
//         <Grid item xs={8}>
//           <Paper>
//             <img
//               src={images[currentImageIndex]}
//               alt={`Slide ${currentImageIndex}`}
//               style={{ width: "100%" }}
//             />
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import image1 from "../../images/epp.jpg";
import image2 from "../../images/epp2.jpg";
import image3 from "../../images/epp3.jpg";
// import image4 from "../../images/slide2.jpg";


export default function Home() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);
  return (
    
      <>
     
       
          <Paper>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex}`}
              style={{ display:"block",width: "100%" ,height:"auto"}}
            />
          </Paper>
          
        
      </>
      
    
  );
}