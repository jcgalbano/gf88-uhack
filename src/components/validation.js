import React, { Component } from 'react';
import {Form, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import SweetAlert from 'sweetalert2-react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Validation extends Component {
  state = {
    dateOfSale: '',
    price: 'PHP ',
    remarks: '',
    newOwnerFirstName: '',
    newOwnerLastName: '',
    prevOwnerFirstName: '',
    prevOwnerLastName: '',
  }

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
    this.state.upload_file_1 = pictureDataURLs
  }

  getOwner = async (firstName, lastName) => {
    let res = await axios.get(`http://localhost:3005/api/users`)
    let users = res.data.users

    for (let user of users) {
      let user_res = await axios.get(`http://localhost:3005/api/user/${user}`)
      if (user_res.data.firstName === firstName && user_res.data.lastName === lastName)
        return user
    }
  }
  
  processTransactionVerification = async () => {
    this.setState({ show: true })
    const { property_id } = this.props.match.params
    const { dateOfSale, price, remarks, newOwnerFirstName, newOwnerLastName } = this.state
    let newOwner = await this.getOwner(newOwnerFirstName, newOwnerLastName)
    // console.log('prevOwner: ', prevOwner)
    console.log('newOwner: ', newOwner)
    let data = {
      newOwner, 
      dateOfSale, 
      price,
      notes: remarks, 
      deedOfSale: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/71523221_496465664270655_5142990837495365632_n.jpg?_nc_cat=104&_nc_eui2=AeFXRMQYKQHPpj4lGE-GcCm_CLWqTF9HpD5IEHzLCd-UhskQbyjtIXfNXRwDjJ3v6ph9FwyTy5pu9o2mj22ufs52UfW3yWM7GTFhpeKszWIRvHWpmw5p60_aMVeJN6pJzcY&_nc_oc=AQnaGe_YQdhHcAVg_6w9CKblEzU95KjjS9LX_WIMN0vl5_BHVuIcziYv6gHzmCFAkjo&_nc_ht=scontent.fmnl3-1.fna&oh=6bd95f9dbf5a03df4380285117cca898&oe=5E3D4948',
      title: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/71182573_509440476562063_1480162377218392064_n.jpg?_nc_cat=105&_nc_eui2=AeGnEaU_pLCDU8DH4ioPVBh46ITHp3h_0RaV5vcr1u7xyDw6FBkDq4SzJV0EY0T3NE97NVQzdp2Rv8FQwJZGBtGrscd8Yv4cPFFF_t2XO28RxLDCtBxTspGbqVjTHwSydrY&_nc_oc=AQmcpwyRWss3VhYtER-EqgO8xzpL0gx6w6c0wlAbujyVoTJngpFFcoxcBMBK2QuqpIA&_nc_ht=scontent.fmnl3-1.fna&oh=5db637e3c8764f4918357f356fd990ae&oe=5E32540C',
      paymentVerification: 'alj239x0230s'
    }
    let res = await axios.post(`http://localhost:3005/api/property/${property_id}/verify`, data)
    console.log('upon verification: ', res.data)
    if (res.data.success) {
      this.props.history.push('/dashboard')
    }
  }

    render() {
        return (
            <div className="container">
              <div className="upload-upper-sec">
                <div className="row">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="remove-margin dark-grey-label">Apply for a</p>
                      </div>
                      <div className="col-md-12">
                        <p className="main-color largify">Transfer Certificate of Title</p>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="remove-margin dark-grey-label">10 days</p>
                      </div>
                      <div className="col-md-12">
                        <p className="light-grey-label">processing time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="upload-lower-sec">
                <div className="row">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" onChange={(e) => this.setState({ price: e.target.value })} value={this.state.price} />
                </Form.Group>
                </div>
              </div>


              <div className="upload-lower-sec">
                <div className="row">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Date Of Sale</Form.Label>
                  <Form.Control type="text" placeholder="ie. September 1, 2019" onChange={(e) => this.setState({ dateOfSale: e.target.value })} value={this.state.dateOfSale} />
                </Form.Group>
                </div>
              </div>

              <div className="upload-lower-sec">
                <div className="row">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={(e) => this.setState({ remarks: e.target.value })} value={this.state.remarks}/>
                </Form.Group>
                </div>
              </div>
              
              <br/>
              <h3 className="upload-lower-sec-label main-color">Upload Identification</h3>

              <div className="upload-lower-sec">
                <div className="row">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>New Owner</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control placeholder="First name" onChange={(e) => this.setState({ newOwnerFirstName: e.target.value })} value={this.state.newOwnerFirstName} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" onChange={(e) => this.setState({ newOwnerLastName: e.target.value })} value={this.state.newOwnerLastName} />
                    </Col>
                  </Row>
                </Form.Group>
                </div>
              </div>

              <div className="upload-lower-sec">
                <div className="row">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Previous Owner</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control placeholder="First name" onChange={(e) => this.setState({ prevOwnerFirstName: e.target.value })} value={this.state.prevOwnerFirstName} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" onChange={(e) => this.setState({ prevOwnerLastName: e.target.value })} value={this.state.prevOwnerLastName} />
                    </Col>
                  </Row>
                </Form.Group>
                </div>
              </div>

              <br/>

              <h3 className="upload-lower-sec-label main-color">Upload document requirements</h3>
              <div className="upload-lower-sec">
                <div className="row">
                  <div className="col-md-7">
                    <p>Notarized letter to the Register of Deeds requesting a new TCT to be issued</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Certificate Authorizing Registration (CAR)</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Transfer Certificate of Title</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Deed of Absolute Sale</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Tax Clearance Certificate from Municipal Hall</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Transfer Tax Receipt from Assessor’s Office Municipal Hall</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Capital Gains Tax (BIR Form No. 1706)</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Documentary Stamp Tax (BIR Form No. 2000- OT) with receipts</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div> </div> 
                <div className="row">
                  <div className="col-md-7">
                    <p>Tax Declaration of Real Property</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Uploaded</button>
                  </div>
                </div>
              </div>
              <div className="row apply-btn">

                <button className="offset-md-5 col-md-2 btn upload-btn-success" onClick={() => this.processTransactionVerification()}>Apply</button>
                <SweetAlert
                  show={this.state.show}
                  title="Success!"
                  text="Resolution request sent to the authorities. "
                  onConfirm={() => this.props.history.push('/dashboard')}
                />
              </div>
            </div>
        );
    }
}

export default Validation
