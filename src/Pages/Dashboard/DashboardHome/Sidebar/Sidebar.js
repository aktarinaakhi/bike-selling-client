import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Sidebar = () => {
    const { admin, logOut } = useAuth();
    return (

        <div className='col-md-3 col-sm-12'>
            <ul className='list-group sticky-top  py-2'>

                {!admin && <div>
                    <Nav.Link className='list-group-item' as={Link} to="/myOrders">My Orders</Nav.Link>
                    <Nav.Link className='list-group-item' as={Link} to="/review">Add Review</Nav.Link>
                    <Nav.Link className='list-group-item' as={Link} to="/pay">Pay</Nav.Link>

                    <button style={{ width: '100%', textAlign: 'left' }} className="list-group-item" onClick={() => logOut()}>Logout</button>

                </div>}

                {admin && <div>
                    <Nav.Link className='list-group-item' as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                    <Nav.Link className='list-group-item' as={Link} to="/addProducts">Add a Products</Nav.Link>
                    <Nav.Link className='list-group-item' as={Link} to="/manageProducts">Manage Products</Nav.Link>
                    <Nav.Link className='list-group-item' as={Link} to="/admin">Make Admin</Nav.Link>

                    <button style={{ width: '100%', textAlign: 'left' }} className="list-group-item" onClick={() => logOut()}>Logout</button>

                </div>}
            </ul>
        </div>

    );
};

export default Sidebar;