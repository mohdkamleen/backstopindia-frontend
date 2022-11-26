import React from 'react'  
function Footer() {
    return (
        <> 
            <div className='footer-section'>
                 <div>
                    <h3>Our Website</h3>
                    <p>Privacy Policy</p> 
                    <p>Terms and conditions</p>
                    <p>Sitemap</p>
                    <p>Security</p><br />
                 </div>
                 <div>
                    <h3>Our Company</h3>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Contact Us</p>
                    <p>Carrers</p>
                    <p>Blogs</p> <br />
                 </div>
                 <div>
                    <h3>Contact Us</h3>
                    <p>+91 9876543210</p>
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
                 <p className='copyright'>&copy; 2022. BackstopIdia Solutions Pvt. Ltd. All Rights Reserved.</p>
        </>
    );
}

export default Footer;