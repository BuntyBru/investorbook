import React from 'react';
import {Link} from '@reach/router';


const Header = () => {

    return  <header className='header-top'>

    <Link to='/' style={{ textDecoration: 'none' }} >
    <p><span>INVESTOR</span><span>BOOK</span></p>
    </Link>

   
    </header>
}

export default Header;