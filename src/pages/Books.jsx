import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import React from "react";
function Books() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center mb-5">Latest Releases</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <BookCard
              image="/Fantasy.jpg"
              title="Fantasy Novel"
              desc="Exciting fantasy adventures."
              link="/fantasy"
            />
          </div>

          <div className="col-md-4">
            <BookCard
              image="/History.jpg"
              title="History"
              desc="Journey through world history."
              link="/history"
            />
          </div>

          <div className="col-md-4">
            <BookCard
              image="/Psychology.jpg"
              title="Psychology"
              desc="Understand human behavior."
              link="/psychology"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;
