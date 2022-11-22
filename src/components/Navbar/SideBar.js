import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../pages/style/Dashboard.css'

const Side = props => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                    <Nav.Item to='/nba' activeStyle>
                        NBA
                    </Nav.Item>
                    <Nav.Item to='/nfl' activeStyle>
                        NFL
                    </Nav.Item>
                    <Nav.Item to='/mlb' activeStyle>
                        MLB
                    </Nav.Item>
                    <Nav.Item to='/nhl' activeStyle>
                        NHL
                    </Nav.Item>
                    <Nav.Item to='/ncaaf' activeStyle>
                        NCAAF
                    </Nav.Item>
                    <Nav.Item to='/ncaab' activeStyle>
                        NCAAB
                    </Nav.Item>
                    <Nav.Item to='/sign-up' activeStyle>
                        Sign Up 
                    </Nav.Item>
            </Nav>
        </>
    );
};
const Sidebar =withRouter(Side);
export default Sidebar