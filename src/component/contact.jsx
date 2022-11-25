import React from 'react'
import Card from './services-card'
function Services() {
    return (
        <>
            <h2 className='text-center my-4'>Our Services</h2>
            <div className='services-card-container mb-5'>
                <Card title="this is 1st title" desc="this is description we need to change like all content indide that" icon="assest/image/invalid.jpg" />
                <Card title="this is 2nd title" desc="this is description we need to change like all content indide that" icon="assest/image/group.png" />
                <Card title="this is 2nd title" desc="this is description we need to change like all content indide that" icon="assest/image/user.png" />
                <Card title="this is 2nd title" desc="this is description we need to change like all content indide that" icon="assest/image/group.png" />
                <Card title="this is 1st title" desc="this is description we need to change like all content indide that" icon="assest/image/invalid.jpg" />
                <Card title="this is 2nd title" desc="this is description we need to change like all content indide that" icon="assest/image/group.png" />
            </div>
        </>
    );
}

export default Services;