import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
function About() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1>About Us</h1>

        <p>
          Knowledge-Library helps readers discover amazing books online.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;