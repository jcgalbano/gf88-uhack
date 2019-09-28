import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';


class Validation extends Component {
  state = {
    upload_file_1: 'Upload',
    upload_file_2: 'Upload',
    upload_file_3: 'Upload'
  }
	constructor(props) {
		super(props);
		 this.state = { pictures: [] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
    this.state.upload_file_1 = pictureDataURLs
	}

    render() {
        return (
            <div>
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

              <h3 className="upload-lower-sec-label main-color">Upload document requirements</h3>
              <div className="upload-lower-sec">
                <div className="row">
                  <div className="col-md-7">
                    <p>Notarized letter to the Register of Deeds requesting a new TCT to be issued</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Certificate Authorizing Registration (CAR)</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Transfer Certificate of Title</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Deed of Absolute Sale</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Tax Clearance Certificate from Municipal Hall</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Transfer Tax Receipt from Assessor’s Office Municipal Hall</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Capital Gains Tax (BIR Form No. 1706)</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7">
                    <p>Original Documentary Stamp Tax (BIR Form No. 2000- OT) with receipts</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div> </div> 
                <div className="row">
                  <div className="col-md-7">
                    <p>Tax Declaration of Real Property</p>
                  </div>
                  <div className="offset-md-3 col-md-2">
                    <button className="btn upload-btn btn-sm">Upload</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Validation
