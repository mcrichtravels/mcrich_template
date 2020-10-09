import React, {useEffect, useState} from 'react';



/* Slick React */
import Slider from "react-slick";


const LowerMain = ()=>{

    const [mobState, __functState] = useState(false);

    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 


      console.log(mobState);

    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: (mobState) ? 1 : 4,
        slidesToScroll: 1,
     };

    // Temporary Links
    const tempoLinks = [
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Travelguycebu-Oslob-Whaleshark-4-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/kkday-2-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/moalboal-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Sea-Turtles-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Travelguycebu-Oslob-Whaleshark-3-1-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Travelguycebu-Oslob-Whaleshark-2-1-300x300.jpg'
    ]


    return(
        <>
            <section className="slider-section">
                
                <h1>
                    #McrichTravels
                </h1>

                <Slider {...settings} >
                    {
                        tempoLinks.map((sr, i)=>{
                            console.log(sr)
                            return (
                                <div className="photo-slider">
                                    <img src={sr}/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </section>
        </>
    )
}

export default LowerMain;