import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 w-100 ">
      <div>
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>About DreamPath</h5>
            <p>
              DreamPath is your trusted career guidance platform, helping you choose the right path
              with expert advice, job opportunities, and skill-building resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light">Home</Link></li>
              <li><Link to="#" className="text-light">Career Advice</Link></li>
              <li><Link to="#" className="text-light">Courses</Link></li>
              <li><Link to="#" className="text-light">Job Openings</Link></li>
              <li><Link to="#" className="text-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-4">
            <h5>Subscribe to Our Newsletter</h5>
            <p>Stay updated with the latest career trends and opportunities.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-info" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <hr className="my-3" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-1">© {new Date().getFullYear()} DreamPath. All rights reserved.</p>
          <p>
            <Link to="#" className="text-light mx-2">Privacy Policy</Link> | 
            <Link to="#" className="text-light mx-2">Terms of Service</Link>
          </p>
          {/* Social Media Icons */}
          <div>
            <Link to="#" className="text-light mx-2"><i className="fab fa-facebook"></i></Link>
            <Link to="#" className="text-light mx-2"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="text-light mx-2"><i className="fab fa-linkedin"></i></Link>
            <Link to="#" className="text-light mx-2"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
