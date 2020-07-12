import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    render() {
        return (
            <div className="message-container">
                {this.props.name}
            </div>
        );
    }
}

MyComponent.propTypes = {
    name: PropTypes.string
};

export default MyComponent;