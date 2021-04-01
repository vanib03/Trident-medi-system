import React, { useState, useEffect } from 'react'
import { iCUBedHeadUnitSystemData } from "../../assets/data";
import ICUBedHeadStyles from '../../css/ICUBedHeadStyles.module.css';

function ICUBedHeadUnitSystem () {

    const [iCUBedHeadUnitSystem, setICUBedHeadUnitSystem] = useState( [] )
    useEffect( () => {
        setICUBedHeadUnitSystem( iCUBedHeadUnitSystem );

    } );
    return (
        <div className={ICUBedHeadStyles.serviceCardsContainer} id="test">
            {iCUBedHeadUnitSystemData.map( ( iCUBedHeadUnit, i ) => {
                return (
                    <div className={ICUBedHeadStyles.serviceCards} key={i}>
                        <img alt="alternate text" src={iCUBedHeadUnit.gasPipeLineImg} className={ICUBedHeadStyles.servicesImg} />
                        <div className={ICUBedHeadStyles.serviceCardTitleContainer}>
                            {/* <label className={ICUBedHeadStyles.serviceCardTitle}>{iCUBedHeadUnit.title}</label> */}
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default ICUBedHeadUnitSystem
