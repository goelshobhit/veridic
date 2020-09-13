/**
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { debounce, isEmpty } from 'lodash';

import InfiniteScroll from 'react-infinite-scroller';

import Input from 'components/InputAdornments';
import AnimeCard from 'components/AnimeCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getAnimeData } from './actions';

export function HomePage({
  OnRequestAnimeData,
  homePage: { loading, data, hasMore, error },
}) {
  const [qData, setQData] = useState();
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [state, setState] = React.useState({
    open: false,
  });

  const { open } = state;

  const handleClick = () => {
    setState({ open: true });
  };

  const handleClose = () => {
    setState({ open: false });
  };

  useEffect(() => {
    if (!isEmpty(error)) {
      handleClick();
    }
  }, [error]);

  function inputChange(value) {
    OnRequestAnimeData(value);
    setQData(value);
  }

  function loadMoreItems() {
    OnRequestAnimeData(qData);
  }

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
            lg={3}
            xl={3}
            key={item.mal_id}
          >
            <AnimeCard item={item} key={item.mal_id} />
          </Grid>
        ))}
      </Grid>
    );
  }

  function loadMoreItemsIS() {}

  return (
    <div className="pt-5">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Input inputChange={debounce(inputChange, 1000)} data-aos="fade-down" />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreItemsIS}
        hasMore={hasMore}
        loader={
          loading ? (
            <CircularProgress
              key="loader"
              className="d-flex flex-row align-items-center justify-content-center"
            />
          ) : (
            <div key="null" />
          )
        }
        style={{ marginTop: '100px' }}
        className="List"
      >
        {renderItems()}
      </InfiniteScroll>
      {!isEmpty(qData) && !isEmpty(data) ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={loadMoreItems}
          disabled={isEmpty(data)}
          style={{
            marginBottom: 24,
            marginTop: 90,
          }}
          fullWidth
        >
          Load More
        </Button>
      ) : null}
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
