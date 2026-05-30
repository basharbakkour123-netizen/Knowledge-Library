import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Fantasy() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-success text-center mb-5">Fantasy Books</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Fantasy Book"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h4>Dragon World</h4>

                <button className="btn btn-success">Read Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow h-100">
          <img
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19"
            className="card-img-top"
            style={{ height: "350px", objectFit: "cover" }}
          />

          <div className="card-body text-center">
            <h4>Magic Kingdom</h4>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow h-100">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            className="card-img-top"
            style={{ height: "350px", objectFit: "cover" }}
          />

          <div className="card-body text-center">
            <h4>Dark Forest</h4>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Fantasy;
