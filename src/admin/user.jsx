import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import VerifiedUser from './verifiedUser';
import NewUser from './newUser';  
import ServicesUser from './servicesUser'

const User = () => {
    const [user, setUser] = useState("newUser")



    return (
        <>
            <ButtonGroup aria-label="Basic example" className='mx-5 d-flex flex-wrap'>
                <Button active={user === "newUser"} variant="outline-primary" onClick={() => setUser("newUser")}>New User's</Button>
                <Button active={user === "verifiedUser"} variant="outline-primary" onClick={() => setUser("verifiedUser")}>Verified User's</Button>
                <Button active={user === "servicesUser"} variant="outline-primary" onClick={() => setUser("servicesUser")}>Services User's</Button>
                <Button active={user === "closedUser"} variant="outline-primary" onClick={() => setUser("closedUser")}>Closed User's</Button>
            </ButtonGroup> <br /><br />

            {user === "newUser" && <NewUser />}
            {user === "verifiedUser" && <VerifiedUser />}
            {user === "servicesUser" && <ServicesUser />}

            <br /><br />
        </>
    )
}

export default User