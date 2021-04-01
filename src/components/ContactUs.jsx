import React, { useRef, useEffect, useState } from 'react'
import Header from './Header';
import Title from '../library/Title';
import SectionTitles from '../library/SectionTitle';
import ContactUsStyles from '../css/ContactUs.module.css';
import Footer from './Footer';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

import swal from 'sweetalert';

function ContactUs () {

    const [userValues, setUserValues] = useState( {
        name: '',
        email: '',
        mobileNumber: '',
        msg: ''
    } );

    const [errors, setErrors] = useState( {
        nameError: 'Enter a user name',
        emailError: 'Enter a valid email ID',
        mobileNumberError: 'Enter a mobile number',
        msgError: 'Enter a message'
    } )

    const [errorStatus, setErrorStatus] = useState( {
        nameStatus: false,
        emailStatus: false,
        mobileNumberStatus: false,
        msgStatus: false
    } );


    const nameChanged = e => {
        setUserValues( { ...userValues, name: e.target.value } );
    }

    const msgChanged = e => {
        setUserValues( { ...userValues, msg: e.target.value } );
    }

    const emailChanged = e => {
        setUserValues( { ...userValues, email: e.target.value } );
    }

    const mobileNumberChanged = e => {

        setUserValues( { ...userValues, mobileNumber: e.target.value } );

    }

    const validateEmail1 = ( email ) => {

        if ( email === '' ) {
            return true;
        }
        else if ( email != '' ) {
            var re = /\S+@\S+\.\S+/;
            return !re.test( email );
        }
    }

    function sendEmail1 ( e ) {
        e.preventDefault();

        let msgStatus, emailStatus, nameStatus, mobileNumberStatus;
        if ( userValues.msg != '' ) {
            msgStatus = false;
        }
        else {
            msgStatus = true;
        }

        if ( userValues.name != '' ) {
            nameStatus = false;
        }
        else {
            nameStatus = true;
        }
        if ( userValues.email != '' && !validateEmail1( userValues.email ) ) {
            emailStatus = false;
        }
        else {
            emailStatus = true;
        }

        if ( userValues.mobileNumber != '' ) {
            mobileNumberStatus = false;
        }
        else {
            mobileNumberStatus = true;
        }

        setErrorStatus( {
            ...errorStatus,
            emailStatus: emailStatus, mobileNumberStatus: mobileNumberStatus, nameStatus: nameStatus, msgStatus: msgStatus
        } );

        if ( emailStatus === false && mobileNumberStatus === false && nameStatus === false && msgStatus === false ) {

            emailjs.sendForm( 'service_g6altx8', 'template_ip6gcmh', e.target, 'user_ROKQxiD7sKijQ3z9neKkt' )
                .then( ( result ) => {
                    console.log( result.text );

                    setUserValues( { name: '', email: '', mobileNumber: '', msg: '' } );

                    swal( "", "Thank you for your feed back !", "success" );


                }, ( error ) => {
                    console.log( error.text );
                } );

        }


    }

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
            <Header pageName="contactUs" />
            <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
                <Title pageTitle="CONTACT US" />
                <SectionTitles title="Leave a message" />

                <div className={ContactUsStyles.contactUsContainer}>

                    <div className={ContactUsStyles.contactUsL}>

                        <form className="contact-form" onSubmit={sendEmail1}>

                            <div className="form-group">
                                <label>Name</label>

                                <input autoComplete="off" placeholder="Enter your name" value={userValues.name} onChange={nameChanged} className="form-control" type="text" name="from_name" />
                                {
                                    errorStatus.nameStatus && ( <label className={ContactUsStyles.errMsg}>{errors.nameError}</label> )
                                }

                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input autoComplete="off" className="form-control" onChange={emailChanged} value={userValues.email} type="text" placeholder="Enter your email id" name="reply_to" />
                                {
                                    errorStatus.emailStatus && ( <label className={ContactUsStyles.errMsg}>{errors.emailError}</label> )
                                }
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>

                                <input autoComplete="off" className="form-control" onChange={mobileNumberChanged} value={userValues.mobileNumber} placeholder="Enter your mobile Number" name="mobile_number" type="text" pattern="^-?[0-9]\d*\.?\d*$" />
                                {
                                    errorStatus.mobileNumberStatus && ( <label className={ContactUsStyles.errMsg}>{errors.mobileNumberError}</label> )
                                }
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea autoComplete="off" rows="5" value={userValues.msg} onChange={msgChanged} placeholder="Enter your Message" className="form-control" name="message" />
                                {
                                    errorStatus.msgStatus && ( <label className={ContactUsStyles.errMsg}>{errors.msgError}</label> )
                                }
                            </div>

                            <div className="form-group">

                                <button type="submit" className="btn btn-success" >
                                    <i className="fa fa-comment mr-2" aria-hidden="true"></i>
                                SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>

                    <div className={ContactUsStyles.contactUsR}>
                        <iframe className={ContactUsStyles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.909938192885!2d77.53982851527469!3d12.977611918256606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de8f5a55385%3A0x1fad471a57dd4570!2s2nd%20Main%20Rd%20%26%209th%20Cross%20Rd%2C%20Govindaraja%20Nagar%20Ward%2C%20MC%20Layout%2C%20Vijayanagar%2C%20Bengaluru%2C%20Karnataka%20560040!5e0!3m2!1sen!2sin!4v1616906425848!5m2!1sen!2sin"
                            allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <Footer />
            </motion.div>
        </>
    )
}

export default ContactUs
