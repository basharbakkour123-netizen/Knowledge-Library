import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Welcome to Knowledge-Library</h1>

        <p>
          Discover the best books and novels
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Home;