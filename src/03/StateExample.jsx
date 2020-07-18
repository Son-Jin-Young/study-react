import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        // state 정의
        this.state = {
            loading: true,
            formData: 'no data'
        };

        this.handleData = this.handleData.bind(this);
    }

    handleData() {
        const data = 'new data';
        // state 변경
        // 1. 객체 적용
        // const {formData} = this.state;
        // this.setState({
        //     loading: false,
        //     formData: data + formData
        // });

        // 2. 함수 적용
        // this.setState(function(prevState) {
        //     return {
        //         loading: false,
        //         formData: data + prevState.formData
        //     };
        // });

        // 2-1. Arrow 함수
        this.setState((prevState) => ({
            loading: false,
            formData: data + prevState.formData
        }));
    }

    componentDidMount() {
        setTimeout(this.handleData, 4000);
    }

    render() {
        return (
            <div className="message-container">
                <span>로딩중: {String(this.state.loading)}</span>
                <span>결과: {this.state.formData}</span>
            </div>
        );
    }
}

export default StateExample;