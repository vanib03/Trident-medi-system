import React from 'react'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import SliderImages from './SliderImages';
import Footer from './Footer';
import SectionTitles from '../library/SectionTitle';
// import Title from '../library/Title';
import OneStop from '../assets/images/oneStop.jpg';
import { motion } from 'framer-motion';

function Home () {

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
            <Header pageName="home" />
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                <SliderImages />
                <br /><br />
                <SectionTitles title="A ONE STOP FOR ALL YOUR MEDICAL GAS NEEDS" />

                <div className="container">
                    <p>Trident designs tailor made medical gas systems for turnkey hospitals.</p>

                    <p>
                        Our Competencies include :
            </p>

                    <ol style={{ marginLeft: '2rem' }}>
                        <li>Design of medical gas piping network.</li>
                        <li>Trident high profile engineers are available to provide PID layouts, technical recommendations and ongoing support.</li>
                    </ol>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img alt="alternate text" src={OneStop} className="img-fluid" />
                    </div>
                    <ol start="3" style={{ marginLeft: '2rem' }}>
                        <li>
                            Medical gases network installations.
                </li>

                        <li>Systems, reducers, valves, alarm and outlets installations.</li>

                        <li>
                            AGSS installations (Anasthetic Gas Scavenging Systems)
                </li>

                        <li>
                            Vacuum systems installations (Compact or modular)
                </li>

                        <li>
                            Medical air Systems installations (Systems or compressors),
                            Emergency cabinets.

                </li>

                        <li>
                            Oxygen generators installations
                </li>

                        <li>
                            Terminal units installations (bed head units, technical units,
                            ceiling pendants and columns).

                </li>

                        <li>
                            After-sales services and maintenance contract.
                </li>
                    </ol>
                </div>
                <br /><br />
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

export default Home
