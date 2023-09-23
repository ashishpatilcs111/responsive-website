import React from 'react';
import { VscArrowRight } from 'react-icons/vsc';

function Contect() {
  return (
    <div>
      <div className="container shadow">
        <div className="row">
          <div className="col-md-10">
            <h2 className="us">CONTACT US</h2>
            <form className="contactForm" id="from">
              <div className="form-group">
                <label htmlFor="inputFirst" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="inputFirst" required />
              </div>
              <div className="form-group">
                <label htmlFor="inputLast" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="inputLast" required />
              </div>
              <div className="form-group">
                <label htmlFor="inputService" className="form-label">
                  Service
                </label>
                <input type="text" className="form-control" id="inputService" required />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail" className="form-label">
                  Email Id
                </label>
                <input type="email" className="form-control" id="inputEmail" required />
              </div>
              <div className="form-group">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group">
                <label htmlFor="inputContact" className="form-label">
                  Contact Number
                </label>
                <input type="text" className="form-control" id="inputContact" required />
              </div>
              <div className="form-group">
                <button id="btn" type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <a href="http://scripteden.com/download/eden-ui/" target="_blank" className="btn btn-social btn-behance">
              <i className="fa fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <VscArrowRight size={32} />
      </div>
    </div>
  );
}

export default Contect;