import React from "react";

function Footer() {
  return (
    <div className="container bg-white py-5">
      <div className="row row-gap-3">
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6">
          <h6 className="mb-3 text-primary">Company</h6>
          <ul className="list-unstyled">
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Vison
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Misson
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Core Values
                </a>
              </p>
            </li>
            <li>
              <p></p>
              <a href="#" className="text-decoration-none link-secondary">
                Contact us
              </a>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Branding
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Team
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Careers
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  FAQ
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6">
          <h6 className="mb-3 text-primary">Products</h6>
          <ul className="list-unstyled">
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Eda Token
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Digital Clinic
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  School of Cryptos
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Litepaper
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Whitepaper
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Welfare Donations
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  How to use EdaFace
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
          <img
            src={"image_interview_react/edafacelogo.80662ebeea5c38cca3b5.png"}
            height={"50px"}
            className="mb-3"
          />
          <h6 className="mb-3 text-primary">Subscribe Our Newsletter</h6>
          <div className="input-group mb-3  ">
            <input
              type="text"
              className="form-control border border-primary-subtle rounded-pill"
              placeholder="Enter email id"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn bg-primary text-white position-absolute end-0 rounded-pill"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6">
          <h6 className="mb-3 text-primary">Legal</h6>
          <ul className="list-unstyled">
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Terms of Use
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Privacy Policy
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Disclaimers
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Listing T&C
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6">
          <h6 className="mb-3 text-primary">Communities</h6>
          <ul className="list-unstyled">
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Facebook
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Instagram
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Telegram
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="#" className="text-decoration-none link-secondary">
                  Twitter
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center text-secondary">
        <small>
          Copyright 2022. EdaFace is a product of EDA Holdings. All Rights
          Reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;
