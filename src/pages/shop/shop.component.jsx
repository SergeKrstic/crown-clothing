import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils';

// import { updateCollections } from '../../redux/shop/shop.actions';
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import {
// selectIsCollectionFetching,
// selectIsCollectionsLoaded
// } from '../../redux/shop/shop.selectors';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true
  // };

  // unsubscribeFromSnapshot = null;

  // componentDidMount() {
  //   // Using firestore REST api
  //   fetch(
  //     'https://firestore.googleapis.com/v1/projects/crown-database/databases/(default)/documents/collections'
  //   )
  //     .then(response => response.json())
  //     .then(collections => console.log(collections));
  // }

  // componentDidMount() {
  //   // Using firestore promises
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection('collections');

  //   collectionRef.get().then(snapshot => {
  //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionMap);
  //     this.setState({ loading: false });
  //   });
  // }

  // componentDidMount() {
  //   // Using firestore callback (preferred)
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection('collections');

  //   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
  //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionMap);
  //     this.setState({ loading: false });
  //   });
  // }

  // componentDidMount() {
  //   const { fetchCollectionsStartAsync } = this.props;
  //   fetchCollectionsStartAsync();
  // }

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  // render() {
  //   const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

  //   return (
  //     <div className="shop-page">
  //       <Route
  //         exact
  //         path={`${match.path}`}
  //         render={props => (
  //         <CollectionsOverviewWithSpinner
  //           isLoading={isCollectionFetching}
  //           {...props}
  //         />
  //       )}
  //       <Route
  //         path={`${match.path}/:collectionId`}
  //         render={props => (
  //           <CollectionPageWithSpinner
  //             isLoading={!isCollectionsLoaded}
  //             {...props}
  //           />
  //         )}
  //       />
  //       />
  //     </div>
  //   );
  // }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionMap => {
//     dispatch(updateCollections(collectionMap));
//   }
// });
//
// export default connect(
// null,
// mapDispatchToProps
// )(ShopPage);

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ShopPage);

const mapDispatchToProps = dispatch => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
