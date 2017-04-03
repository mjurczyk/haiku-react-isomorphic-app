import React from 'react';

if (typeof window !== 'undefined') {
    require('./error-bar.scss');
}

class ErrorBar extends React.Component {
    onClose() {
        this.props.setError(null);
    }
    
    render() {
        const { error } = this.props;

        return (
            <div className="error-bar">
                {error}
                <i 
                    className="error-bar-close fa fa-times" 
                    onClick={this.onClose.bind(this)}
                ></i>
            </div>
        );
    }
};

export default ErrorBar;