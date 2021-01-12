import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <div>Personal Infromation</div>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong>{currentUser.email}
            <br />
            <div>:)</div>
            <br />
            <div>:)</div>
            <br />
            <div>:)</div>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            <br></br>
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </>
    )
}

export default Dashboard
