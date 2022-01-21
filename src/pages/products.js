import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/products-01.jpg';
import product2 from '../assets/images/products-02.jpg';
import product3 from '../assets/images/products-03.jpg';
import product4 from '../assets/images/products-04.jpg';
// import product5 from '../assets/images/products-05.jpg';
// import product6 from '../assets/images/products-06.jpg';
// import product7 from '../assets/images/products-07.jpg';

const IndexPage = () => {
  return (
    <Layout activeLink="products">
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Thuiszorg</span>
                  <span className="section-heading-lower">
                    Some words &amp; here to
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product1}
              alt=""
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex mr-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    Verpleegkundigenzorg
                  </span>
                  <span className="section-heading-lower">
                    some words &amp; Kitchen
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product2}
              alt=""
            />
            <div className="product-item-description d-flex ml-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    Persoonlijke verzorging
                  </span>
                  <span className="section-heading-lower">some words</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product3}
              alt=""
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex mr-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    Individuele begeleiding
                  </span>
                  <span className="section-heading-lower">some words</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product4}
              alt=""
            />
            <div className="product-item-description d-flex ml-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    Huishoudelijke verzorging
                  </span>
                  <span className="section-heading-lower">some words</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product3}
              alt=""
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex mr-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">PGB zorg</span>
                  <span className="section-heading-lower">some words</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product2}
              alt=""
            />
            <div className="product-item-description d-flex ml-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Zorg in natura</span>
                  <span className="section-heading-lower">some words</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product3}
              alt=""
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris rhoncus dapibus nibh, quis laoreet dui. Aliquam porta
                  sit amet risus ac eleifend. In ornare ultrices enim, vel
                  tincidunt justo fermentum sed. Curabitur et nulla lorem.
                  Suspendisse consectetur felis ut placerat sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
