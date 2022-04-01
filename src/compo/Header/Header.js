import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my routing experience</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink >
                <CustomLink to='/friends'>Friends</CustomLink >
                {/* <Link to='/friends'>Friends</Link> */}
                <CustomLink to='/about'>About</CustomLink >
            </nav>
        </div>
    );
};

export default Header;