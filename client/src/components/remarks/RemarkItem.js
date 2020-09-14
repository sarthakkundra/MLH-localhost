import React from 'react';
import { Typography } from 'antd'
const { Title, Paragraph } = Typography

function RemarkItem() {
    return (
        <div style={remarkBox}>
            <Title level={5}>Test Name</Title>
            <Paragraph>lorem20</Paragraph>
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
