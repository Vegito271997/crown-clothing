import React from 'react';
import './header-component.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'

const Header = (props) => {
    return (
        <div className='header'>
            <Link className='logo-container' to= "/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Header;