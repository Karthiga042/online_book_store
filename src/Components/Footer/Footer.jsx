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
                                <a href="/cart" id="alter"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> my order </a>
                                <a href="/dashboard"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> my account </a>
                                <a href="/Faq" id="alter"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> FAQs </a>
                                <a href="/Privacy"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> privacy policy </a>
                                <a href="/terms" id="alter"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> terms or use </a>
                            </div>
                            <div class="box">
                                <h3>follow us</h3>
                                <a href="https://www.facebook.com"> <i class="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i> facebook </a>
                                <a href="https://twitter.com" id="alter"> <i class="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /> </i>twitter </a>
                                <a href="https://www.instagram.com"> <i class="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i> instagram </a>
                                <a href="https://in.linkedin.com" id="alter"> <i class="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i> linkedin </a>
                                <a href="https://in.pinterest.com"> <i class="fab fa-pinterest"><FontAwesomeIcon icon={faPinterest} /></i> pinterest </a>
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;