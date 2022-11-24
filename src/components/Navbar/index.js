import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,

} from './NavBarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/nba' activeStyle>
                        NBA
                    </NavLink>
                    <NavLink to='/nfl' activeStyle>
                        NFL
                    </NavLink>
                    <NavLink to='/mlb' activeStyle>
                        MLB
                    </NavLink>
                    <NavLink to='/nhl' activeStyle>
                        NHL
                    </NavLink>
                    <NavLink to='/ncaaf' activeStyle>
                        NCAAF
                    </NavLink>
                    <NavLink to='/ncaab' activeStyle>
                        NCAAB
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up 
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>     
        </>
    );
};

export default Navbar;