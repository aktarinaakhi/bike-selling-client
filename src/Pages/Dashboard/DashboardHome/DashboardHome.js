import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Navigation from '../../../Shared/Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar';

const DashboardHome = ({ children }) => {
    return (
        <div>
            <Navigation></Navigation>

            <Navbar bg="light">
                <Container>
                    <Navbar.Brand className="mx-auto">Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container my-4">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-9 my-2">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardHome;