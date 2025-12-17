import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'
import logo from '../assets/img/logos/OryxLogo.png'

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-1 transition-all ${scrolled ? 'glass-effect shadow-sm' : 'bg-transparent navbar-dark'}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Oryx Logo" style={{ height: '50px' }} />
        </Link>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#hero">{t('navbar.home')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">{t('navbar.about')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#features">{t('navbar.features')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#categories">{t('navbar.categories')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#download">{t('navbar.download')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t('navbar.contact')}</a></li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button className={`btn btn-link text-decoration-none dropdown-toggle d-flex align-items-center gap-1 ${scrolled ? 'text-dark' : 'text-white'}`} type="button" data-bs-toggle="dropdown">
                <FaGlobe size={20} className="text-primary" />
                <span className="text-uppercase fw-bold small">{i18n.language}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-4 overflow-hidden">
                <li><button className="dropdown-item py-2" onClick={() => changeLanguage('en')}>🇺🇸 English</button></li>
                <li><button className="dropdown-item py-2" onClick={() => changeLanguage('ar')}>🇪🇬 العربية</button></li>
                <li><button className="dropdown-item py-2" onClick={() => changeLanguage('ru')}>🇷🇺 Русский</button></li>
              </ul>
            </div>
            <a href="#download" className="btn btn-primary rounded-pill px-4 shadow-sm d-none d-lg-block">
              {t('navbar.download')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
