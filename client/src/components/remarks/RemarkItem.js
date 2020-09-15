import React from 'react';

import { Typography } from 'antd'
const { Title, Paragraph } = Typography

const RemarkItem = ({ name, comment}) => {


    return (
        <div style={remarkBox}>
            <Title level={5}>{name}</Title>
            <Paragraph>{comment}</Paragraph>
        </div>
    )
}

const remarkBox = {
    width: '80%',
    height: '8rem',
    backgroundColor: 'red',
    margin: '50px',
    padding: '25px',
}
export default RemarkItem
