import React from 'react'
import Link from 'next/link'
import {faTwitter, faInstagram, faFacebook, faGoodreads} from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Newsletter from "./newsletter/newsletter"


const Footer = ()=>{
    
    return(
        <>
            <footer className="footer-section">
                <div className="footer-container footer-grid">
                    <div className="footer-child footer-paragraph-info">

                    <div className="logos-partners">
						<nav className="list-logos">
							<li>
								<img src="https://mcrichcanyoneering.com/wp-content/themes/travel/assets/logo/main_logo.png" alt="logo-partners" />
								<span>
									Mcrich Travels
								</span>
							</li>
						</nav>
					</div>
                        
                    <nav className="social-media-nav">
                        <ul>

                            <li>
                                <a href=""
                                target="_blank"
                                rel="noreferrer">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a
                                    target="_blank"
                                    href=""
                                    rel="noreferrer"
                                    >
                                        
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a          
                                    target="_blank"
                                    href=""
                                    rel="noreferrer"
                                    >

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>
                        
                            <li>
                                <a 
                                    target="_blank"
                                    href=""
                                    rel="noreferrer"
                                    >

                                    <FontAwesomeIcon 
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                        </ul>

                    </nav>
                </div>

                <div className="footer-child footer-nav">
                    <h5>Navigations</h5>
                        <ul>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-the-author">
                                    About Mcrich
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                             <li>
                                <Link href="/photos">
                                   Partners
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="footer-child" id="newsletter">
                        <h5>Newsletter</h5>
                            <p>Stay up to date with the latest from us</p>
                        <Newsletter/>
                    </div>
                </div>

                <div className="two-grid-column" id="lower-footer">
                    <p>
                        &#169; Copyright 2020. Mcrich Travels
                    </p>

                    <ul className="two-grid-column" id="metalinks-footer">

                        <li>
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link href="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </li>

                    </ul>
                </div>

            </footer>
        </>
    )
}

export default Footer;