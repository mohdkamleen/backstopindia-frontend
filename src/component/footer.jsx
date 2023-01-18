import React from 'react'  
import { Link } from 'react-router-dom';
function Footer() {
    return ( 
        <> 
            <div className='footer-section bg-dark' >
                 <div>
                    <h4>Our Website</h4>
                    <Link className='footer-item' to="/terms">Privacy Policy </Link> <br />
                    <Link className='footer-item' to="/terms">Terms and conditions</Link> <br />
                    <Link className='footer-item' to="#">Sitemap</Link> <br />
                    <Link className='footer-item' to="#">Security</Link> 
                 </div><br />
                 <div>
                    <h4>Our Company</h4>
                    <Link to="/services" className='footer-item'>Services</Link><br />
                    <Link to="/contact" className='footer-item'>Contact Us</Link><br />
                    <Link to="/faq" className='footer-item'>FAQ's</Link><br />
                    <Link to="/career" className='footer-item'>Carrers</Link><br />
                    <Link to="/blog" className='footer-item'>Blogs</Link> <br />
                 </div><br />
                 <div>
                    <h4>Contact Us</h4>
                    <p style={{wordBreak:"break-word"}}> +919310348547 , +917007927401  </p>
                    <p>contact@backstopindia.com</p>
                    <p>Sitapur Rd, Sherwani Nagar, Diguria, Aziz Nagar, Lucknow, Uttar Pradesh 226021</p>
                    <br />  
                    <p>
                        <a href="#"><font color="skyblue">facebook</font></a> &nbsp;
                        <a href="#"><font color="skyblue">twitter</font></a> &nbsp;
                        <a href="#"><font color="skyblue">instagram</font></a>
                    </p>
                 </div> 
            </div>
                 <p className='copyright bg-dark'>&copy; 2022. BackstopIndia Pvt Ltd. All Rights Reserved.</p>
        </>
    );
}

export default Footer;