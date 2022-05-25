import React from 'react';
import {  Table  } from 'react-bootstrap';
import './dashboard.css';
import * as d3 from "https://cdn.skypack.dev/d3@7";
import { data }  from '../../data.js';

export default function DashboardScreen() {
  
  const viewSum = d3.sum(data, d => d.currentViews);
  const watchHoursSum = d3.sum(data, d => d.watchHours);
  const subsAddedSum = d3.sum(data, d => d.subsAdded);

  // let divSelection = d3.select('#test123').selectAll('div');

  // divSelection
  // .data(data)
  // .enter()
  // .append('div')
  // .text( function(d){
  //   return d.title + ": " + d.amount + " views";
  // })
  // .attr('class', 'bar')
  // .style('width', function(d) {
  //   return d.amount * 50 + "px"; 
  // }); 

  return (
    <main className="dashboardMain">
        <div  className="ownChannelLabel">
          {/* {data.map((item) => (
            <li 
            key={data.title}>{item.title}</li>
          ))} */}
            Own Channels
        </div>
        <div className="OC_Views">
          <h1>{viewSum}</h1>
          <span>Total Views</span>
        </div>
        <div className="OC_Watch_Hours">
          <h1>{watchHoursSum}</h1>
          <span>Total Watch Hours</span>
        </div>
        <div className="OC_Subs">
          <h1>{subsAddedSum}</h1>
          <span>Subscribers Added</span>
        </div>
        <div className="creatorChannelLabel">
            Creator Channels
        </div>
        <div className="CC_Views">
          <h1>##</h1>
          <span>Total Views</span>
        </div>
        <div className="CC_Reach">
        <h1>##</h1>
          <span>Total Reach</span>
        </div>
        <div className="CC_Comments">
        <h1>##</h1>
          <span>Total Comments</span>
        </div>
        <div className="filtersSelectors">
          <h2>Filters</h2>
<input type="date" />
<label for="brandSelector">Brand</label>
<select id="brandSelector" placeholder="brand"/>
<label for="campaignSelector">Campaign</label>
<select id="campaignSelector" placeholder="campaign"/>
<label for="creatorSelector">Creator</label>
<select id="creatorSelector" placeholder="creator"/>
        </div>
    </main>
  );
}
