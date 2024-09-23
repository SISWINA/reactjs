import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Pie, Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import Sidenav from './Sidenav';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const GenreStats = () => {
  const [genreData, setGenreData] = useState({
    labels: ['Fictional', 'Mystery', 'Self-Help', 'Autobiography', 'Best Sellers'],
    datasets: [
      {
        label: 'Books by Genre',
        data: [150, 100, 80, 60, 120],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF']
      }
    ]
  });

  const [ratingData, setRatingData] = useState({
    labels: ['Fictional', 'Mystery', 'Self-Help', 'Autobiography', 'Best Sellers'],
    datasets: [
      {
        label: 'Average Ratings by Genre',
        data: [4.5, 4.2, 4.8, 3.9, 4.7],
        backgroundColor: '#4BC0C0'
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/genre-stats');
        setGenreData((prevData) => ({
          ...prevData,
          datasets: [{ ...prevData.datasets[0], data: response.data.genreBookCounts }]
        }));
        setRatingData((prevData) => ({
          ...prevData,
          datasets: [{ ...prevData.datasets[0], data: response.data.genreRatings }]
        }));
      } catch (error) {
        console.error('Error fetching genre stats', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row>
      <Col sm={2} className="sidenav-col">
        <Sidenav />
      </Col>
      <Col sm={8} className="main-content-col d-flex justify-content-end" style={{ marginLeft: '85px' }}>
        <div className="genre-stats-container" style={{ padding: '1rem', maxWidth: '1000px', width: '100%', marginTop: '0px' }}>
          <h2 className="text-center" style={{ marginBottom: '20px' }}>Genre Statistics</h2>
          <Row>
            <Col md={6} className="chart-container">
              <h3 style={{ marginBottom: '10px' }}>Book Distribution by Genre</h3>
              <div style={{ position: 'relative', height: '350px' }}>
                <Pie data={genreData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </Col>
            <Col md={6} className="chart-container">
              <h3 style={{ marginBottom: '10px' }}>Average Ratings by Genre</h3>
              <div style={{ position: 'relative', height: '350px' }}>
                <Bar data={ratingData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </Col>
          </Row>
          <div className="additional-stats" style={{ marginTop: '40px' }}>
            <h3>Other Key Statistics</h3>
            <ul>
              <li>Total Books: 500</li>
              <li>Fictional Best Seller: "IT ENDS WITH US"</li>
              <li>Highest Rated Genre: Self-Help (4.8/5)</li>
              <li>Top Selling Book: "DONT BELIEVE EVERYTHING YOU THINK"</li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default GenreStats;
