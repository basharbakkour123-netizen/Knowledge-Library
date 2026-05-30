import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";

function Psychology() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-success mb-5 text-center">Psychology Books</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt="Human Behavior"
              />

              <div className="card-body text-center">
                <h4>Human Behavior</h4>
                <Link to="/human-behavior" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt="Body Language"
              />

              <div className="card-body text-center">
                <h4>Psychology of Success</h4>
                <Link to="/psychology-of-success" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt="Emotional Intelligence"
              />

              <div className="card-body text-center">
                <h4>Emotional Intelligence</h4>
                <Link to="/emotional-intelligence" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Psychology;
