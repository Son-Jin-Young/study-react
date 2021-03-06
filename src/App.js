import React from 'react';
import './App.css';
import TodaysPlan from './03/todaysPlan';
import MyComponent from './03/MyComponent';
import ChildComponent from './03/ChildComponent';
import ChildComponent2 from './03/ChildComponent2';
import BooleanComponent from './03/BooleanComponent';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import MiddleTest112Code from './03/MiddleTest112Code';
import LifecycleExample from './03/LifecycleExample';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 10};
        this.resetCount = this.resetCount.bind(this);

        // 컴포넌트 소멸 생명주기 확인
        // this.state = {
        //     hasDestroyed: false
        // };
    }

    resetCount() {
        this.setState(({count}) => ({count: count + 10}));
    }

    componentDidMount() {
        // 컴포넌트 소멸 생명주기 확인
        // this.setState({
        //     hasDestroyed: true
        // });
    }

    render() {
        const array = [1, 2, 3];
        const obj = {name: 'SJY', age: 30};
        const node = <h1>노드 프로퍼티야</h1>;
        const func = () => console.log('나오니 콘솔아');

        return (
            <div className="body">
                <h1>컴포넌트 및 프로퍼티</h1>
                <TodaysPlan />
                <MyComponent
                    name="문자열 프로퍼티"
                />
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={array}
                    objValue={obj}
                    nodeValue={node}
                    funcValue={func}
                />
                {/* 프로퍼티 타입 오류 */}
                {/*<ChildComponent2*/}
                {/*    objValue={{age: '20살'}}*/}
                {/*/>*/}
                <ChildComponent2
                    objValue={{age: 20}}
                    requiredStringValue="문자열"
                />
                <div>
                    <div><b>지루할 때:</b><BooleanComponent bored/></div>
                    <div><b>즐거울 때:</b><BooleanComponent/></div>
                </div>
                <DefaultPropsComponent/>

                <ChildProperty>
                    <div>
                        <span>자식노드</span>
                    </div>
                </ChildProperty>
                <h1>상태관리</h1>
                <StateExample />
                <ForceUpdateExample />
                <MiddleTest112Code />
                {/* 컴포넌트 소멸 생명주기 확인 */}
                {this.state.hasDestroyed ? null : <LifecycleExample />}
                <div><Counter count={this.state.count} /></div>
                <div><NewCounter count={this.state.count} /></div>
                <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
            </div>
        )
    }
}

export default App;

