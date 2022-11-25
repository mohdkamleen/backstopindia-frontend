import React from 'react'
import Card from './services-card'
function Services() {
    return (
        <>
            <h2 className='text-center my-4'>Services</h2>
            <div className='services-card-container mb-5'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> 
            </div>
        </>
    );
}

export default Services;