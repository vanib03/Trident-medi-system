import React, { useState, useEffect } from 'react'
import { operationTheatrePendantData } from "../../assets/data";
import OperationTheatrePendantStyles from '../../css/OperationTheatrePendant.module.css';

function OperationTheatrePendant () {

    const [operationTheatrePendant, setOperationTheatrePendant] = useState( [] )
    useEffect( () => {
        setOperationTheatrePendant( operationTheatrePendant );
    }, [] );
    return (
        <div className={OperationTheatrePendantStyles.serviceCardsContainer} >
            {operationTheatrePendantData.map( ( operationTheatrePendant, i ) => {
                return (
                    <div className={OperationTheatrePendantStyles.serviceCards} key={i}>
                        <img src={operationTheatrePendant.operationTheatrePendantImg} className={OperationTheatrePendantStyles.servicesImg} />
                        <div className={OperationTheatrePendantStyles.serviceCardTitleContainer}>
                            {/* <label className={OperationTheatrePendantStyles.serviceCardTitle}>{operationTheatrePendant.title}</label> */}
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default OperationTheatrePendant
