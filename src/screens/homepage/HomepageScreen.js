import React from 'react';
import {  Table, Container } from 'react-bootstrap';
import './homepage.css';
import { data }  from '../../data.js';

export default function HomepageScreen() {
  return (
    <main className="homepageMain">
    <Container fluid className="tableContainer">
    <Table className="homeTable" >
  <thead>
    <tr>
      <th>Link</th>
      <th>Channel</th>
      <th>Date Published</th>
      <th>Content Type</th>
      <th>20ten</th>
      <th>Campaign Name</th>
      <th>Passion Point</th>
      <th>Collab</th>
    </tr>
  </thead>
  <tbody>
    {
      data
      .map(item => ( 
      <tr key={data.id}>  
        <td>{item.permalink}</td>
        <td>{item.brand}</td>
        <td>{item.datePublished}</td>
        <td>{item.contentType}</td>
        <td><input type='checkbox'></input></td>
        <td><select type='dropdown'></select></td>
        <td><select type='dropdown'></select></td>
        <td><select type='dropdown'></select></td>
        <td><button type="submit">Log</button></td>
        </tr>
      ))
    }

  </tbody>
</Table>
    </Container>
    <Container fluid className="creatorTracker">
      <h6 style={{marginTop: "24px"}}>Notes on table</h6>
      <ul>
        <li>
          Table displays each video/post that has yet been categorised as... 
        </li>
        <hr></hr>
        <li>
          20ten: Whether we made it or not
        </li>
        <li>
          Campaign Name: What campaign this is serving
        </li>
        <li>
          Passion Point: What passion it is trying to appeal to
        </li>
        <li>
          Collab: Which collaborators it relies upon
        </li>
        <hr></hr>
        <li>
          After categorisation is logged, rows disappear from the table
        </li>
        <li>
          You can access the master log on a different page
        </li>
      </ul>
    </Container>
    </main>
  );
}
