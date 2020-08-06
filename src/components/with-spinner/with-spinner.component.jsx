import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isloading, ...otherProps }) => {
        console.log(isloading)
        return isloading ? 
        (<SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>)
            :
            (<WrappedComponent {...otherProps} />)
    }
    return Spinner

}

export default WithSpinner