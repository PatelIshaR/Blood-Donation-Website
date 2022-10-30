import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import Herosection from "./components/herosection/Herocection"
import Card from './components/card/Card.js';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 6000);
  }
  return (
      !loading && (
        <>
          <Navbar />
          <Herosection />
          <Card />
        </>
    )
  );
}

export default App;
