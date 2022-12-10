import React from 'react'
import Card from './testimonials-card'

function Testimonials() {
    return (
        <>
            <h2 className='text-center my-4'>Testimonials</h2>
            <div className='testimonial-card-container mb-5'>
                <Card name="Mohd Kamleen" message="this is description we need to change like all content indide that" image="assest/image/user.png" />
                <Card name="Mohd Kamleen" message="this is description we need to change like all content indide that" image="assest/image/user.png" />
                <Card name="Mohd Affan" message="this is description we need to change like all content indide that" image="assest/image/user.png" />
                <Card name="Mohd Tabish" message="this is description we need to change like all content indide that" image="assest/image/user.png" />
                <Card name="Mohd Tabish" message="this is description we need to change like all content indide that" image="assest/image/user.png" />
                <Card name="Mohd Tabish" message="this is description we need to change like all content indide that" image="assest/image/user.png" />
            </div>
        </>
    );
}

export default Testimonials;