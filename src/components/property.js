import React, { Component } from 'react';
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'

import axios from 'axios'

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
      <Container>
        <p className="big-title">Parcel Information</p>
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <Row>
            <Col>
              <p><span id="grey-label">Property No.</span>{property && property.owner ? property.propertyNumber : ''}</p>
              <p><span id="grey-label">Address</span>{property && property.owner ? property.officialAddress : ''}</p>
              <p><span id="grey-label">Owner</span>{property && property.owner ? property.owner : ''}</p>
              <p><span id="grey-label">Latitude</span>{property && property.owner ? property.latitude : ''}</p>
              <p><span id="grey-label">Longitude</span>{property && property.owner ? property.longitude : ''}</p>
            </Col>
            <Col>
              Map Here
            </Col>
          </Row>
        </div>

        <p className="big-title">History</p>
        <p>Select Record</p>
        <DropdownButton title={activeHistory && activeHistory.datesOfSale ? activeHistory.datesOfSale : ''}>
          {property && property.history ? history.map((h) => {
            return  <Dropdown.Item onClick={() => this.setState({ activeHistory: h })}>{h.datesOfSale}</Dropdown.Item>
          }) : <div></div>}
        </DropdownButton>
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <p>Transfer Certificate of Title</p>

          <p>Owner: {activeHistory.owner}</p>
          <p>Date: {activeHistory.datesOfSale}</p>
          <p>Price: PHP {activeHistory.price}</p>
          <p>Payment Verification Code: {activeHistory.paymentVerification}</p>

          <button onClick={() => window.open(activeHistory.deedOfSale)}>Deed</button>
          <button onClick={() => window.open(activeHistory.title)}>Title</button>
        </div>
      </Container>
    )
  }
}

export default Property
