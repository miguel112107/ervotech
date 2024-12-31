import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYelp, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div class="container footer-container">
                <div class="footer-about">
                    <h4>About Us</h4>
                    <p>We deliver cutting-edge web solutions tailored to your business needs. From SEO to software development, we ensure your digital presence thrives.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#metrics">Metrics</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:contact@ervotech.com">contact@ervotech.com</a></p>
                    <p>Phone: <a href="tel:+123456789">+1 (234) 567-89</a></p>
                </div>

                <div class="footer-newsletter">
                    <h4>Subscribe to Our Newsletter</h4>
                    <p>Stay updated with our latest insights and offers.</p>
                    <form id="newsletter-form">
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p id="newsletter-message" class="hidden"></p>
                </div>

            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Ervotech. All Rights Reserved.</p>
                <div class="social-links">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
}
