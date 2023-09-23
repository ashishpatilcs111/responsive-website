import React from 'react';

function Card() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body h5">
              <h5 className="card-title">Website Design</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="">We Develop A Website That Conforms To The Needs Of Your Business.</h5>
              <p className="card-text">
                With in-depth and diligent development, we materialize the ideas that you have in your mind, to create technological solutions that are a class apart from the rest.
              </p>
              <button className="btn btn-primary">Start Development</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body h5">
              <h5 className="card-title">ECommerce Solution</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body h5">
              <h5 className="card-title">Digital Marketing</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body h5">
              <h5 className="card-title">Mobile Application</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body h5">
              <h5 className="card-title">Multimedia Solutions</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-12 text-center mt-4">
          <button className="btn btn-primary">GET START YOUR PROJECT</button>
        </div>
        <div className="col-12 text-center mt-3">
          <span>Let's Discuss Your Project</span>
          <h6 className="pro">
            Get Free Consultation And Let Us Know Your Project Idea To Turn It Into An Amazing Digital Product.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Card;