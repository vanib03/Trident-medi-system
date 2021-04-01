import React from 'react'
import Header from './Header';
import SectionTitles from '../library/SectionTitle';
import Title from '../library/Title';
import Footer from './Footer';
import { motion } from 'framer-motion';

function AboutUs () {

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
            <Header pageName="about" />
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

                <Title pageTitle="ABOUT US" />
                <SectionTitles title="Best Installations And Services" />
                <div className="container">
                    <p>
                        At Trident, we have extended our services into several areas so that we can continue to support our customers, well after the installation of equipment.
            </p>
                    <p>
                        Our service division is well equipped to respond to your service queries at any time. Our service engineers are well trained to empower you with the necessary knowledge and training to use the equipment with guaranteed performance and uptime.
            </p>
                </div>
                <Footer />
            </motion.div>
        </>
    )
}

export default AboutUs
