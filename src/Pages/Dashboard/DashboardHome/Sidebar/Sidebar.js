import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className='col-md-3 col-sm-12'>
            <ul className='list-group sticky-top  py-2'>

                <Nav.Link className='list-group-item' as={Link} to="/myOrders">My Orders</Nav.Link>
                <Nav.Link className='list-group-item' as={Link} to="/review">Review</Nav.Link>
                <Nav.Link className='list-group-item' as={Link} to="/pay">Pay</Nav.Link>
                <Nav.Link className='list-group-item' as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                <Nav.Link className='list-group-item' as={Link} to="/addProducts">Add a Products</Nav.Link>
                <Nav.Link className='list-group-item' as={Link} to="/manageProducts">Manage Products</Nav.Link>
                <Nav.Link className='list-group-item' as={Link} to="/admin">Make Admin</Nav.Link>
            </ul>
        </div>










        // <Container className="bg-green">
        //     <Row>
        //         {/* <Col sm={8}>sm=8</Col> */}
        //         <Col sm={12} md={4}>
        //             <Navbar.Collapse className="justify-content-end">
        //                 <Nav>

        //                     <Nav.Link as={Link} to="/myBooking">My Booking</Nav.Link>
        //                     <Nav.Link as={Link} to="/bookingList">Manage booking list</Nav.Link>
        //                     <Nav.Link as={Link} to="/addService">Add new service</Nav.Link>
        //                     <Nav.Link as={Link} to="/admin">Admin Added</Nav.Link>


        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default Sidebar;