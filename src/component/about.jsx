import React from 'react'
import { Button } from 'react-bootstrap';
function Services() {
    return (
        <>
            <h2 className='text-center my-4'>About Us</h2>
            <div className="about-section">
                <img src="assest/image/about-undraw.svg" alt="" />
                <div className="right">
                    <p>
                        ((Founded in december 2022 by Ahamad faraz and Amir khan, BACKSTOP-INDIA service provider Pvt Ltd is headquartered LUCKNOW, UTTAR PRADESH INDIA.)) <br /> <br />

                        &nbsp; &nbsp; &nbsp; Having done extensive research on what worries the New-Age generation Indian, we realized that over the years we have started getting dependent, albeit unconsciously, on small things. So much so, that we don’t even realize how dependent we are on them, unless they cease to be a part of our daily lives. <br /><br />

                        &nbsp; &nbsp;&nbsp;  Most often, it is these smallest things which we usually take for granted, that give us the biggest grief. This helped us zero on those 2 “dependables” which each of us just can’t do without. Our Wallets & Our Mobile Phones. <br />

                        Thus was born BACKSTOP-INDIA  – A backstop-INDIA (www.backstopindia.com) is a service provider a platform which takes care of all the worries, does all the leg-work and gives support and barriers that you can bank on Always. But more importantly, we also ensure that YOU always remain in control and never feel Vulnerable about things you are most dependent upon.

                    </p>

                    <Button>Show more</Button>
                </div>
            </div>
        </>
    );
}

export default Services;