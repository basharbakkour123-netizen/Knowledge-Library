import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";

function History() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-success mb-5 text-center">History Books</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1461360370896-922624d12aa1"
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt="History"
              />

              <div className="card-body text-center">
                <h4>Ancient Egypt</h4>
                <Link to="/ancient-egypt" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt="Rome"
              />

              <div className="card-body text-center">
                <h4>Roman Empire</h4>
                <Link to="/roman-empire" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt="World Wars"
              />

              <div className="card-body text-center">
                <h4>World Wars</h4>
                <Link to="/world-wars" className="btn btn-success">
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
export default History;
