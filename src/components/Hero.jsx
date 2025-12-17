import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaApple, FaCheckCircle } from 'react-icons/fa'
import mobileApp from '../assets/img/mobileapp2.png'

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
        <div className="position-absolute top-0 end-0 bg-primary opacity-10 rounded-circle blur-3xl" style={{ width: '600px', height: '600px', filter: 'blur(100px)', transform: 'translate(30%, -30%)' }}></div>
        <div className="position-absolute bottom-0 start-0 bg-info opacity-10 rounded-circle blur-3xl" style={{ width: '500px', height: '500px', filter: 'blur(100px)', transform: 'translate(-30%, 30%)' }}></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 animate__animated animate__fadeInLeft" style={{ zIndex: 1 }}>
            <div className="d-inline-block px-3 py-1 mb-4 rounded-pill bg-white border shadow-sm">
              <span className="text-primary fw-bold small">✨ #1 Real Estate App in Upper Egypt</span>
            </div>
            <h1 className="display-3 fw-bold mb-4 lh-sm" dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>
            <p className="lead mb-5 text-muted" style={{ maxWidth: '500px' }}>
              {t('hero.subtitle')}
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#download" className="btn btn-primary btn-lg rounded-pill px-5 shadow-lg d-flex align-items-center gap-2 hover-shadow transition-all">
                <FaApple size={24} /> {t('hero.download_btn')}
              </a>
              <a href="#contact" className="btn btn-white btn-lg rounded-pill px-5 shadow-sm border d-flex align-items-center gap-2 hover-shadow transition-all">
                {t('hero.contact_btn')}
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 position-relative animate__animated animate__fadeInRight">
            <div className="position-relative d-inline-block">
              <div className="position-absolute top-50 start-50 translate-middle bg-primary opacity-20 rounded-circle blur-3xl" style={{ width: '400px', height: '400px' }}></div>
              <img src={mobileApp} alt="Oryx App Mockup" className="img-fluid position-relative z-1 animate-float" style={{ maxHeight: '500px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }} />
              
              {/* Floating Elements */}
              <div className="position-absolute top-20 start-0 translate-middle-x glass-card p-3 rounded-4 animate-float-delayed d-none d-md-block">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success">
                    <FaCheckCircle size={20} />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold text-dark small">Verified Listings</p>
                    <small className="text-muted">100% Secure</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
