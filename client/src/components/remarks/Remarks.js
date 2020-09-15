import React, { useEffect, useContext } from 'react'
import RemarkContext from '../../context/RemarkContext';

import RemarkItem from './RemarkItem';

const Remarks = () => {
    const remarkContext = useContext(RemarkContext);
    const { getRemarks, remarks } = remarkContext;

    useEffect(() => {
        getRemarks();
        console.log(remarks)
    }, [])

    return (
        <div>
            {remarks !== null  ? (remarks.map((remark) => <RemarkItem name={remark.name} comment={remark.remarks} />)) : <h1>Loading</h1>}
        </div>
    )
}

export default Remarks
