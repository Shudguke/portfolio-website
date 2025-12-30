import React from 'react';
import { activities } from '../data/activities';
import ActivityCard from '../components/ActivityCard';

export default function Activities() {
    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <h1>Activities & Leadership</h1>
                    <p style={{ fontSize: '1.25rem' }}>
                        A collection of impactful projects, initiatives, and professional experiences demonstrating leadership and technical expertise.
                    </p>
                </div>

                <div className="grid grid-3">
                    {activities.map(activity => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}
