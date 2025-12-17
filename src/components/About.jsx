import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3">{t('about.title')}</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#F10102', margin: '0 auto' }}></div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
             <div className="glass-card p-5 rounded text-center position-relative overflow-hidden" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div className="position-absolute top-0 start-0 w-100 h-100 bg-light opacity-50" style={{ zIndex: -1 }}></div>
               <h4 className="text-muted fw-bold">ORYX MISSION</h4>
             </div>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">{t('about.heading')}</h3>
            <p className="text-muted mb-4 lead">
              {t('about.desc1')}
            </p>
            <p className="text-muted">
              {t('about.desc2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
