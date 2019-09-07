import React from 'react';

import './styles.css'

import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => (
    <>
        <div className="containerFooter">

            {/* <span className="footer-text">TecHay 2019 - &copy; Copyright</span> */}
            <div className="containerSocial">
                <a href=""><IoLogoFacebook className="facebook" /></a>
                <a href=""><IoLogoInstagram className="instagram" /></a>
            </div>
        </div>
    </>
);

export default Footer;