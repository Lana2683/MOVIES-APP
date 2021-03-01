import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
        console.log(error, errorInfo);
    }

    render() {
        const OopsText = () => <h2>Oops, Something went wrong...</h2>
        return <>{this.state.hasError ? <OopsText/> : this.props.children} </>
    }
}

ErrorBoundary.prototypes = {
    children: PropTypes.element,
}

export default ErrorBoundary;
