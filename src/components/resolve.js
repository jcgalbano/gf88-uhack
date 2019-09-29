import React, { Component } from 'react';
import axios from 'axios'

class Resolve extends Component {
  state = {
    prevOwnerLicense: '',
    newOwnerLicense: '',
    recordIndex: 0
  }

  async componentDidMount() {
    const { property_id } = this.props.match.params
    const res = await axios.get(`http://localhost:3005/api/property/${property_id}`)
    let property = res.data
    const allPropertiesRes = await axios.get('http://localhost:3005/api/properties')
    const recordIndex = allPropertiesRes.data.indexOf(property_id)
    console.log('recordIndex: ', recordIndex)
    this.setState({ recordIndex })

    const previousOwnerRes = await axios.get(`http://localhost:3005/api/user/${property.owner}`)
    this.setState({ prevOwnerLicense: previousOwnerRes.data.driversLicense })
    console.log(previousOwnerRes.data.driversLicense)

    const newOwnerAddress = property.history[property.history.length-1].owner
    const newOwnerRes = await axios.get(`http://localhost:3005/api/user/${newOwnerAddress}`)
    this.setState({ newOwnerAddress, newOwnerLicense: newOwnerRes.data.driversLicense })
    console.log(newOwnerRes.data.driversLicense)
  }

  processTransactionVerification = async () => {
    const { property_id } = this.props.match.params
    let data = {
      recordIndex: this.state.recordIndex,
      newOwner: this.state.newOwnerAddress
    }
    
    console.log(data)
    console.log('approving...')
    const res = await axios.put(`http://localhost:3005/api/property/${property_id}/authenticate`, data)
    console.log(res.data)
  }

  render() {
    return(
      <div className="container">
        <div>
          <p className="main-color largify">Resolve</p>
          <p className="dark-grey-label">Pending Transfer Certificate of Title Applications</p>

          <p>
            <span>
              Property No.
            </span>
            &nbsp;
            <span className="main-color">
              234343
            </span>
          </p>
        </div>

        <div className="data-sec">
          <p className="main-color mediumify">IDs Submitted</p>
          <div className="row">
            <p className="col-md-12">Government ID 1 (Previous Owner)</p>
            <div className="col-md-6"><img src={this.state.prevOwnerLicense} /> </div>
            <p className="col-md-12">Government ID 2 (New Owner)</p>
            <div className="col-md-6"><img src={this.state.newOwnerLicense} /></div>
          </div>
        </div>

          <p className="main-color mediumify">Documents Submitted</p>
          <div>
            <div className="row">
              <div className="col-md-7">
                <p>Notarized letter to the Register of Deeds requesting a new TCT to be issued</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Certificate Authorizing Registration (CAR)</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Original Transfer Certificate of Title</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Original Deed of Absolute Sale</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Original Tax Clearance Certificate from Municipal Hall</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Original Transfer Tax Receipt from Assessor’s Office Municipal Hall</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Original Capital Gains Tax (BIR Form No. 1706)</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                <p>Original Documentary Stamp Tax (BIR Form No. 2000- OT) with receipts</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div> </div> 
            <div className="row">
              <div className="col-md-7">
                <p>Tax Declaration of Real Property</p>
              </div>
              <div className="offset-md-3 col-md-2">
                <button className="btn upload-btn btn-sm">Show</button>
              </div>
            </div>
          </div>
          <div className="row apply-btn add-pad">
            <button className="offset-md-2 col-md-3 btn upload-btn" onClick={() => this.processTransactionVerification()}>Reject</button>
            <button className="offset-md-2 col-md-3 btn upload-btn-success" onClick={() => this.processTransactionVerification()}>Approve</button>
          </div>
      </div>
    )
  }

}

export default Resolve
