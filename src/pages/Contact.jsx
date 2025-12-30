import React, { useState } from 'react';
import { profile } from '../data/activities';
import { Mail, Linkedin, Send } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Add real form handling logic here
    };

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1>Get in Touch</h1>
                    <p>Open for opportunities, collaborations, and questions.</p>
                </div>

                <div className="grid grid-2" style={{ alignItems: 'start' }}>
                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href={`mailto:${profile.email}`} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                                <Mail color="var(--primary)" />
                                <span style={{ fontWeight: 500 }}>{profile.email}</span>
                            </a>
                            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                                <Linkedin color="#0077b5" />
                                <span style={{ fontWeight: 500 }}>LinkedIn Profile</span>
                            </a>
                            <a href={`https://${profile.telegram}`} target="_blank" rel="noopener noreferrer" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                                <Send color="#229ED9" />
                                <span style={{ fontWeight: 500 }}>Telegram</span>
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                <div style={{ background: '#ecfdf5', color: '#059669', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                    <Send size={28} />
                                </div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you soon.</p>
                                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1rem' }}>Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem' }}>Name</label>
                                    <input type="text" required placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem' }}>Email</label>
                                    <input type="email" required placeholder="hello@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem' }}>Message</label>
                                    <textarea required rows="4" placeholder="How can we work together?" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
