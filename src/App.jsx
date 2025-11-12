import React, { useState } from "react";
// import Login from "./Login";  // adjust path if your file is in src/Login.jsx
import Navbar from "./components/Navbar.jsx";
import Languages from "./components/Languages.jsx";
import Chatbots from "./components/Chatbots.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./Login.jsx"; // import login

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar />
          <Languages />
          <Chatbots />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
