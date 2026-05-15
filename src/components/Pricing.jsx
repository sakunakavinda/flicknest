import React from 'react';
import { Users, Clock, Info } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2>Transparent <span className="gold-text">Pricing</span></h2>
        <p className="pricing-subtitle">Choose the perfect duration for your private cinema experience.</p>
      </div>

      <div className="pricing-cards-container">
        {/* Standard Package */}
        <div className="pricing-card standard">
          <div className="card-header">
            <h3>Standard Package</h3>
            <div className="price">
              <span className="amount">2,500</span>
              <span className="currency">LKR</span>
            </div>
            <p className="duration">For 3 hours</p>
          </div>
          <ul className="features-list">
            <li>
              <Users size={18} className="feature-icon" />
              <span>Includes max 4 persons</span>
            </li>
            <li>
              <Users size={18} className="feature-icon addon" />
              <span>Additional person: <strong>+500 LKR</strong></span>
            </li>
            <li>
              <Clock size={18} className="feature-icon addon" />
              <span>Additional hour: <strong>+1,000 LKR</strong></span>
            </li>
          </ul>
        </div>

        {/* Bread Crunch Hours Package */}
        <div className="pricing-card crunch">
          <div className="card-header">
            <h3>Bread Crunch Hours</h3>
            <p className="crunch-description">
              If there are free slots shorter than 3 hours, between already booked standard slots, you can book them for a discounted price. (see schedule)
            </p>
            <div className="crunch-guide">
              <Info size={16} />
              <span><strong>Important:</strong> You must always select the <strong>maximum available duration</strong> when booking a Bread Crunch Hour slot.</span>
            </div>
          </div>
          <div className="crunch-tiers">
            <div className="tier">
              <span className="tier-duration">2.5 Hours for</span>
              <span className="tier-price">2,000 LKR</span>
            </div>
            <div className="tier">
              <span className="tier-duration">2.0 Hours for</span>
              <span className="tier-price">1,500 LKR</span>
            </div>
            <div className="tier">
              <span className="tier-duration">1.5 Hours for</span>
              <span className="tier-price">1,500 LKR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
