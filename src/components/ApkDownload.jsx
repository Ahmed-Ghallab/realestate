import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaAndroid, FaTv, FaDownload, FaCheckCircle } from 'react-icons/fa'

export default function ApkDownload() {
  const { t } = useTranslation();

  return (
    <section id="apk-download" className=" py-5 bg-dark position-relative overflow-hidden">
      {/* Abstract Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark">
         <div className="position-absolute top-50 start-50 translate-middle bg-primary opacity-25 blur-3xl rounded-circle" style={{ width: '600px', height: '600px' }}></div>
      </div>

      <div className="container position-relative z-1">
        <div className="glass-card border border-white border-opacity-10 p-5 rounded-5 text-white">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-25 mb-4">
                <FaTv className="text-dark" />
                <span className="small fw-bold text-uppercase tracking-wider">Android TV Compatible</span>
              </div>
              
              <h2 className="display-5 fw-bold mb-4 text-dark">{t('apk.title')}</h2>
              <p className="lead opacity-75 mb-5 text-dark" style={{ maxWidth: '600px' }}>
                {t('apk.subtitle')}
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="btn btn-primary btn-lg rounded-pill px-5 d-flex align-items-center justify-content-center gap-3 hover-scale shadow-lg border-0 bg-gradient-primary">
                  <FaDownload />
                  <div className="text-start lh-1">
                    <span className="d-block small opacity-75">{t('apk.btn_direct')}</span>
                    <span className="fw-bold">{t('apk.btn_download')}</span>
                  </div>
                </button>
                
                <div className="d-flex align-items-center gap-4 px-3">
                   <div className="d-flex align-items-center gap-2">
                     <FaCheckCircle className="text-success" />
                     <span className="small opacity-75 text-success">Secure</span>
                   </div>
                   <div className="d-flex align-items-center gap-2">
                     <FaCheckCircle className="text-success" />
                     <span className="small opacity-75 text-success">Fast</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 text-center">
               <div className="position-relative d-inline-block">
                 <FaAndroid size={300} className="text-dark opacity-10" />
                 <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                   <h3 className="fw-bold mb-0 text-primary">APK</h3>
                   <span className="small opacity-50 text-primary">{t('apk.version')}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
