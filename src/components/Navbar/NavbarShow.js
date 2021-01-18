import React, { useState } from 'react'
import Navbar from './index'
import Sidebar from '../Sidebar'

const NavbarShow = ({ currentUser }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log('hola')
    }


    return (
        <>
            <Sidebar currentUser={currentUser} isOpen={isOpen} toggle={toggle} />
            <Navbar currentUser={currentUser} toggle={toggle} />
        </>
    )
}

export default NavbarShow
