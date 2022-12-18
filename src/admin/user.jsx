import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import VerifiedUser from './verifiedUser';
import NewUser from './newUser';
import Login from './login';

const User = () => {
    const [user, setUser] = useState("newUser")



    return (
        <>
            <ButtonGroup aria-label="Basic example" className='mx-5'>
                <Button active={user === "newUser"} variant="outline-primary" onClick={() => setUser("newUser")}>New User's</Button>
                <Button active={user === "verifiedUser"} variant="outline-primary" onClick={() => setUser("verifiedUser")}>Verified User's</Button>
                <Button active={user === "servicesUser"} variant="outline-primary" onClick={() => setUser("servicesUser")}>Services User's</Button>
            </ButtonGroup> <br /><br />

            {user === "newUser" && <NewUser />}
            {user === "verifiedUser" && <VerifiedUser />}
            {user === "servicesUser" && <NewUser />}

            <br /><br />
        </>
    )
}

export default User