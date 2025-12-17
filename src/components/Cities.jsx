import React from 'react'
import { useTranslation } from 'react-i18next'

// Import Images
import newQenaImg from '../assets/img/cities/NewQena.png'
import westQenaImg from '../assets/img/cities/1747781469.png' // Assuming this is West Qena based on context
import qenaGovImg from '../assets/img/cities/QenaGovernorate.jpg'
import amalCityImg from '../assets/img/cities/AmalCity.jpg'

export default function Cities() {
  const { t } = useTranslation();
  
  const citiesData = [
    { name: "New Qena", img: newQenaImg },
    { name: "West Qena", img: westQenaImg },
    { name: "Qena Governorate", img: qenaGovImg },
    { name: "Al Amal City", img: amalCityImg },
    // Reusing images for other cities as placeholders since only 4 images were provided
    { name: "Red Sea", img: newQenaImg }, 
    { name: "Luxor", img: westQenaImg },
    { name: "Aswan", img: qenaGovImg },
    { name: "Sohag", img: amalCityImg }
  ];

  // Duplicate for seamless loop
  const allCities = [...citiesData, ...citiesData];

  return (
    <section id="cities" className="py-5 bg-light overflow-hidden">
      <div className="container-fluid p-0">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">{t('cities.title')}</h2>
          <p className="text-muted">{t('cities.subtitle')}</p>
        </div>
        
        <div className="marquee-container">
          <div className="marquee-content gap-5 py-4">
            {allCities.map((city, index) => (
              <div key={index} className="text-center group cursor-pointer" style={{ minWidth: '150px' }}>
                <div className="position-relative d-inline-block mb-3">
                  <div className="rounded-circle overflow-hidden shadow-lg border border-4 border-white transition-transform hover-scale" style={{ width: '120px', height: '120px' }}>
                    <img src={city.img} alt={city.name} className="w-100 h-100 object-fit-cover" />
                  </div>
                </div>
                <h5 className="fw-bold text-dark mb-0">{city.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
