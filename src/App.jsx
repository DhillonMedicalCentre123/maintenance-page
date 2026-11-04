import React from "react";
import "./App.css";

const socialMedia = [
  {
    name: "Instagram",
    label: "Instagram",
    url: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    label: "Facebook",
    url: "https://www.facebook.com/",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "linkedin",
  },
  {
    name: "WhatsApp",
    label: "WhatsApp",
    url: "https://wa.me/6281234567890",
    icon: "whatsapp",
  },
];

function SocialIcon({ type }) {
  const icons = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="6" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
    facebook: (
      <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13.4 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5Z" />
        <path d="M8.5 8.5c.5 2.5 2.5 4.5 5 5l1.2-1.2 2 1c-.2 1.5-1.2 2.3-2.7 2.1-3.5-.5-6.5-3.5-7-7-.2-1.5.6-2.5 2.1-2.7l1 2-1.6.8Z" />
      </>
    ),
  };

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function App() {
  return (
    <main className="maintenance-page">
      <div className="background-decoration decoration-one" />
      <div className="background-decoration decoration-two" />

      <header className="navbar">
        <a href="/" className="brand" aria-label="Beranda">
          <div className="brand-icon">
            <span />
            <span />
            <span />
          </div>
          <span className="brand-name">
            MY<span>APP</span>
          </span>
        </a>

        <div className="status-badge">
          <span className="status-dot" />
          System Maintenance
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            WE’LL BE BACK SOON
          </div>

          <h1>
            Kami Sedang
            <br />
            <span>Melakukan</span>
            <br />
            Maintenance.
          </h1>

          <p className="hero-description">
            Saat ini website kami sedang dalam proses pemeliharaan untuk
            menghadirkan pengalaman layanan yang lebih baik. Kami akan segera
            kembali dengan pembaruan dan peningkatan terbaik untuk Anda.
          </p>

          <div className="notice">
            <div className="notice-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 7h.01" />
              </svg>
            </div>

            <div>
              <h3>Tetap Terhubung dengan Kami</h3>
              <p>
                Silakan kunjungi media sosial resmi kami untuk mendapatkan
                informasi dan berita terbaru.
              </p>
            </div>
          </div>

          <a href="#social-media" className="primary-button">
            Kunjungi Media Sosial
            <span className="button-arrow">→</span>
          </a>

          <p className="support-text">
            Membutuhkan bantuan? Hubungi tim kami melalui media sosial resmi.
          </p>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="illustration-card">
            <div className="illustration-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="window-label">WEBSITE STATUS</span>
            </div>

            <div className="illustration-content">
              <div className="gear-container">
                <div className="gear gear-large">⚙</div>
                <div className="gear gear-small">⚙</div>
              </div>

              <div className="progress-circle">
                <div className="progress-inner">
                  <span className="progress-number">01</span>
                  <span className="progress-label">UPDATING</span>
                </div>
              </div>

              <div className="progress-bars">
                <span />
                <span />
                <span />
              </div>

              <p className="visual-caption">Improving your experience</p>
            </div>

            <div className="illustration-footer">
              <span className="footer-status-dot" />
              Maintenance in progress
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">✦</span>
            <div>
              <strong>Better Experience</strong>
              <small>Something better is coming</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <div className="check-icon">✓</div>
            <div>
              <strong>We’ll be back</strong>
              <small>Thank you for your patience</small>
            </div>
          </div>
        </div>
      </section>

      <section className="social-section" id="social-media">
        <div className="social-heading">
          <span className="section-label">STAY CONNECTED</span>
          <h2>Ikuti Informasi Terbaru Kami</h2>
          <p>
            Dapatkan informasi terbaru, pengumuman, dan perkembangan layanan
            melalui kanal resmi kami.
          </p>
        </div>

        <div className="social-list">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label={`Kunjungi ${social.label}`}
            >
              <div className={`social-icon ${social.icon}`}>
                <SocialIcon type={social.icon} />
              </div>

              <span>{social.label}</span>

              <span className="social-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-line" />

        <p>© {new Date().getFullYear()} GetTheAPP. All rights reserved.</p>

        <p className="footer-message">
          Terimakasih Sudah Mengunjungi Website Kami, Kami Akan Segera Kembali.
        </p>
      </footer>
    </main>
  );
}

export default App;
