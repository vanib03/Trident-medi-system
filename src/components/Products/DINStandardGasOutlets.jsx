import React, { useState, useEffect } from 'react'
import { dINStandardGasOutletsData } from "../../assets/data";
import DINStandardGasOutletStyles from '../../css/DINStandardGasOutlets.module.css';

function DINStandardGasOutlets () {
    const [gasPipeLineSystem, setGasPipeLineSystem] = useState( [] )
    useEffect( () => {
        setGasPipeLineSystem( gasPipeLineSystem );
    } );
    return (
        <div className={DINStandardGasOutletStyles.serviceCardsContainer} >
            {dINStandardGasOutletsData.map( ( dinStandardGasOutlet, i ) => {
                return (
                    <div className={DINStandardGasOutletStyles.serviceCards} key={i}>
                        <img src={dinStandardGasOutlet.gasPipeLineImg} className={DINStandardGasOutletStyles.servicesImg} />
                        <div className={DINStandardGasOutletStyles.serviceCardTitleContainer}>
                            {/* <label className={DINStandardGasOutletStyles.serviceCardTitle}>{dinStandardGasOutlet.title}</label> */}
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default DINStandardGasOutlets
