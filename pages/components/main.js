import React from 'react';
import CardTour from './cards/card-tour'
import InfoCard from './cards/info-cards'
import Link from 'next/link'

import {
    CompassOutlined 
} from '@ant-design/icons';



 const Main = () =>{
     return(
         <>
            <section className="main-section">
                <span className="__span-tag__">Mcrich</span>
                <h1 className="__heading__main">Best Offer Tours</h1>

                <div className="grid-template-three-col parent-cc">
                    
                    <InfoCard
                        title={`Badian Canyoneering`}
                        subContent=
                        {`Make your Cebu
                         holiday an exciting one with a 
                         canyoneering experience at Badian’s
                         staggering cliffs!`}
                    />

                    <CardTour 
                        title="Badian Canyoneering Admission"
                        rangePrice="₱1,100.00 – ₱1,430.00" 
                    />

                    <CardTour 
                        title="Badian Canyoneering Adventure"
                        rangePrice="₱2,300.00 – ₱3,500.00"
                    />

                </div>

                <div className="grid-template-three-col parent-cc">
            
                    <CardTour
                        title="Oslob Whale Shark Swimming"
                        rangePrice="₱5,000.00 – ₱13,000.00"
                    />
                    <CardTour
                        title="Oslob Whale Shark Watching"
                        rangePrice="₱2,300.00 – ₱3,500.00"
                    />

                    <InfoCard
                        title={`Oslob Canyoneering`}
                        subContent=
                        {`This is a truly once-in-a-lifetime 
                          experience: a swim with the whale sharks of Oslob`}
                    />

                </div>

                <div className="info-get-in-touch">
                    <span><CompassOutlined /></span>
                    <p className="fliner-para">Looking for a custom tour package perfectly tailored for you?</p>
                    <p>We also accept celebrity guest bookings and VIP tour arrangements</p>

                    <button className="get-in-touch-btn">
                        <Link href="/">
                            <a>Get In Touch</a>
                        </Link>
                    </button>
                </div>
            </section>
         </>
     )
 }

 export default Main;