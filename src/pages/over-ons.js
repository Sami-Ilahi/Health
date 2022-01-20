import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about1.jpg';
const IndexPage = () => (
  <Layout activeLink="over-ons">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    uw welzijn, is onze missie
                  </span>
                  <span className="section-heading-lower">over ons</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales. Aenean vel
                  dignissim nulla.
                </p>
                <p className="mb-0">
                  Nam euismod dui eget libero commodo, vitae lacinia magna
                  blandit. Sed in lacus in turpis commodo ullamcorper a at
                  dolor. Integer et bibendum lorem, non fermentum elit. Cras
                  condimentum maximus libero, et porta neque posuere pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
