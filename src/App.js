import React from "react";
import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
import ImageSlider from "./components/imageSlider";

import image1 from "../src/images/2.png";
import image2 from "../src/images/2.png";
import image3 from "../src/images/2.png";
import image4 from "../src/images/2.png";
import image5 from "../src/images/2.png";
import image6 from "../src/images/2.png";

function App() {
  return (
    <div className="container">
      <Header />
      <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <h1 className="slider">Headphones</h1>
        </div>
      </ImageSlider>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
