import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/dripicons.css";
import "../assets/css/slick.css";
import "../assets/css/default.css";
import "../assets/css/swiper.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Header = () => {
  return (
    <header className="header-area">
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo/logo.svg" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9">
                <div className="responsive">
                  <i className="icon dripicons-align-right"></i>
                </div>
                <div className="main-menu text-right text-xl-right">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <a href="#parallax">Home</a>
                      </li>
                      <li>
                        <a href="#about">About Us</a>
                      </li>
                      <li>
                        <a href="#features">Features</a>
                      </li>
                      <li>
                        <a href="#screen">Screenshort</a>
                      </li>
                      <li className="has-sub">
                        <a href="#screen">Other</a>
                        <ul>
                          <li>
                            <a href="#pricing">Pricing</a>
                          </li>
                          <li>
                            <a href="#testimonios">Testimonios</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Deatils</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 text-right d-none d-xl-block">
                <div className="header-btn second-header-btn">
                  <a href="#" className="btn">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
