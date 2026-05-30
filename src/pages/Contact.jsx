import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
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

              <p className="fs-5">
                📘 Facebook:
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="ms-2 text-decoration-none"
                >
                  Knowledge-Library
                </a>
              </p>

              <p className="fs-5">
                📸 Instagram:
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="ms-2 text-decoration-none"
                >
                  @KnowledgeLibrary
                </a>
              </p>

              <p className="fs-5">
                💬 WhatsApp:
                <a
                  href="https://wa.me/96171993534"
                  target="_blank"
                  className="ms-2 text-decoration-none"
                >
                  +961 71993534
                </a>
              </p>

              <p className="fs-5">
                📧 Email:
                <span className="ms-2">basharbakkour123@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
