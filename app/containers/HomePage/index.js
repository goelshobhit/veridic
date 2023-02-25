/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { isEmpty } from 'lodash';

import HoverableCard from 'components/HoverableCard';
import Loader from 'components/Loader';
import Snackbar from '@material-ui/core/Snackbar';

import Grid from '@material-ui/core/Grid';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getAnimeData } from './actions';

export function HomePage({ OnRequestAnimeData, homePage: { data, loading } }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [state, setState] = React.useState({
    open: false,
  });

  const { open } = state;

  const handleClose = () => {
    setState({ open: false });
  };

  useEffect(() => {
    OnRequestAnimeData();
  }, []);

  function renderItems() {
    if (isEmpty(data)) {
      return null;
    }
    return (
      <Grid
        container
        spacing={2}
        justify="space-between"
        alignItems="flex-start"
      >
        {data.map(item => (
          <Grid
            item
            xs="auto"
            sm="auto"
            md="auto"
            lg={4}
            xl={4}
            key={item.mal_id}
          >
            <HoverableCard item={item} key={item.mal_id} />
          </Grid>
        ))}
      </Grid>
    );
  }

  function renderLoading() {
    return <Loader />;
  }

  return (
    <div className="pt-5">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {loading ? renderLoading() : renderItems()}
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Something went wrong"
      />
    </div>
  );
}

HomePage.propTypes = {
  OnRequestAnimeData: PropTypes.func,
  homePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    OnRequestAnimeData: param => dispatch(getAnimeData(param)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
