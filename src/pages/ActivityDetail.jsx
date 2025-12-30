import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { activities } from '../data/activities';
import { ArrowLeft, CheckCircle, X } from 'lucide-react';

export default function ActivityDetail() {
    const { id } = useParams();
    const activity = activities.find(a => a.id === id);
    const [selectedImage, setSelectedImage] = useState(null);

    if (!activity) {
        return <Navigate to="/activities" replace />;
    }

    return (
        <>
            {/* Lightbox Modal */}
            {selectedImage && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={() => setSelectedImage(null)}>
                    <button style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <X size={48} />
                    </button>
                    <img src={selectedImage} alt="Full view" style={{ maxHeight: '90vh', maxWidth: '100%', borderRadius: '0.5rem' }} />
                </div>
            )}

            <section className="section bg-white" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <Link to="/activities" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
                        <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Activities
                    </Link>

                    <div style={{ maxWidth: '900px' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {activity.duration} • {activity.role}
                        </span>
                        <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>{activity.title}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', maxWidth: '700px' }}>
                            {activity.summary}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>About the Project</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '3rem', lineHeight: '1.8' }}>
                            {activity.description}
                        </p>

                        <h3 style={{ marginBottom: '1.5rem' }}>Key Impact & Results</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {activity.impact.map((point, i) => (
                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <CheckCircle size={20} color="var(--primary)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Gallery</h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {activity.images.map((img, i) => (
                                <div key={i}
                                    onClick={() => setSelectedImage(img)}
                                    style={{ cursor: 'pointer', borderRadius: '0.5rem', overflow: 'hidden', height: '200px', border: '1px solid var(--border)' }}>
                                    <img src={img} alt={`${activity.title} screenshot ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                                </div>
                            ))}
                            {/* Fallback/Authored placeholders if needed, currently using data provided which are local paths */}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) {
           .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}
