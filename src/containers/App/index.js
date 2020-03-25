import React, { Fragment } from 'react';
import HomeContainer from 'containers/Home/homeContainer';

export default function App(props) {
  return (
    <Fragment>
      <HomeContainer {...props} />
    </Fragment>
  );
}
