import React from "react";
import "./footer.css";
import resume from "../../../src/assets/ibrahim_openiyi-Resume.pdf";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="home__title-two">IbrahimOpeniyi</h1>

          <ul className="footer__list">
            <li className="footer__links">
              <a href="#about" className="footer__link hethtky">
                About <i class="uil uil-notes"></i>
              </a>
            </li>
            <li className="footer__links">
              <a href="#portfolio" className="footer__link ryryte">
                Projects <i class="uil uil-briefcase-alt"></i>
              </a>
            </li>
            <li className="footer__links">
              <a  download="" href={resume} className="footer__link hethtky">
                Resume <i class="uil uil-file-alt"></i>
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx dafont bxl-instagram-alt"></i>
            </a>
            <a
              href="https://www.discord.com"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx dafont bxl-discord"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx dafont bxl-twitter"></i>
            </a>
            <a
              href="https://www.dribble.com"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx dafont bxl-dribbble"></i>
            </a>
            <a
              href="https://www.github.com"
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx dafont bxl-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
