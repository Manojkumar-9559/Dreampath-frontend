import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 w-100 ">
      <div className="container">
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
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Career Advice</a></li>
              <li><a href="#" className="text-light">Courses</a></li>
              <li><a href="#" className="text-light">Job Openings</a></li>
              <li><a href="#" className="text-light">Contact Us</a></li>
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
            <a href="#" className="text-light mx-2">Privacy Policy</a> | 
            <a href="#" className="text-light mx-2">Terms of Service</a>
          </p>
          {/* Social Media Icons */}
          <div>
            <a href="#" className="text-light mx-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-light mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light mx-2"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-light mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
