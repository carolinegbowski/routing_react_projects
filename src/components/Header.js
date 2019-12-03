import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="main-header">
            <div class="page-title">React Project Center</div>
            <Link class="link" to='/FizzBuzz'>Fizz Buzz</Link>
            <Link class="link" to='/NumberButton'>Number Button</Link>
            <Link class="link" to='/Pokemon'>Pokemon</Link>
        </div>
    )
}

export default Header;