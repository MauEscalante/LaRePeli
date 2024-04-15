import React from "react";

const Footer = () => {
  <footer></footer>;
  return (
    <>
      <div className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/?locale=es_LA"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

          </section>
        </div>


      </div>
    </>
  );
};

export default Footer;
