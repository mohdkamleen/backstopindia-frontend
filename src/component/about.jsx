import React from 'react'
import Card from './services-card'
function Services() {
    return (
        <>
            <h2 className='text-center my-4'>Services</h2>
            <div className='services-card-container mb-5'>
                <Card title="this is 1st title" disc="this is description we need to change like all content indide that" icon="assest/image/img1.jpg"/> 
            </div>
        </>
    );
}

export default Services;