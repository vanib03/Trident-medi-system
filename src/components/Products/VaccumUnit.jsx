import React, { useState, useEffect } from 'react'
import { vaccumUnitData } from "../../assets/data";
import VaccumUnitStyles from '../../css/VaccumUnit.module.css';

function VaccumUnit () {

    const [vaccumUnit, setVaccumUnit] = useState( [] )
    useEffect( () => {
        setVaccumUnit( vaccumUnit );
    }, [vaccumUnit] );
    return (
        <div className={VaccumUnitStyles.serviceCardsContainer} >
            {vaccumUnitData.map( ( vaccumUnit, i ) => {
                return (
                    <div className={VaccumUnitStyles.serviceCards} key={i}>
                        <img alt="alternate text" src={vaccumUnit.vaccumUnitImg} className={VaccumUnitStyles.servicesImg} />
                        <div className={VaccumUnitStyles.serviceCardTitleContainer}>
                            {/* <label className={VaccumUnitStyles.serviceCardTitle}>{vaccumUnit.title}</label> */}
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default VaccumUnit
