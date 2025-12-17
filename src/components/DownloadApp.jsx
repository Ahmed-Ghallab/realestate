import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import downloadMockup from '../assets/img/download2.png'
import qrCode from '../assets/img/QRcode.png'

export default function DownloadApp() {
  const { t } = useTranslation();

  return (
    <section id="download" className="py-5 overflow-hidden">
      <div className="container">
        <div className="rounded-5 overflow-hidden position-relative bg-primary text-white shadow-lg">
          <div className="row g-0">
            <div className="col-lg-6 p-5 d-flex flex-column justify-content-center position-relative z-1">
              <h2 className="display-5 fw-bold mb-4">{t('download.title')}</h2>
              <p className="lead mb-5 opacity-90">{t('download.subtitle')}</p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <button className="btn btn-light btn-lg d-flex align-items-center justify-content-center gap-2 rounded-pill px-4 shadow-sm text-primary fw-bold hover-scale transition-all">
                  <FaGooglePlay size={24} /> 
                  <div className="text-start lh-1">
                    <small className="d-block opacity-75" style={{ fontSize: '0.7rem' }}>GET IT ON</small>
                    Google Play
                  </div>
                </button>
                <button className="btn btn-outline-light btn-lg d-flex align-items-center justify-content-center gap-2 rounded-pill px-4 hover-scale transition-all">
                  <FaApple size={24} />
                  <div className="text-start lh-1">
                    <small className="d-block opacity-75" style={{ fontSize: '0.7rem' }}>Download on the</small>
                    App Store
                  </div>
                </button>
              </div>

              <div className="d-flex align-items-center gap-4">
                <div className="bg-white p-2 rounded-3 shadow-lg d-inline-block">
                  <img src={qrCode} alt="Scan to Download" style={{ width: '100px', height: '100px' }} />
                </div>
                <div>
                  <p className="mb-0 fw-bold">{t('download.scan')}</p>
                  <small className="opacity-75">For Android & iOS</small>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 position-relative min-h-400 d-none d-lg-block">
               <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
               <img src={downloadMockup} alt="App Preview" className="position-absolute bottom-0 end-0 w-75 animate-float" style={{ maxHeight: '400px', objectFit: 'contain', filter: 'drop-shadow(-20px 0 40px rgba(0,0,0,0.2))' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
