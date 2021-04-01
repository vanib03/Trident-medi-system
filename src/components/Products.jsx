import React from 'react'
import Header from './Header';
import SectionTitles from '../library/SectionTitle';
import Title from '../library/Title';
import GasPipeLine from './Products/GasPipeLine';
import ICUBedHeadUnitSystem from './Products/ICUBedHeadUnitSystem';
import DINStandardGasOutlets from './Products/DINStandardGasOutlets';
import VaccumUnit from './Products/VaccumUnit';
import GasFlowMeter from './Products/GasFlowMeters';

import OperationTheatrePendant from './Products/OperationTheatrePendant';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Products () {

    const pageTransition = {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    };

    return (
        <>

            <Header pageName="products" />
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                <Title pageTitle="PRODUCTS" />
                {/* <SectionTitles title="Medical Gas Pipeline Unit System" />
            <GasPipeLine /> */}
                <SectionTitles title="ICU Bed Head Unit System" />
                <ICUBedHeadUnitSystem />
                <SectionTitles title="DIN Standard Gas Outlets" />
                <DINStandardGasOutlets />

                <SectionTitles title="Vacuum Ward" />
                <VaccumUnit />

                <SectionTitles title="Medical Gas Flow Meters" />
                <GasFlowMeter />

                <SectionTitles title="Operation Theatre Pendant" />
                <OperationTheatrePendant />
                <Footer />
            </motion.div>
        </>
    )
}

export default Products
