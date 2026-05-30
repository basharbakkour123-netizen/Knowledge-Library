import React from "react";
import Fantasy from "./pages/Fantasy";
import History from "./pages/History";
import Psychology from "./pages/Psychology";
import { HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success border-4">
      <div className="container">
        <Link className="navbar-brand text-warning fw-bold" to="/">
          Knowledge-Library
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-warning text-center p-4 mt-5">
      <p>All Rights Reserved © 2026 - CSCI390 Project</p>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <h1 className="display-3 fw-bold text-warning">
            Welcome to Knowledge-Library
          </h1>

          <p className="lead mt-4">
            Discover the best books and novels from around the world.
          </p>

          <Link to="/books" className="btn btn-success btn-lg mt-3">
            Explore Books
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
function About() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1>About Us</h1>

        <p>Knowledge-Library helps readers discover amazing books online.</p>
      </div>

      <Footer />
    </>
  );
}

function Books() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center mb-5">Latest Releases</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Fantasy"
              />

              <div className="card-body text-center">
                <h4>Fantasy Novel</h4>

                <p>Exciting fantasy adventures.</p>
                <Link to="/fantasy" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="History"
              />

              <div className="card-body text-center">
                <h4>History</h4>

                <p>Journey through world history.</p>

                <Link to="/history" className="btn btn-success">
                  Read Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
                alt="Psychology"
              />

              <div className="card-body text-center">
                <h4>Psychology</h4>

                <p>Understand human behavior.</p>

                <Link to="/psychology" className="btn btn-success">
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

function Contact() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="mb-4 text-center">Contact Us</h1>

        <div className="row">
          <div className="col-md-6">
            <form className="shadow p-4 rounded bg-light">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email Address"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button className="btn btn-success w-100">Send Message</button>
            </form>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className="shadow p-4 rounded bg-light h-100">
              <h3 className="mb-4 text-success">Contact Methods</h3>

              <p className="fs-5 d-flex align-items-center">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  width="35"
                  className="me-3"
                />

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Knowledge-Library
                </a>
              </p>

              <p className="fs-5 d-flex align-items-center">
                <img
                  src="/images/instagram.jpg"
                  alt="Instagram"
                  width="35"
                  className="me-3"
                />

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  @KnowledgeLibrary
                </a>
              </p>

              <p className="fs-5 d-flex align-items-center">
                <img
                  src="/images/whatsapp.jpg"
                  alt="WhatsApp"
                  width="35"
                  className="me-3"
                />

                <a
                  href="https://wa.me/96171993534"
                  target="_blank"
                  className="text-decoration-none"
                >
                  +961 71993534
                </a>
              </p>

              <p className="fs-5 d-flex align-items-center">
                <img
                  src="/images/email.png"
                  alt="Email"
                  width="35"
                  className="me-3"
                />

                <span>basharbakkour123@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/books" element={<Books />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/dragon-world" element={<Fantasy />} />
        <Route path="/magic-kingdom" element={<Fantasy />} />
        <Route path="/dark-forest" element={<Fantasy />} />

        <Route path="/history" element={<History />} />
        <Route path="/ancient-egypt" element={<History />} />
        <Route path="/roman-empire" element={<History />} />
        <Route path="/world-wars" element={<History />} />

        <Route path="/psychology" element={<Psychology />} />
        <Route path="/human-behavior" element={<Psychology />} />
        <Route path="/psychology-of-success" element={<Psychology />} />
        <Route path="/emotional-intelligence" element={<Psychology />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
