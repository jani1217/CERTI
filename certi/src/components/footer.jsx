import './footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Contact us at:</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> 123-456-789</span>
            <span><i className="fas fa-envelope"></i> certmaster@example.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} YourWebsite.com | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;