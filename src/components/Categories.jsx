import React from 'react'
import { useTranslation } from 'react-i18next'

// Import Images
import landImg from '../assets/img/Categories/land.jpg'
import adminImg from '../assets/img/Categories/Administrative.jpg'
import towerImg from '../assets/img/Categories/Tower.jpg'
import studentImg from '../assets/img/Categories/StudentHousing.jpg'
import aptImg from '../assets/img/Categories/Apartment.jpg'
import buildingImg from '../assets/img/Categories/Building.jpg'
import villaImg from '../assets/img/Categories/Villa.jpg'
import shopImg from '../assets/img/Categories/Shop.jpg'

export default function Categories() {
  const { t } = useTranslation();
  
  const categories = [
    { key: "Land", img: landImg },
    { key: "Administrative", img: adminImg },
    { key: "Tower", img: towerImg },
    { key: "Student Housing", img: studentImg },
    { key: "Apartment", img: aptImg },
    { key: "Building", img: buildingImg },
    { key: "Villa", img: villaImg },
    { key: "Shop", img: shopImg }
  ];

  return (
    <section id="categories" className="py-5">
      <div className="container">
        <div className="text-center mb-5 animate__animated animate__fadeInUp">
          <h2 className="fw-bold display-5 mb-3">{t('categories.title')}</h2>
          <p className="lead text-muted">{t('categories.subtitle')}</p>
        </div>
        <div className="row g-4 justify-content-center">
          {categories.map((cat, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="category-card position-relative rounded-4 overflow-hidden shadow-sm hover-shadow transition-all cursor-pointer h-100">
                <div className="ratio ratio-1x1">
                  <img src={cat.img} alt={t(`categories.items.${cat.key}`)} className="w-100 h-100 object-fit-cover transition-transform" />
                </div>
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark text-white text-center">
                  <h5 className="mb-0 fw-bold text-shadow">{t(`categories.items.${cat.key}`, cat.key)}</h5>
                </div>
                {/* Overlay on hover */}
                <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 opacity-0 transition-all p-3 text-center">
                  <div>
                    <h5 className="fw-bold text-white mb-2">{t(`categories.items.${cat.key}`, cat.key)}</h5>
                    <p className="text-white-50 small mb-0">{t(`categories.desc.${cat.key}`, 'Explore this category')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
