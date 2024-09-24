import React from 'react';
import { Col, Row, Carousel, Button, Card } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa'; 
import Sidenav from './Sidenav';
import { productsData } from '../Data/Products';
import { productsData as productsData1 } from '../Data/Products1'; 
import { productsData as productsData2 } from '../Data/Products2'; 
import { productsData as productsData3 } from '../Data/Products3'; 
import { productsData as productsData4 } from '../Data/Products4';
import { Link, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const dailySalesData = [
  { day: 'Mon', sales: 4000 },
  { day: 'Tue', sales: 3000 },
  { day: 'Wed', sales: 2000 },
  { day: 'Thu', sales: 2780 },
  { day: 'Fri', sales: 1890 },
  { day: 'Sat', sales: 2390 },
  { day: 'Sun', sales: 3490 },
];

const websiteViewsData = [
  { hour: '00:00', views: 100 },
  { hour: '01:00', views: 200 },
  { hour: '02:00', views: 300 },
  { hour: '03:00', views: 400 },
  { hour: '04:00', views: 500 },
  { hour: '05:00', views: 600 },
  { hour: '06:00', views: 700 },
];

function Dashboard() {
    const NewData = productsData.slice(0, 3);
    const NewData1 = productsData1.slice(0, 3);
    const NewData2 = productsData2.slice(0, 3); 
    const NewData3 = productsData3.slice(0, 3); 

    const chunkSize = 4; 
    const chunks = [];

    for (let i = 0; i < productsData4.length; i += chunkSize) {
        chunks.push(productsData4.slice(i, i + chunkSize));
    }

    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMarqueeClick = () => {
        navigate('/best');
    };

    return (
        <div>
            <Row>
                <Col sm={2} className="sidenav-col">
                    <Sidenav />
                </Col>

                {/* Adjust main content to sm={8} and add custom CSS */}
                <Col sm={8} className="main-content-col content-wrapper">
                <Row className="charts-section mb-4">
    <Col md={6} className="chart-col">
        <h3>Daily Sales</h3>
        <LineChart
            width={500}  // Decrease width
            height={250} // Decrease height
            data={dailySalesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#ff7300" strokeWidth={3} />
        </LineChart>
    </Col>
    <Col md={6} className="chart-col">
        <h3>Website Views by Hour</h3>
        <BarChart
            width={500}  // Decrease width
            height={250} // Decrease height
            data={websiteViewsData}
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#0088fe" />
        </BarChart>
    </Col>
</Row>
                    <div className="marquee-container" onClick={handleMarqueeClick}>
                        <div className="marquee-text">
                            MEGA-DISCOUNT ON THE BEST SELLERS OF THE YEAR
                        </div>
                    </div>

                    <h2 className="products-header">BEST SELLERS</h2>

                    <Carousel indicators={false} controls>
                        {chunks.map((chunk, chunkIndex) => (
                            <Carousel.Item key={chunkIndex}>
                                <Row className="product-row">
                                    {chunk.map((product, productIndex) => {
                                        const productId = chunkIndex * chunk.length + productIndex; 
                                        return (
                                            <Col sm={3} key={product.id}>
                                                <Card className="product-card">
                                                    <Link to={`/best/${productId}`}>
                                                        <Card.Img
                                                            variant="top"
                                                            src={product.image}
                                                            className="product-img"
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>{product.name}</Card.Title>
                                                        </Card.Body>
                                                    </Link>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    <h2 className="products-header">OUR PRODUCTS</h2>

                    <div className="dash maindata">
                        {/* Products Section 1 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData.map((e, index) => (
                                    <div className='productdata' key={index}>
                                        <Link to={`/self/${index}`}>
                                            <img 
                                                src={e.image} 
                                                alt={e.name} 
                                                className="product-img" 
                                            />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/self'>
                                    <p>View More</p>
                                </Link>
                            </div>
                        </div>

                        {/* Products Section 2 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData1.map((e, index) => (
                                    <div className='productdata' key={index}>
                                        <Link to={`/mystery/${index}`}>
                                            <img 
                                                src={e.image} 
                                                alt={e.name} 
                                                className="product-img" 
                                            />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/mystery'>
                                    <p>View More</p>
                                </Link>
                            </div>
                        </div>

                        {/* Products Section 3 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData2.map((e, index) => (
                                    <div className='productdata' key={index}>
                                        <Link to={`/autobio/${index}`}>
                                            <img 
                                                src={e.image} 
                                                alt={e.name} 
                                                className="product-img" 
                                            />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/autobio'>
                                    <p>View More</p>
                                </Link>
                            </div>
                        </div>

                        {/* Products Section 4 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData3.map((e, index) => (
                                    <div className='productdata' key={index}>
                                        <Link to={`/fictional/${index}`}>
                                            <img 
                                                src={e.image} 
                                                alt={e.name} 
                                                className="product-img" 
                                            />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/fictional'>
                                    <p>View More</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Button className="back-to-top" onClick={scrollToTop} variant="secondary">
                        <FaArrowUp size={20} />
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
