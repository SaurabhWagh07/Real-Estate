import React from 'react';
import './Companies.css';

// import prologis from '../Assets/prologis.png';
// import tower from '../Assets/tower.png';
// import equinix from '../Assets/equinix.png';
// import realty from '../Assets/realty.png';

function Companies() {
  return (
    <section className='c-wrapper'>
       <div className="paddings innerWidth flexCenter c-container">
        <img src={'Assets/prologis.png'} alt="" />
        <img src={'Assets/tower.png'} alt="" />
        <img src={'Assets/equinix.png'} alt="" />
        <img src={'Assets/realty.png'} alt="" />
       </div>
    </section>
  )
}

export default Companies