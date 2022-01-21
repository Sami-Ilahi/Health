import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout activeLink="store">
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">
                    Neem Contact met Ons op
                  </span>
                  <span className="section-heading-lower">
                    We Zijn Altijd beschikbaar
                  </span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Zondag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Maandag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Dinsdag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Woensdag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Donderdag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Vrijdag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Zaterdag
                    <span className="ml-auto">8:00 AM to 00:00 PM</span>
                  </li>
                </ul>
                <p className="address mb-5">
                  <em>
                    <strong>Address</strong>
                    <br />
                    Van Duivenvoordelaan 41, 2241SN Wassenaar.
                  </em>
                </p>
                <p className="mb-0">
                  <small>
                    <em>Bel op elk moment</em>
                  </small>
                  <br />
                  06 147 557 15
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="form ">Heeft u een vraag ? Mail het ons.</h2>

          <form
            class="contact-form d-flex flex-column align-items-center"
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <div class="form-group w-75">
              <input
                type="name"
                class="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div class="form-group w-75">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="name"
                required
              />
            </div>

            <div class="form-group w-75">
              <textarea
                class="form-control"
                type="text"
                placeholder="Message"
                rows="7"
                name="name"
                required
              ></textarea>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <button type="submit" class="btn btn-submit btn-info w-75">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
