import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview';



const CollectionOverview = ({ shop }) => {
    return (
        <div className="collections-overview">
            {shop.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shop: selectShopData
})

export default connect(mapStateToProps)(CollectionOverview)