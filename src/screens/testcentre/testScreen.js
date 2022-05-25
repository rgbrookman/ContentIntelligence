import React from 'react';
import './testcentre.css';
import * as d3 from "https://cdn.skypack.dev/d3@7";
import { data }  from '../../data.js';
import { dsv } from 'd3';

export default function TestScreen() {

    const campaignArray = data.map(d => d.campaignName);
    const uniqueCampaigns = [...new Set(campaignArray)].sort();
    console.log(uniqueCampaigns)

    const viewSum = d3.sum(data, d => d.currentViews);

  
  return (

    <main className="testScreenMain">

     <div className="col1dateSelectorDiv">
           <input type="date" />
        </div>

        <div className="col2dateSelectorDiv">
        <input type="date" />
        </div>

        <div className="col1filterDiv">
          <select id="selectButton" placeholder="brand filter" />
          <select placeholder="campaign filter">

          </select>
          <select placeholder="content type filter" />
        </div>
        <div className="col2filterDiv">
          <select placeholder="brand filter" />
          <select placeholder="campaign filter" />
          <select placeholder="content type filter" />
        </div>
      
        <div className="col1resultdisplay">
        <h1>{viewSum}</h1>
          <span>Total Views</span>

        </div>
        <div className="col2resultdisplay">
        <h1>##</h1>
          <span>Total Watch Hours</span>
     
        </div>
        <div className="border">
          v
        </div>
        <div className="col1metricselector">
        <input type="select" placeholder="metric selector" />
          <input type="select" placeholder="aggregation type" />
        </div>
        <div className="col2metricselector">
        <input type="select" placeholder="metric selector" />
          <input type="select" placeholder="aggregation type" />
        </div>
 
    </main>
  );
}
