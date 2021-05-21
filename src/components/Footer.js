import React from "react";

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <div className="socialImages">
        <a href="https://github.com/Ross-mc" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/ross-mcintyre-54a13787/"  target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:rossmci90@hotmail.co.uk">
          <i className="fas fa-at"></i>
        </a>
        <p className="footer-text small">&copy; Ross McIntyre 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
