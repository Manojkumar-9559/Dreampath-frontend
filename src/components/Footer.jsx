import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Company Info */}
          <div className="footer-col">
            <h5>About DreamPath</h5>
            <p>
              DreamPath is your trusted career guidance platform, helping you choose the right path
              with expert advice, job opportunities, and skill-building resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/career-advice">Career Advice</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/jobs">Job Openings</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="footer-col image-section">
            <h5>Explore Our Resources</h5>
            <p>Check out our latest career development resources.</p>
            <img src="https://tse3.mm.bing.net/th?id=OIP.zwBmpvg_HtLl5koOB63fFAHaE8&pid=Api&P=0&h=180" alt="Explore Resources" className="footer-image" />
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DreamPath. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link> | 
            <Link to="/terms">Terms of Service</Link>
          </p>
          {/* Social Media Icons */}
          <div className="footer-social">
            <Link to="#"><i className="fab fa-facebook"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-linkedin"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
