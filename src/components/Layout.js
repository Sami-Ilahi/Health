import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/business-casual.scss';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import Header from './Header';

const Layout = (props) => {
  const { children, noHeader, noFooter, noSiteHeader, activeLink } = props;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'DHR.F.RKAIEK', content: 'ZORG ​EN DIENSTEN SERVICE' },
              {
                name: 'keywords',
                content:
                  'THUISZORG, Verpleegkundigenzorg, INDIVIDUELE BEGELEIDING',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div className={'page-top'}>
            {!noSiteHeader ? <SiteHeader /> : null}
            {!noHeader ? <Header activeLink={activeLink} /> : null}
            {children}
            {!noFooter ? <Footer /> : null}
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
