import React from "react";
import landing from "../assets/landing.jpeg";
import landing11 from "../assets/landing11.jpeg";
import landing12 from "../assets/landing12.jpeg";
import landing13 from "../assets/landing13.jpeg";
import landing14 from "../assets/landing14.jpeg";
import landing1 from "../assets/landing1.jpeg";
import landing2 from "../assets/landing2.jpeg";
import landing3 from "../assets/landing3.jpeg";
import landing4 from "../assets/landing4.jpeg";
import landing5 from "../assets/landing5.jpeg";
import landing6 from "../assets/landing6.jpeg";
import landing7 from "../assets/landing7.jpeg";
import landing8 from "../assets/landing8.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <img src={landing} alt="landing" className="landing-img" />
      <div>
          <h4>Our aim is to excel through quality, consistency and constant innovation. We function as an effective and efficient bridge between Indian farmers and buyers across the world  for high-quality organic produce without relying on the middlemen.An integrated approach is followed by us for delivering the best organic food for everyone.</h4>
      </div>
      <div className="features">
        <div>
          <img src={landing11} alt="ls" />
          <h3>High Nutritional Value</h3>
          <p>Organic foods preserve far more natural vitamins and minerals</p>
        </div>
        <div>
          <img src={landing12} alt="ls" />
          <h3>No Chemicals & Pesticides</h3>
          <p>We don’t use artificial fertilisers or additives in our food</p>
        </div>
        <div>
          <img src={landing13} alt="ls" />
          <h3>Certified Organic Sources</h3>
          <p>Our products are strictly quality controlled and independently verified</p>
        </div>
        <div>
          <img src={landing14} alt="ls" />
          <h3>Preserves the Environment</h3>
          <p>Sustainable farming ensures soil conversation & reduced air pollution</p>
        </div>
      </div>
      <div className="items-landing">
          <img src={landing1} alt="ls" />
          <img src={landing2} alt="ls" />
          <img src={landing3} alt="ls" />
          <img src={landing4} alt="ls" />
          <img src={landing5} alt="ls" />
          <img src={landing6} alt="ls" />
          <img src={landing7} alt="ls" />
          <img src={landing8} alt="ls" />
      </div>
      <div className='motto'>
        
      </div>
        <button><Link to="/products" style={{textDecoration: "none",color: "black"}}>Start Shopping</Link></button>
    </div>
  );
}
