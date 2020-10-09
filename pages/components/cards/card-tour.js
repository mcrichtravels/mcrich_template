import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Link from 'next/link'

const { Meta } = Card;

const CardTour = ({
    title,
    rangePrice
}) =>{
    return(
        <> 
           <Card
                style={{ width: '100%' }}
                cover={
                    <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

                actions={[
                    <button className="view-button">
                        <Link href="">
                            <a>View Details</a>
                        </Link>
                    </button>
                ]}
              
             >  
                <Meta
                    avatar={<Avatar src="https://mcrichcanyoneering.com/wp-content/themes/travel/assets/logo/main_logo.png" />}
                    title={title}
                    description={rangePrice}
                />
            </Card>
        </>
    )
}

export default CardTour;


CardTour.PropTypes ={
    title :  PropTypes.string,
    rangePrice : PropTypes.string,
}