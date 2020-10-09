import React from 'react'
import VideoBanner from '@/static/vid/banner.mp4'
import BookableTabs from './tabs-and-pills/banner-tabs'


const Banner = () =>{


	return(
		<>	
		 	<section className="video-banner">
                <video autoPlay loop muted id="myVideo">
                    <source src={VideoBanner} type="video/mp4"></source>
                    <source src={VideoBanner} type="video/ogg"></source>
                </video>

                <div className="heading-banner-section">
                    <h1 className="heading-letters">
                        <span>Travel And Explore</span>
                        <span>Canyoneering</span>
                    </h1> 
                    <p className="subheading-tag">
                    	Jump, dive, swim and pump your adrenaline 
                    	in a one of a kind canyoneering activity 
                    	in the pristine waters of Kawasan Falls, Badian, Cebu.
                    </p>
                </div>
            </section>

            {/*Bookable Forms*/}
            <BookableTabs/>
            
		</>	
	)
}

export default Banner;