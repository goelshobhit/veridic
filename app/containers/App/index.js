/**
 *
 * App
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Particles from 'react-particles-js';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Container from '@material-ui/core/Container';

import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';

export function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <Particles
        style={{ position: 'absolute' }}
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: '#000000',
            },
            line_linked: {
              color: {
                value: '#000000',
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
      <Container fixed disableGutters>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  ...App,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
