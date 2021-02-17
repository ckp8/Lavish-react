
import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)
const showButton = () => {
    if (window.innerWidth <= 960){
        setButton(false)
    } else {
        setButton(true)
    }
}
useEffect(() => {
    showButton();
    return () => {
        
    }
}, [])
window.addEventListener('resize',showButton)
    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
        <div className ='navbar'>
<div className = "navbar-container container">
    <Link to = '/' className ="navbar-logo" onClick ={closeMobileMenu}>
        <MdFingerprint className="navbar-icon" />
       LAVISH 
    </Link>
    <div className ="menu-icon" onClick = {handleClick}>
    
   {click ? <FaTimes /> : <FaBars />}
   </div>
   <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
<li className = "nav-item">
    <Link  to = '/'className = "nav-links" onClick ={closeMobileMenu}>
        Home
    </Link>
</li>
<li className = "nav-item">
    <Link  to = '/'className = "nav-links" onClick ={closeMobileMenu}>
        services
    </Link>
    </li>
  
    <li className = "nav-item">
    <Link  to = '/products'className = "nav-links" onClick ={closeMobileMenu}>
        Products
    </Link>
    </li>
    <li to = '/sign-up' className = "nav-btn">
        {button ? (<Link className = "btn-Link">
            <Button buttonStyle = "btn--outline">
                SIGN UP
            </Button>
        </Link> ): (
            <Link  to = '/sign-up'className = 'btn-link' onClick ={closeMobileMenu} >
                <Button buttonStyle = 'btn--outline' buttonSize='btn--mobile'> SiGn Up</Button>
            </Link>
        )}
    </li>
   </ul>
</div>
        </div>  
        </IconContext.Provider>  
        </>
    )
}

export default Navbar

