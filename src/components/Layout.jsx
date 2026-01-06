import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav>
                <div className="container nav-content">
                    <Link to="/" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                        Portfolio.
                    </Link>

                    <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', cursor: 'pointer' }}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </div>

                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                        <li><NavLink to="/activities" className={({ isActive }) => isActive || window.location.pathname.includes('/activities') ? "active" : ""}>Activities</NavLink></li>
                        <li><NavLink to="/honors" className={({ isActive }) => isActive ? "active" : ""}>Honors</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>

            <main style={{ flex: 1 }}>
                {children}
            </main>

            <footer>
                <div className="container">
                    <p>© 2025 Student Portfolio. Built for Impact.</p>
                </div>
            </footer>

            <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--bg-color);
            flex-direction: column;
            padding: 1rem;
            border-bottom: 1px solid var(--border);
            text-align: center;
          }
          .nav-links.open { display: flex; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </div>
    );
}
