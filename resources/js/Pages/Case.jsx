import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';

export default function Case({ auth }) {
    return (
        <PublicLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Ervotech" />

            <section class="hero case-hero">
                <div class="container">
                    <h1>Success Stories</h1>
                    <p>Explore how we've helped businesses achieve their digital goals.</p>
                </div>
            </section>

            {/* <!-- Case Studies --> */}
            <section class="case-studies">
                <div class="container">
                    <h2>Our Case Studies</h2>
                    <p>Check back soon for detailed success stories.</p>
                </div>
            </section>
        </PublicLayout>
    );
}
