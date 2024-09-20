import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function TopNav() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <Navbar bg="light" expand="lg" className="top-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Form inline className="search-form" onSubmit={handleSearch}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-success" type="submit">
                        <FaSearch />
                    </Button>
                </Form>
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart size={24} />
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNav;
