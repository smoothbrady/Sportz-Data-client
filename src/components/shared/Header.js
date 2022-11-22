import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../../Dashboard.css'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<div className='sidebar'>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='nba' style={linkStyle}>
				NBA
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='nfl' style={linkStyle}>
				NFL
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='mlb' style={linkStyle}>
				MLB
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='nhl' style={linkStyle}>
				NHL
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='ncaaf' style={linkStyle}>
				NCAAF
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='ncaab' style={linkStyle}>
				NCAAB
			</Link>
		</Nav.Item>
	</div>

)

const unauthenticatedOptions = (
	<div>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</div>
)

const alwaysOptions = (
	<div>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</div>
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