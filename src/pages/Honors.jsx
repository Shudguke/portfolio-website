import React from 'react';
import { honors } from '../data/activities';
import { Award, Star } from 'lucide-react';

export default function Honors() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1>Honors & Awards</h1>
                    <p>Recognition for academic excellence and national achievements.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {honors.map((honor, index) => (
                        <div key={index} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
                            <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                <Award size={32} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{honor.award}</h3>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        padding: '0.125rem 0.5rem',
                                        borderRadius: '100px',
                                        background: 'var(--text-main)',
                                        color: 'white',
                                        fontWeight: 600
                                    }}>
                                        {honor.year}
                                    </span>
                                </div>
                                <p style={{ margin: 0, color: 'var(--text-main)', fontWeight: 500 }}>{honor.title}</p>
                            </div>
                            <div style={{ textAlign: 'right', minWidth: '100px' }}>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                                    <Star size={14} /> {honor.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
