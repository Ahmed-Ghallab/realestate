import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">{t('contact.title')}</h2>
          <p className="text-muted">{t('contact.subtitle')}</p>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="glass-card p-5 text-center h-100 hover-translate-up transition-all cursor-pointer bg-white">
                <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-success bg-opacity-10 text-success mb-4">
                  <FaWhatsapp size={32} />
                </div>
                <h4 className="fw-bold mb-2 text-dark">{t('contact.whatsapp')}</h4>
                <p className="text-muted mb-0">+20 100 000 0000</p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="mailto:info@oryxapp.com" className="text-decoration-none">
              <div className="glass-card p-5 text-center h-100 hover-translate-up transition-all cursor-pointer bg-white">
                <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-primary bg-opacity-10 text-primary mb-4">
                  <FaEnvelope size={32} />
                </div>
                <h4 className="fw-bold mb-2 text-dark">{t('contact.email')}</h4>
                <p className="text-muted mb-0">info@oryxapp.com</p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="tel:+201000000000" className="text-decoration-none">
              <div className="glass-card p-5 text-center h-100 hover-translate-up transition-all cursor-pointer bg-white">
                <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-info bg-opacity-10 text-info mb-4">
                  <FaPhone size={32} />
                </div>
                <h4 className="fw-bold mb-2 text-dark">{t('contact.phone')}</h4>
                <p className="text-muted mb-0">+20 100 000 0000</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
