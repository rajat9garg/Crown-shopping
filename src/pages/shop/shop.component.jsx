import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsFetching, collectionIsLoaded } from '../../redux/shop/shop.selectors'

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)
const ColletctionOvervieWithSpinner = WithSpinner(CollectionOverview)

class ShopPage extends React.Component {


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()

  }

  render() {
    const { match, collectionIsFetching, collectionIsLoaded } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => (
          <ColletctionOvervieWithSpinner isloading={collectionIsFetching} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={(props) => (
          <CollectionPageWithSpinner isloading={!collectionIsLoaded} {...props} />)} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  collectionIsFetching: selectIsFetching,
  collectionIsLoaded: collectionIsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);