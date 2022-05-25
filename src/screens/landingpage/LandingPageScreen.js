import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './landingpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersViewfinder, faChalkboardUser, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function LandingPageScreen() {


  return (
    <main className="landingPageMain">
        <Container fluid>
        <Row className="siteHeader">
            <motion.h1
            style={{ fontFamily: "'Overpass', sans-serif", fontSize: "72px"}}>Content Intelligence by Levels</motion.h1>
        </Row>
        <Row className="siteExplainer">
            <Col
            className="categoriseCol col-4">
            <FontAwesomeIcon className="homepageIcon" icon={faUsersViewfinder} />
            <span><strong>Capture & Categorise</strong></span>
            <p>Easily label all own channel and creator content to facilitate deeper, more relevant analysis</p>
            </Col>
            <Col className="dashboardCol col-4">
            <FontAwesomeIcon className="homepageIcon" icon={faChalkboardUser} />
            <span><strong>Track & Explore</strong></span>
            <p>Study the results that matter to us as they happen and easily export straight into ppt decks</p>
            </Col>
            <Col className="testcentreCol col-4">
            <FontAwesomeIcon className="homepageIcon" icon={faArrowUpRightDots} />
            <span><strong>Evaluate & Improve</strong></span>
            <p>Build content tests and filter results on all key parameters with ease</p>
            </Col>
</Row>
</Container>
    </main>
  );
}
