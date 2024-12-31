import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUsers, faGlobeAmericas, faLeaf } from '@fortawesome/free-solid-svg-icons'


export default function Home({ auth }) {
    return (
        <PublicLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Ervotech" />

            <section class="hero">
                <div class="container">
                    <h1>Transform Your Web Presence</h1>
                    <p>We specialize in modern web solutions, including SEO, website design, and software development tailored to your needs.</p>
                    <div class="hero-buttons">
                        <a href="#services" class="primary-btn">Explore Services</a>
                        <a href="#contact" class="secondary-btn">Contact Us</a>
                    </div>
                </div>
            </section>

            {/* <!-- Split Section --> */}
            <section class="split-section">
                <div class="split-text">
                    <h2>Our Commitment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula sit amet nunc scelerisque faucibus vel et mauris.</p>
                </div>
                <div class="split-image" role="img" aria-label="City skyline with modern design aesthetic"></div>

            </section>

            {/* <!-- Services Section --> */}
            <section class="services" id="services">
                <div class="container">
                    <h2>Our Services</h2>
                    <div class="service-grid">
                        <div class="service-card" itemscope itemtype="https://schema.org/Service">
                            <h3>Website Migration</h3>
                            <p itemprop="description">Seamless migration of your website to modern, scalable platforms.</p>
                        </div>
                        <div class="service-card" itemscope itemtype="https://schema.org/Service">
                            <h3 itemprop="name">SEO Optimization</h3>
                            <p itemprop="description">Boost your search rankings with our proven SEO strategies.</p>
                        </div>

                        <div class="service-card" itemscope itemtype="https://schema.org/Service">
                            <h3 itemprop="name">Web Design & Development</h3>
                            <p itemprop="description">Create stunning, user-friendly websites for your business.</p>
                        </div>
                        <div class="service-card" itemscope itemtype="https://schema.org/Service">
                            <h3 itemprop="name">Software Development</h3>
                            <p itemprop="description">Custom web applications tailored to meet your business goals.</p>
                        </div>
                        <div class="service-card" itemscope itemtype="https://schema.org/Service">
                            <h3 itemprop="name">Content Strategy</h3>
                            <p itemprop="description">Crafting compelling content to drive engagement and results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Metrics Section --> */}
            <section class="metrics" id="metrics">
                <div class="container">
                    <h2>Our Achievements</h2>
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <h3 id="metric1" data-target="100">0</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div class="metric-item">
                            <h3 id="metric2" data-target="50">0</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div class="metric-item">
                            <h3 id="metric3" data-target="10">0</h3>
                            <p>Years in Business</p>
                        </div>
                        <div class="metric-item">
                            <h3 id="metric4" data-target="20">0</h3>
                            <p>Team Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Features Section --> */}
            <section class="features" id="features">
                <div class="container">
                    <h2>Why Choose Us?</h2>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h3>Cutting-Edge Tools</h3>
                            <p>We use the latest technologies to ensure your business stays ahead.</p>
                        </div>
                        <div class="feature-item">
                            <h3>Expert Team</h3>
                            <p>Our team consists of industry experts with years of experience.</p>
                        </div>
                        <div class="feature-item">
                            <h3>Tailored Solutions</h3>
                            <p>Every project is customized to meet your specific needs.</p>
                        </div>
                        <div class="feature-item">
                            <h3>Data-Driven Approach</h3>
                            <p>We analyze data to make informed decisions for your success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Testimonials Section --> */}
            <section class="testimonials" id="testimonials">
                <div class="container">
                    <h2>What Our Clients Say</h2>
                    <div class="testimonial-grid">
                        <div class="testimonial" itemscope itemtype="https://schema.org/Review">
                            <p itemprop="reviewBody">"The Web Consult team delivered exactly what we needed, and our site has never performed better."</p>
                            <h4>- Jane Doe</h4>
                        </div>
                        <div class="testimonial" itemscope itemtype="https://schema.org/Review">
                            <p itemprop="reviewBody">"Professional, reliable, and innovative. Highly recommend for web development projects!"</p>
                            <h4>- John Smith</h4>
                        </div>
                        <div class="testimonial" itemscope itemtype="https://schema.org/Review">
                            <p itemprop="reviewBody">"Thanks to Web Consult, our online presence has skyrocketed. Fantastic work!"</p>
                            <h4>- Emily Clark</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section --> */}
            <section class="contact" id="contact">
                <div class="container">
                    <h2>Get in Touch</h2>
                    <p>We’d love to hear from you. Fill out the form below, and we’ll get back to you shortly.</p>
                    <form class="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </PublicLayout>
    );
}
