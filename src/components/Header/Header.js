import React from 'react';

function Header({text}) {
    return (
        <header>
            <h1 
                data-testid="h1"
                className="fancy-h1"
            >{text}</h1>
        </header>
    )
}

export default Header;