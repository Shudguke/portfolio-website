import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/activities';
import { ArrowRight, BookOpen, Award, Mail } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="section bg-white">
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            background: '#eff6ff',
                            color: 'var(--primary)',
                            borderRadius: '100px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>
                            {profile.education[0].badge}
                        </span>
                        <h1>{profile.name}</h1>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            {profile.headline}
                        </h2>
                        <p style={{ fontSize: '1.125rem', maxWidth: '600px', marginBottom: '2rem' }}>
                            {profile.about}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/activities" className="btn btn-primary">View Activities</Link>
                            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
                        </div>
                    </div>

                    <div style={{ flex: '0 0 300px', height: '300px', background: '#e5e7eb', borderRadius: '2rem', overflow: 'hidden' }}>
                        {/* Placeholder for Profile Photo */}
                        <img
                            src="/images/profile.jpg"
                            alt="Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="section">
                <div className="container">
                    <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Education
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {profile.education.map((edu, index) => (
                            <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ marginBottom: '0.25rem' }}>{edu.school}</h3>
                                    <p style={{ margin: 0 }}>{edu.focus}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontWeight: 600 }}>{edu.duration}</div>
                                    {edu.distinctions && <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{edu.distinctions}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Nav */}
            <section className="section bg-white">
                <div className="container">
                    <h3 style={{ marginBottom: '2rem' }}>Explore Portfolio</h3>
                    <div className="grid grid-3">
                        <Link to="/activities" className="card" style={{ display: 'block', textDecoration: 'none' }}>
                            <BookOpen style={{ color: 'var(--primary)', marginBottom: '1rem' }} size={32} />
                            <h4>Activities & Leadership</h4>
                            <p>Impact-driven projects, entrepreneurship, and technical roles.</p>
                            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, marginTop: '1rem' }}>
                                Explore <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </div>
                        </Link>

                        <Link to="/honors" className="card" style={{ display: 'block', textDecoration: 'none' }}>
                            <Award style={{ color: 'var(--primary)', marginBottom: '1rem' }} size={32} />
                            <h4>Honors & Awards</h4>
                            <p>National achievements in academics, innovation, and service.</p>
                            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, marginTop: '1rem' }}>
                                View Awards <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </div>
                        </Link>

                        <Link to="/contact" className="card" style={{ display: 'block', textDecoration: 'none' }}>
                            <Mail style={{ color: 'var(--primary)', marginBottom: '1rem' }} size={32} />
                            <h4>Contact Me</h4>
                            <p>Reach out for collaborations, internships, or inquiries.</p>
                            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, marginTop: '1rem' }}>
                                Get in Touch <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
