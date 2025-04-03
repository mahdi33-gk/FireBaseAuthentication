import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:'flex',gap:'8px'}}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    );
};

export default Header;