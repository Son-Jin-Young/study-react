import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div className="message-container">
                {this.props.name}
            </div>
        );
    }
}

export default MyComponent;