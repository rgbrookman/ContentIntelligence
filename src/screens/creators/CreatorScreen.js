import React from 'react';
import './creators.css';
import { Container, Tabs, Tab } from 'react-bootstrap';

export default function CreatorScreen() {

  return (
    <main className="creatorNetworkMain">
        <Container fluid>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Add Content">
      <p>Lorem ipsum</p>
  </Tab>
  <Tab eventKey="profile" title="Track Recent Posts">
  <p>Lorem ipsum</p>
  </Tab>
  <Tab eventKey="contact" title="Contact">
  <p>Lorem ipsum</p>
  </Tab>
</Tabs>
</Container>
    </main>
  );
}
