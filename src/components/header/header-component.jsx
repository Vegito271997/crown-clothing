import React from 'react';
import './header-component.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
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
                {
                    currentUser ? <div className='option' onClick={() => auth.SignOut()}>SIGN OUT</div>
                     : 
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    );
}

export default Header;