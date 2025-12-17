import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPlus } from 'react-icons/fa'

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    { q: "q1", a: "a1" },
    { q: "q2", a: "a2" },
    { q: "q3", a: "a3" }
  ];

  return (
    <section id="faq" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">{t('faq.title')}</h2>
          <p className="lead text-muted">{t('faq.subtitle')}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((item, index) => (
                <div key={index} className="accordion-item border-0 mb-3 rounded-4 overflow-hidden shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                      {t(`faq.${item.q}`)}
                    </button>
                  </h2>
                  <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                      {t(`faq.${item.a}`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-5">
              <button className="btn btn-outline-primary rounded-pill px-5 py-2 hover-scale transition-all">
                {t('faq.view_all')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
