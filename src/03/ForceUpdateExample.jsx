import React from 'react';

class ForceUpdateExample extends React.Component {
    constructor(props) {
        super(props);
        // state 정의
        this.loading = true;
        this.formData = 'no data';

        this.handleData = this.handleData.bind(this);
    }

    componentDidMount() {
        setTimeout(this.handleData, 5000);
    }

    handleData() {
        const data = 'new data';

        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
    }

    render() {
        return (
            <div className="message-container">
                <span>로딩중: {String(this.loading)}</span>
                <span>결과: {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateExample;