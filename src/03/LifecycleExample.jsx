import React from 'react';

/**
 * 생성: constructor - getDerivedStateFromProps - render - componentDidMount
 * 갱신(shouldComponentUpdate => true): getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate
 * 갱신(shouldComponentUpdate => false): getDerivedStateFromProps - shouldComponentUpdate
 * 갱신(forceUpdate): getDerivedStateFromProps - render - getSnapshotBeforeUpdate - componentDidUpdate
 * 소멸: componentWillUnmount
 */
class LifecycleExample extends React.Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[LC] getDerivedStateFromProps', props, state);
        return {};
    }

    constructor(props) {
        super(props);
        console.log('[LC] constructor');
        this.state = {};
    }

    componentDidMount() {
        console.log('[LC] componentDidMount');
        // 갱신(forceUpdate) 외 확인
        // this.setState({updated: true});

        // 갱신(forceUpdate) 확인
        // this.forceUpdate();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[LC] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[LC] componentWillUnmount');
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[LC] getSnapshotBeforeUpdate');
        return {};
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[LC] shouldComponentUpdate');

        // 갱신(shouldComponentUpdate => true) 확인
        return true;

        // 갱신(shouldComponentUpdate => false) 확인
        // return false;
    }

    render() {
        console.log('[LC] render');
        return null;
    }
}

export default LifecycleExample;