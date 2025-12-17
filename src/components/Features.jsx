import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaBuilding, FaBullhorn, FaHandshake } from 'react-icons/fa'

export default function Features() {
  const { t } = useTranslation();

  const features = [
    { icon: FaBuilding, key: "listings", color: "text-primary" },
    { icon: FaBullhorn, key: "marketing", color: "text-danger" },
    { icon: FaHandshake, key: "consultancy", color: "text-success" }
  ];

  return (
    <section id="features" className="py-5 bg-light position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">{t('features.title')}</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>{t('features.subtitle')}</p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="glass-card p-4 h-100 hover-translate-up transition-all border-0 shadow-sm bg-white text-center">
                <div className={`d-inline-flex align-items-center justify-content-center p-4 rounded-circle bg-light mb-4 ${feature.color} bg-opacity-10`}>
                  <feature.icon size={40} />
                </div>
                <h4 className="fw-bold mb-3">{t(`features.items.${feature.key}.title`)}</h4>
                <p className="text-muted mb-0">{t(`features.items.${feature.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
