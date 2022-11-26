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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt? Doloremque alias, ipsum, voluptatem commodi ab enim fugiat corporis aperiam quaerat nobis dolor voluptas magnam esse recusandae fuga, sequi perferendis. Commodi quia dolor nihil, est at pariatur tempore incidunt necessitatibus doloribus praesentium, doloremque harum ullam reiciendis! Numquam quo consectetur itaque.
                    </p>

                    <Button>Show more</Button>
                </div>
            </div>
        </>
    );
}

export default Services;