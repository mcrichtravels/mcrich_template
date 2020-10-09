import  React from 'react';
import { Select } from 'antd';
import DateBookable from '../date-picker/date'
import BookableDate from '../date-picker/date';


const BannerTabs = () =>{

    const { Option } = Select;

    const onChangeHandler = (e)=>{
    }

    return(
        <>
            <div className="tabs--bookable">
                <div className="grid-form-data">
                    
                    <div className="grid-child">
                        <label>Select Tour</label>
                        <Select
                            defaultValue="lucy" 
                            style={{ width: '100%' }} 
                            onChange={onChangeHandler}>

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                            
                        </Select>
                    </div>

                    <div className="grid-child">
                        <label>Select Date</label>
                        <BookableDate/>
                    </div>

                    <div className="grid-child text-center">
                       <button className="bookable--tour-btn">
                            <span>Book Now</span>
                       </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BannerTabs;