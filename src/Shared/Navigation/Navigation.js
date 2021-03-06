import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Navigation = () => {
    const { user, logOut } = useAuth();

    return (

        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#E31837' }} sticky="top">
            <Container>

                <Navbar.Brand as={Link} to="/home">
                    <h2 className="me-4 text-light" style={{ fontWeight: 'bold' }}>MOTO BIKE</h2>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'whitesmoke' }} />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/allProducts">Explore</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>


                <Navbar.Collapse className="justify-content-end">
                    <Nav>

                        {
                            !user.email ?
                                <div className="d-flex align-items-center justify-content-center" >
                                    <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link className="text-light" as={Link} to="/register">Register</Nav.Link>

                                </div>
                                :
                                <div className="d-flex align-items-center justify-content-center">
                                    <Nav.Link className="text-light" as={Link} to="/dashboard">Dashboard</Nav.Link>

                                    <button className="mx-3 btn btn-primary" onClick={() => logOut()}>logout</button>
                                    <p className="text-light mt-2">{user.displayName}</p>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;