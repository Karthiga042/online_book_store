import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NewsLetter from "../NewsLetter/NewsLetter";
import { Link } from "react-router-dom";


class Footer extends React.Component{
    render()
    {
        return(
            <div>
                <NewsLetter/>
                <section class="footer">
                    <div class="box-container">
                            <div class="box">
                                <h3>extra links</h3>
                                <Link to="/cart" id="alter"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> my order </Link>
                                <Link to="/dashboard"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> my account </Link>
                                <Link to="/Faq" id="alter"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> FAQs </Link>
                                <Link to="/Privacy"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> privacy policy </Link>
                                <Link to="/terms" id="alter"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> terms or use </Link>
                            </div>
                            <div class="box">
                                <h3>follow us</h3>
                                <Link to="https://www.facebook.com"> <i class="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i> facebook </Link>
                                <Link to="https://twitter.com" id="alter"> <i class="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /> </i>twitter </Link>
                                <Link to="https://www.instagram.com"> <i class="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i> instagram </Link>
                                <Link to="https://in.linkedin.com" id="alter"> <i class="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i> linkedin </Link>
                                <Link to="https://in.pinterest.com"> <i class="fab fa-pinterest"><FontAwesomeIcon icon={faPinterest} /></i> pinterest </Link>
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;
