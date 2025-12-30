import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export default function ActivityCard({ activity }) {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ marginBottom: '1rem' }}>
                <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)'
                }}>
                    {activity.role}
                </span>
                <h3 style={{ margin: '0.5rem 0' }}>{activity.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <Calendar size={14} />
                    {activity.duration}
                </div>
            </div>

            <p style={{ flex: 1, marginBottom: '1.5rem' }}>{activity.summary}</p>

            <Link to={`/activities/${activity.id}`} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifySelf: 'flex-end', width: 'fit-content' }}>
                View Details <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </Link>
        </div>
    );
}
