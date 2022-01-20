import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';

const IndexPage = () => (
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
    </section>
  </Layout>
);

export default IndexPage;
