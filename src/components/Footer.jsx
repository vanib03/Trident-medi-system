import React, { useEffect, useState } from 'react'
import FooterStyles from '../css/Footer.module.css';
import 'font-awesome/css/font-awesome.min.css';
import HorizontalRow from './HorizontalRow';
import Icon from '../assets/images/icon.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer () {

    const [currYear, setCurrYear] = useState( '' );

    useEffect( () => {

        var d = new Date();
        var n = d.getFullYear();
        setCurrYear( n );
    }, [currYear] )


    const history = useHistory();

    const home = () => {

        history.push( '/' );
    }

    const contact = () => {

        history.push( '/contactUs' );
    }

    const products = () => {

        history.push( '/products' );
    }

    const about = () => {

        history.push( '/about' );
    }

    return (

        <footer className={FooterStyles.footer}>
            <div className="container">
                <div className={FooterStyles.row}>

                    <div className={`${FooterStyles.footerIcon} ${FooterStyles.footerCol}`}

                    >
                        <img src={Icon} style={{ width: '2.5rem', display: 'flex', alignContent: 'center' }} />
                    </div>
                    <div className={`${FooterStyles.footerAddress} ${FooterStyles.footerCol}`}

                    >
                        <label className={FooterStyles.footerHeader}>TRIDENT MEDI SYSTEM</label>

                        <p className={FooterStyles.footerContent}>
                            1950/1, 1st Floor, 2nd Main, 9th Cross,
                            <br />
                            MC Layout, Vijayanagar,
                            <br />

                            Bangalore - 560040
                            <br />
                            KARTHIK.R <br />
                            Tel: (+91) 8971727067

                            <br />

                            tridentmedisystems@gmail.com
                            </p>

                        <div className={FooterStyles.socialLinks}>
                            <a href="#"> <i className="fa fa-twitter"></i></a>
                            <a href="#"> <i className="fa fa-facebook"></i></a>
                            <a href="#"> <i className="fa fa-skype"></i></a>
                            <a href="#"> <i className="fa fa-google-plus"></i></a>
                        </div>

                    </div>
                    <div className={`${FooterStyles.footerNavigate} ${FooterStyles.footerCol}`}
                    >
                        <label className={FooterStyles.footerHeader}>Navigate</label>
                        <ul >
                            <li ><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                            {/* <li><a href="#">Our Blog</a></li> */}
                        </ul>
                    </div>
                    <div className={`${FooterStyles.footerCol}`}>
                        <label className={FooterStyles.footerHeader}>Services</label>
                        <ul>
                            <li><a href="#">Centralized Medical Gas Pipe Line Solutions</a></li>
                            <li><a href="#">Air Compressors</a></li>
                            <li><a href="#">Manifold Plant Erection</a></li>
                            <li><a href="#">Vacuum Pumps</a></li>
                            <li><a href="#">Accessories And Services</a></li>
                        </ul>
                    </div>
                </div>
                <HorizontalRow />
                <div className={FooterStyles.footerCopyRightInfo}>
                    <p>© {currYear} TRIDENT MEDI SYSTEM -  All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
