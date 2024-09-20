import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { productsData as productsData1 } from '../Data/Products';    // Self-Help
import { productsData as productsData2 } from '../Data/Products1';   // Mystery
import { productsData as productsData3 } from '../Data/Products2';   // Autobiography
import { productsData as productsData4 } from '../Data/Products3';   // Fictional
import { productsData as productsData5 } from '../Data/Products4';   // Bestsellers
import { Row, Col, Card } from 'react-bootstrap';
import Sidenav from './Sidenav';

const SearchResults = () => {
    const query = new URLSearchParams(useLocation().search).get('query');

    const allProducts = [
        ...productsData1,
        ...productsData2,
        ...productsData3,
        ...productsData4,
        ...productsData5,
    ];

    const filteredProducts = allProducts.filter(product =>
        product.ProductName.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-results">
            <h2>Search Results for: "{query}"</h2>
            <Row>
                {/* Fixed Sidebar */}
                <Col sm={2} className="sidenav-fixed">
                    <Sidenav />
                </Col>

                {/* Main content - Products */}
                <Col sm={10}>
                    <Row>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => {
                                let category = '';
                                let productIndex = 0; 
                                
                                if (productsData1.includes(product)) {
                                    category = 'self';
                                    productIndex = productsData1.indexOf(product); 
                                } else if (productsData2.includes(product)) {
                                    category = 'mystery';
                                    productIndex = productsData2.indexOf(product);
                                } else if (productsData3.includes(product)) {
                                    category = 'autobio';
                                    productIndex = productsData3.indexOf(product);
                                } else if (productsData4.includes(product)) {
                                    category = 'fictional';
                                    productIndex = productsData4.indexOf(product);
                                } else if (productsData5.includes(product)) {
                                    category = 'best';
                                    productIndex = productsData5.indexOf(product);
                                }

                                return (
                                    <Col sm={4} key={productIndex}>
                                        <Card>
                                            <Link to={`/${category}/${productIndex}`}> {/* Redirect using correct index */}
                                                <Card.Img
                                                    variant="top"
                                                    src={product.image}
                                                    style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
                                                />
                                                <Card.Body>
                                                    <Card.Title>{product.ProductName}</Card.Title>
                                                    <Card.Text>₹{product.price}</Card.Text>
                                                </Card.Body>
                                            </Link>
                                        </Card>
                                    </Col>
                                );
                            })
                        ) : (
                            <p>No products found.</p>
                        )}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default SearchResults;
