import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
	padding: '1',
}
const navStyle = {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	width: '500px',
}
const authenticatedOptions = (
	<>
		<NavDropdown title="Dropdown" id="basic-nav-dropdown">
			<NavDropdown.Item href="nfl">NFL</NavDropdown.Item>
			<NavDropdown.Item href="nba">NBA</NavDropdown.Item>
			<NavDropdown.Item href="mlb">MLB</NavDropdown.Item>
			<NavDropdown.Item href="nhl">NHL</NavDropdown.Item>
			<NavDropdown.Item href="ncaaf">NCAAF</NavDropdown.Item>
			<NavDropdown.Item href="ncaab">NCAAB</NavDropdown.Item>
		</NavDropdown>
		<div style={navStyle}>
		<Nav.Item className='ms-4'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='ms-4'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		</div>
		
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='ms-4'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='ms-4'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link className='ms-4'>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                Sportz Data
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header