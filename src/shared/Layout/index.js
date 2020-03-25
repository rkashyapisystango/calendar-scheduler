import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Layout = props => (
  <Fragment>
    <Fragment>{props.children}</Fragment>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Layout;
