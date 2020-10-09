import React from 'react';
import PropTypes from 'prop-types';

 const InfoCards  = ({
    title,
    subContent
 }) =>{
    return(
         <>
            <div className="info-cards">
                <h1>
                    {title}
                </h1>
                <p>
                    {subContent}
                </p>
            </div>
         </>
     )
}

export default InfoCards;

 InfoCards.PropTypes = {
    title :  PropTypes.string,
    subContent : PropTypes.string
 }