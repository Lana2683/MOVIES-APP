import React from 'react';

export const ErrorBoundary = ({ children }) => {
    const OopsText = () => <h2>Oops, Something went wrong...</h2>

    let isEverythingOk = true; // todo: isEverythingOk = downloadedMovies()

    return <>{isEverythingOk ? children : <OopsText/>} </>
}

export default ErrorBoundary;
