import React, { Component } from 'react';

class Resolve extends Component {
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
            <p className="col-md-12">Government ID 1</p>
            <div className="col-md-6">Image Here</div>
            <div className="col-md-6">Image Here</div>
            <p className="col-md-12">Government ID 2</p>
            <div className="col-md-6">Image Here</div>
            <div className="col-md-6">Image Here</div>
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
