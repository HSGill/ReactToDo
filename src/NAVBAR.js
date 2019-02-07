import React from 'react';

const NAVBAR = ({ onRouteChange, isSignedIn }) => {

if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            
                <p
                    onClick={() => onRouteChange('signout')}
                    className='f3 link dim black underlined pa3 pointer'> Sign Out</p>

            </nav>);
    }
    
    else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('signin')}
                    className='f3 link dim black underlined pa3 pointer'> Sign In</p>
                <p
                    onClick={() => onRouteChange('SignUp')}
                    className='f3 link dim black underlined pa3 pointer'> Sign Up</p>


            </nav>

        );
    }

}


export default NAVBAR;
