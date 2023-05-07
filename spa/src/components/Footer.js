import React from "react";
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div>
            <footer className="mt-auto">
                <div className="container mt-5 mb-4" id="footer-top">
                    <div className="row">
                        <div className="col">
                            <Link className="logo" to="/">
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo-image" width="30" height="30"
                                     className="d-inline-block align-top"/>
                                TicketServe
                            </Link>
                        </div>
                        <div className="col">
                            <h2 className="contact-text">Search Us</h2>
                            <a href="https://www.instagram.com/">
                                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="inst-link" width="30" height="30"/>
                            </a>
                            <a href="https://uk-ua.facebook.com/">
                                <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="fb-link" width="30" height="30"/>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="footer-links">
                                <li><a className="footer-item" href="concerts.html">Concerts</a></li>
                                <li><a className="footer-item" href="fests.html">Fests</a></li>
                                <li><a className="footer-item" href="theater.html">Theater</a></li>
                                <li><Link className="footer-item" to="/login">Sign in</Link></li>
                            </ul>
                        </div>

                        <div className="col mt-4">
                            <h2 className="contact-text">Contact Us</h2>
                            <div className="row">
                                <div className="col-8 col-md-4">
                                    <span className="contact-info">Call us:</span><br/>
                                    <span className="contact-info">+38 098 4532 789</span><br/>
                                </div>
                                <div className="col-8 col-md-4">
                                    <span className="contact-info">Mail us:</span><br/>
                                    <span className="contact-info">info@ticketserve.com</span><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center" id="footer-bottom">
                    <div className="row">
                        <div className="col mt-3">
                            <p className="footer-bottom-text">© Copyright 2023 TicketServe. All rights reserved. Created
                                by Rosana Klym</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        )
}