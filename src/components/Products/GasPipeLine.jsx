import React, { useState, useEffect } from 'react'
import { medicalGasPipelineData } from "../../assets/data";
import ProductsStyles from '../../css/Products.module.css';

function GasPipeLine () {
    const [gasPipeLineSystem, setGasPipeLineSystem] = useState( [] )
    useEffect( () => {
        setGasPipeLineSystem( gasPipeLineSystem );
    } );
    return (
        <div className={ProductsStyles.serviceCardsContainer} >
            {medicalGasPipelineData.map( ( gasPipeLine, i ) => {
                return (
                    <div className={ProductsStyles.serviceCards} key={i}>
                        <img src={gasPipeLine.gasPipeLineImg} className={ProductsStyles.servicesImg} />
                        <div className={ProductsStyles.serviceCardTitleContainer}>
                            {/* <label className={ProductsStyles.serviceCardTitle}>{gasPipeLine.title}</label> */}
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default GasPipeLine
