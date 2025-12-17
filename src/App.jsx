import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Categories from './components/Categories'
import Cities from './components/Cities'
import DownloadApp from './components/DownloadApp'
import ApkDownload from './components/ApkDownload'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Categories />
      <Cities />
      <DownloadApp />
      <ApkDownload />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}