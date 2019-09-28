import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return(
      <div className="admin-dash container">
        <div className="admin-label-container">
          <p className="main-color largify remove-margin">Admin Dashboard</p>
          <p className="remove-margin dark-grey-label">Pending Transfer Certificate of Title Applications</p>
        </div>
        <div className="table-row row">
          <div className="col-md-3 bold-text">
            Date
          </div>
          <div className="col-md-3 bold-text">
            Property No.
          </div>
          <div className="col-md-3 bold-text">
            Name
          </div>
          <div className="col-md-3 bold-text">
            Resolve
          </div>
        </div>

        <div className="table-row row">
          <div className="col-md-3">
            September 28, 2019
          </div>
          <div className="main-color col-md-3">
            4953451
          </div>
          <div className="col-md-3">
            Juan Ancheta
          </div>
          <div className="col-md-3">
            <button className="btn upload-btn btn-sm">Resolve</button>
          </div>
        </div>

        <div className="table-row row">
          <div className="col-md-3">
            September 23, 2019
          </div>
          <div className="main-color col-md-3">
            2134341
          </div>
          <div className="col-md-3">
            Maria Agustin
          </div>
          <div className="col-md-3">
            <button className="btn upload-btn btn-sm">Resolve</button>
          </div>
        </div>

        <div className="table-row row">
          <div className="col-md-3">
            September 23, 2019
          </div>
          <div className="main-color col-md-3">
            3134334
          </div>
          <div className="col-md-3">
            Sofia Vergara
          </div>
          <div className="col-md-3">
            <button className="btn upload-btn btn-sm">Resolve</button>
          </div>
        </div>

        <div className="table-row row">
          <div className="col-md-3">
            September 21, 2019
          </div>
          <div className="main-color col-md-3">
            9139434
          </div>
          <div className="col-md-3">
            Miguel Tan
          </div>
          <div className="col-md-3">
            <button className="btn upload-btn btn-sm">Resolve</button>
          </div>
        </div>

        <div className="table-row row">
          <div className="col-md-3">
            September 18, 2019
          </div>
          <div className="main-color col-md-3">
            3813431
          </div>
          <div className="col-md-3">
            Danilo Conception
          </div>
          <div className="col-md-3">
            <button className="btn upload-btn btn-sm">Resolve</button>
          </div>
        </div>
      </div>)
  }

}

export default Dashboard
