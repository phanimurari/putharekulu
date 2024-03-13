import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import './index.css'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>online shop: Putharekulu</h4>
                    <ul>
                        <li><a href="/">Putharekulu</a></li>
                        <li><a href="/">Kids Section</a></li>
                        <li><a href="/">Authentic Section</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="/"><FaFacebookF className='footer-react-icon' /></a>
                        <a href="/"><FaTwitter className='footer-react-icon' /></a>
                        <a href="/"><FaInstagram className='footer-react-icon' /></a>
                        <a href="/"><FaLinkedinIn className='footer-react-icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);



export default Footer