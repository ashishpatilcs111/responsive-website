import React from 'react'

function Faq() {
  return (
    <>
        <div className="text-center">
    <h2 className="mt-5 mb-5">FAQ</h2>
  </div>
  <section className="container my-5" id="maincontent">
    <section id="accordion">
      <a id='faq' className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary text-decoration-none border-top" aria-controls="faq-17" aria-expanded="false" data-toggle="collapse" href="#faq-17" role="button">
        <div className="position-relative">
          <h2 className="h4 m-0 pr-3">
            What if I want custom gear?
          </h2>
          <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </a>
      <div className="collapse" id="faq-17" >
        <div className="card2 card-body border-0 p-0">
          <p>Custom gear can be ordered through our contact form. Additional fees may apply.</p>

        </div>
      </div>

      <a id='faq' className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary text-decoration-none border-top" aria-controls="faq-18" aria-expanded="false" data-toggle="collapse" href="#faq-18" role="button">
        <div className="position-relative">
          <h2 className="h4 m-0 pr-3">
            What is the official mission statement?
          </h2>
          <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </a>
      <div className="collapse" id="faq-18">
        <div className="card2 card-body border-0 p-0">
          <p>Our official mission statement is lorem ipsum dolor sit.</p>
          <p>
          </p>
        </div>
      </div>

      <a id='faq' className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary text-decoration-none border-top" aria-controls="faq-19" aria-expanded="false" data-toggle="collapse" href="#faq-19" role="button">
        <div className="position-relative">
          <h2 className="h4 m-0 pr-3">
            What is the purpose of LunarXP?
          </h2>
          <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </a>
      <div className="collapse" id="faq-19">
        <div className="card2 card-body border-0 p-0">
          <p>The purpose of LunarXP is to give you the best Mars experience!</p>
          <p>
          </p>
        </div>
      </div>

      <a id='faq' className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary text-decoration-none  border-top" aria-controls="faq-20" aria-expanded="false" data-toggle="collapse" href="#faq-20" role="button">
        <div className="position-relative">
          <h2 className="h4 m-0 pr-3">
            What is the best email to reach you at?
          </h2>
          <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </a>
      <div className="collapse" id="faq-20">
        <div className="card2 card-body border-0 p-0">
          <p>The best email for any inquiries is email@email.com!</p>
          <p>
          </p>
        </div>
      </div>

      <a  id='faq' className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary text-decoration-none border-top" aria-controls="faq-21" aria-expanded="false" data-toggle="collapse" href="#faq-21" role="button">
        <div className="position-relative">
          <h2 className="h4 m-0 pr-3">
            Where can I read more about this company?
          </h2>
          <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </a>
      <div className="collapse" id="faq-21">
        <div className="card2 card-body border-0 p-0">
          <p>Lorem ipsum dolor sit!</p>
          <p>
          </p>
        </div>
      </div>

      <a id='faq' className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary text-decoration-none  border-top" aria-controls="faq-22" aria-expanded="false" data-toggle="collapse" href="#faq-22" role="button">
        <div className="position-relative">
          <h2 className="h4 m-0 pr-3">
            What is the best time to call?
          </h2>
          <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </a>
      <div className="collapse" id="faq-22">
        <div className="card2 card-body border-0 p-0">
          <p>The best time to call is 24/7! We are always available to answer any questions.</p>
          <p>
          </p>
        </div>
      </div>
    </section>
  </section>
    </>
  )
}

export default Faq