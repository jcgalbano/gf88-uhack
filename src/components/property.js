import React, { Component } from 'react';
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'

import axios from 'axios'

import boundaries from '../assets/boundaries.png'

class Property extends Component {
  state = {
    property: {},
    activeHistory: {}
  }

  async componentDidMount() {
    const { property_id } = this.props.match.params
    const res = await axios.get(`http://localhost:3005/api/property/${property_id}`)
    this.setState({ property: res.data, activeHistory: res.data.history[0] })
  }

  render() {
    const { property, activeHistory } = this.state 
    const { history } = property
    
    return (
      <div className="container">
        <p className="big-title property-head">Parcel Information</p>
        <div className="shadow-sm bg-white rounded parcel-pad">
          <Row>
            <Col sm="7">
              <p id="red-label"><span id="grey-label">Property No.</span>{property && property.owner ? property.propertyNumber : ''}</p>
              <p><span id="grey-label">Address</span>{property && property.owner ? property.officialAddress : ''}</p>
              <p><span id="grey-label">Owner</span>{property && property.owner ? property.owner : ''}</p>
              <p><span id="grey-label">Latitude</span>{property && property.owner ? property.latitude : ''}</p>
              <p><span id="grey-label">Longitude</span>{property && property.owner ? property.longitude : ''}</p>
            </Col>
            <Col sm="4">
              <span id="grey-label">Map</span><br/>
              <img src={boundaries} />
            </Col>
          </Row>
        </div>

        <p className="big-title property-head">History</p>
        <Row id="sel-record">
          <span id="grey-label">Select Record</span>
          <DropdownButton id="dropdown-history" title={activeHistory && activeHistory.datesOfSale ? activeHistory.datesOfSale : ''}>
            {property && property.history ? history.map((h) => {
              return  <Dropdown.Item onClick={() => this.setState({ activeHistory: h })}>{h.datesOfSale}</Dropdown.Item>
            }) : <div></div>}
          </DropdownButton>
        </Row>
        <Row>
          <Col sm="8">
            <div className="shadow-sm bg-white rounded parcel-pad">
              <p>Transfer Certificate of Title</p>
    
              <p>Owner: {activeHistory.owner}</p>
              <p>Date: {activeHistory.datesOfSale}</p>
              <p>Price: PHP {activeHistory.price}</p>
              <p>Payment Verification Code: {activeHistory.paymentVerification}</p>
    
              <button id="btn-title" className="btn upload-btn" onClick={() => window.open(activeHistory.title)}>View Title</button>
              <button className="btn upload-btn" onClick={() => window.open(activeHistory.deedOfSale)}>View Deed</button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Property
