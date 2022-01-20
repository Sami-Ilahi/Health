import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/zouhair.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">
                Bij al uw zorgen, staan wij voor u klaar
              </span>
              <span className="section-heading-lower">
                Wanneer je ons nodig hebt
              </span>
            </h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque malesuada ac augue eget ultricies. Pellentesque non
              auctor erat, sed bibendum elit. Donec sollicitudin libero eu magna
              eleifend, at commodo dui pulvinar. Vivamus vulputate libero a
              pharetra rhoncus.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Onze belofte</span>
                <span className="section-heading-lower">Aan U</span>
              </h2>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque malesuada ac augue eget ultricies. Pellentesque non
                auctor erat, sed bibendum elit. Donec sollicitudin libero eu
                magna eleifend, at commodo dui pulvinar. Vivamus vulputate
                libero a pharetra rhoncus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
