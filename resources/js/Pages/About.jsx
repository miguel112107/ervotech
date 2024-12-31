import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';

export default function Gallery({ auth }) {
    return (
        <PublicLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Ervotech" />

            {/* <!-- Hero Section --> */}
    <section class="hero about-hero">
        <div class="container">
            <h1>About Us</h1>
            <p>Discover the story behind Ervotech and our commitment to excellence in web consulting.</p>
        </div>
    </section>

    {/* <!-- Story Section --> */}
    <section class="about-story">
        <div class="container">
            <h2>Our Story</h2>
            <p>Founded in [Year], Ervotech started with a vision to revolutionize web consulting by offering tailored solutions...</p>
        </div>
    </section>

    {/* <!-- Values Section --> */}
    <section class="about-values">
        <div class="container">
            <h2>Our Core Values</h2>
            <ul>
                <li><strong>Innovation:</strong> Pushing boundaries with creative solutions.</li>
                <li><strong>Integrity:</strong> Transparent and honest in all engagements.</li>
                <li><strong>Collaboration:</strong> Working closely with clients to achieve goals.</li>
            </ul>
        </div>
    </section>

    {/* <!-- Team Section --> */}
    <section class="about-team">
        <div class="container">
            <h2>Meet Our Team</h2>
            <p>Get to know the talented individuals driving Ervotech’s success.</p>
        </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section class="about-cta">
        <div class="container">
            <h2>Ready to Work With Us?</h2>
            <a href="contact.html" class="primary-btn">Get in Touch</a>
        </div>
    </section>
        </PublicLayout >
    );
}
