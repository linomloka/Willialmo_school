import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    margin: '20px',
                    border: '2px solid red',
                    borderRadius: '5px',
                    backgroundColor: '#ffebee',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <h2 style={{ color: '#c62828' }}>Oops! Something went wrong.</h2>
                    <p style={{ color: '#d32f2f' }}>
                        {this.state.error && this.state.error.toString()}
                    </p>
                    {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                        <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
                            {this.state.errorInfo.componentStack}
                        </details>
                    )}
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#d32f2f',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundary;
