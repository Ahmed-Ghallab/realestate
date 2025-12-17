import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import qrCode from '../assets/img/QRcode.png'

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-4 mb-5 align-items-center">
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 mb-4">
               <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                 <span className="fw-bold text-white">O</span>
               </div>
               <h4 className="fw-bold mb-0">ORYX</h4>
            </div>
            <p className="text-white-50 mb-4" style={{ maxWidth: '400px' }}>
              The first specialized platform for property listings in Upper Egypt. 
              Connecting you with your dream property.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/share/1CLihdN1xU/" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center hover-bg-primary border-0 bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}><FaFacebook size={18} /></a>
              <a href="https://www.instagram.com/oryx_app_egypt" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center hover-bg-primary border-0 bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}><FaInstagram size={18} /></a>
              <a href="https://www.linkedin.com/company/oryxappegypt/" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center hover-bg-primary border-0 bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}><FaLinkedin size={18} /></a>
            </div>
          </div>
          
          <div className="col-6 col-lg-2">
            <h5 className="fw-bold mb-4">{t('footer.company')}</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#about" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.about')}</a></li>
              <li><a href="#features" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.services')}</a></li>
              <li><a href="#contact" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.contact')}</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.careers')}</a></li>
            </ul>
          </div>
          
          <div className="col-6 col-lg-2">
            <h5 className="fw-bold mb-4">{t('footer.support')}</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.help')}</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-white transition-all">{t('footer.faqs')}</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="fw-bold mb-4">{t('footer.newsletter')}</h5>
            <p className="text-white-50 mb-3">{t('footer.subscribe_desc')}</p>
            <div className="input-group bg-white bg-opacity-10 rounded-pill p-1 border border-white border-opacity-10">
              <input type="email" className="form-control bg-transparent border-0 text-white shadow-none ps-3" placeholder={t('footer.email_placeholder')} />
              <button className="btn btn-primary rounded-pill px-4">{t('footer.subscribe_btn')}</button>
            </div>
            
            <div className="mt-4 d-inline-flex align-items-center gap-3 bg-white bg-opacity-10 p-2 rounded-4 pe-4">
              <img src={qrCode} alt="WhatsApp QR" style={{ width: '50px', height: '50px' }} className="rounded-3" />
              <div className="d-flex flex-column">
                <span className="fw-bold small text-white">{t('footer.whatsapp_chat')}</span>
                <small className="text-white-50" style={{ fontSize: '0.7rem' }}>Scan to chat</small>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-top border-white border-opacity-10 pt-4 text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small className="text-white-50 mb-2 mb-md-0">{t('footer.rights')}</small>
          <div className="d-flex gap-3">
            <small className="text-white-50">{t('footer.privacy_short')}</small>
            <small className="text-white-50">{t('footer.terms_short')}</small>
            <small className="text-white-50">{t('footer.sitemap')}</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
