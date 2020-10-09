import React from 'react'
import moment from 'moment';

import { DatePicker, Space } from 'antd';

const BookableDate = (props)=>{

    function onChange(date, dateString) {
        console.log(date, dateString);
    }


    return (
        <>
            <Space direction="horizontal" size={100}>
                <DatePicker onChange={onChange} />
            </Space>
        </>
    ) 
}

export default BookableDate;