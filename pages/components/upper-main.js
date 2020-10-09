import React from 'react';
import IconTabs from './tabs-and-pills/icon-tabs'


import SvgIcon1 from '../../static/img/svg/destination.svg'
import SvgIcon2 from '../../static/img/svg/price-tag.svg'
import SvgIcon3 from '../../static/img/svg/smartphone.svg'


const UpperMain  = () =>{
    return(
        <>
            <div className="grid-three-col">
                <IconTabs 
                    title={``}
                    context={``}
                    imgSrc={SvgIcon1} />

                <IconTabs 
                    title={``}
                    context={``}
                    imgSrc={SvgIcon2} />

                <IconTabs 
                    title={``}
                    context={``}
                    imgSrc={SvgIcon3} />
            </div>
        </>
    )
}

export default UpperMain;