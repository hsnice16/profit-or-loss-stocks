import React, { useState } from "react";

import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import CryingFace from "./assets/crying-face.gif";

export default function App() {
  const [isMoreThanFiftyPercentLoss, setIsMoreThanFiftyPercentLoss] = useState(
    false
  );

  return (
    <div
      className="App"
      style={
        isMoreThanFiftyPercentLoss
          ? { backgroundImage: `url(${CryingFace})` }
          : {}
      }
    >
      <Header />
      <Main
        isMoreThanFiftyPercentLoss={isMoreThanFiftyPercentLoss}
        setIsMoreThanFiftyPercentLoss={setIsMoreThanFiftyPercentLoss}
      />
      <Footer />
    </div>
  );
}
