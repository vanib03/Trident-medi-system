import React, { useState, useEffect } from 'react'
import { gasFlowMetersData } from "../../assets/data";
import GasFlowMetersStyles from '../../css/GasFlowMeters.module.css';

function GasFlowMeters () {
    const [gasFlowMeter, setGasFlowMeter] = useState( [] )
    useEffect( () => {
        setGasFlowMeter( gasFlowMeter );
    } );

    return (
        <div className={GasFlowMetersStyles.serviceCardsContainer} >
            {gasFlowMetersData.map( ( gasFlowMeter, i ) => {
                return (
                    <div className={GasFlowMetersStyles.serviceCards} key={i}>
                        <img src={gasFlowMeter.gasFlowMetersImg} className={GasFlowMetersStyles.servicesImg} />
                        <div className={GasFlowMetersStyles.serviceCardTitleContainer}>
                            {/* <label className={GasFlowMetersStyles.serviceCardTitle}>{gasFlowMeter.title}</label> */}
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default GasFlowMeters
