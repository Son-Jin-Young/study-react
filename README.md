# Do it! 리액트 프로그래밍
## 참고사항
* `<React.StrictMode></React.StrictMode>`사용시 특정 생명주기 중복 실행

## 유용한 명령어
|키워드|설명|
|--|--|
|rcc|기본 리액트 컴포넌트 코드를 생성|
|rccp|리액트 컴포넌트를 프로퍼티 타입과 함께 생성|
|rcfc|리액트 컴포넌트를 생명주기 함수와 함께 생성|
|rpc|리액트 퓨어 컴포넌트를 생성|
|rsc|함수형 컴포넌트 생성|
|rscp|함수형 컴포넌트를 프로퍼티 타입과 함께 생성|

## JSX
* `render 함수`에서 반환하는 포맷은 `HTML 규칙`이 아닌 `XML 규칙`을 따른다.
* 리액트 엔진이 JSX를 해석하여 보여주므로 개발자는 화면 구성에만 집중할 수 있도록 도와준다.

## 컴포넌트
* `컴포넌트` 리액트에서 가장 중요한 요소
* 규격만 맞는다면 언제든 연결하여 사용할 수 있도록 할 수 있다.
* html 태그와 구분하기 위해 컴포넌트 클래스를 생성할 때엔 `첫 글자는 대문자`로 작성한다.

> import 문에 파일 확장자가 생각된 이유는 `웹팩 코드 검색 확장자` 기능이다.<br/>
> `[이름].js` > `[이름].jsx` > `[이름]/index.js` > `[이름]/index.jsx` 순으로 찾는다.

## 구성요소
* `프로퍼티` 상위 컴포넌트에서 하위 컴포넌트로 전달하는 `읽기 전용 데이터`
* `state` 컴포넌트의 상태 저장, `변경할 수 있는 데이터`
* `컨텍스트` 부모 컴포넌트에서 생성, `모든 자식 컴포넌트에 전달하는 데이터`

## 프로퍼티
* 상위에서 하위로 데이터를 `읽기 전용의 값`을 전달할 때 사용
* HTML 속성(attribute) 형태로 전달되는 값
```jsx harmony
class App extends React.Component {
    render() {
        return (
            <div className="body">
                <MyComponent name="message"/>
            </div>            
        );
    }
}
```
* 하위 컴포넌트에서 `this.props`으로 참조 가능
```jsx harmony
class MyComponent extends React.Component {
    render() {
        const name = this.props.name;
        return <span>{name}</span>;
    }
}
```
* 프로퍼티 자료형 및 기본값 선언
    > 프로퍼티에 해당 자료형을 제외한 다른 값이 들어올 때 리액트 엔진이 경고 메시지로 알려준다.<br>
    boolean 프로퍼티는 프로퍼티 사용 여부로 true / false를 정할 수 있다.<br>
    내부에 사용자 정의 템플릿을 적용할 때, `this.props.children`을 사용한다.
```jsx harmony
import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    render() {
        const name = this.props.name;
        return <span>{name}</span>;
    }
}

// 프로퍼티 타입 및 필수 선언
MyComponent.propTypes = {
    name: PropTypes.string.isRequired
};
// 프로퍼티 기본값 선언
MyComponent.defaultProps = {
    name: ''    
};

export default Mycomponent;
```

## 상태관리
### this.state
* 값을 저장하거나 변경할 수 있는 객체
* `this.state` 를 이용하여 데이터 초기화 및 변경
* 주의사항
    * 생성자에서 `반드시 초기화`
    * state를 변경할 때엔 `setState() 함수`를 사용하여야 한다.
        * state를 직접 변경하는 경우, 리액트 엔진은 render 함수를 호출하지 않아, setState를 호출하여 리액트 엔진이 알아서 render 함수를 호출한다.
    * setState() 함수는 `비동기로 처리`, 이후 연결된 함수의 실행 종료 후 동기화 된다.
* <span style="color: red;">생성자에서 비동기 함수 호출시, 내부에서 상태를 바꾸는 경우, 콘솔 오류 발생</span>

### forceUpdate
* this.setState와 동일한 동작을 한다.
* 단, 리액트 `성능에 제약`이 있으므로 새롭게 뜨는 화면이 아니라면 사용을 `지양`한다.

## 컴포넌트 생명 주기
|생명주기 함수|설명|
|--|--|
|constructor(props)|<ul><li>최초 생성될 때 한번 실행</li><li>`변수` 또는 `상태` 선언</li></ul>|
|render|<ul><li>데이터가 변경되어 새화면을 그려야 할 때 자동으로 호출</li><li>반환하는 JSX 화면을 그림</li></ul>|
|static getDerivedStateFormProps(props, state)|<ul><li>주로 `prop으로 전달되는 값을 state로 연동`해 줄 때, 주로 사용</li><li>state 값을 초기화하지 않은 경우 `오류 발생`</li></ul>|
|componentDidMount|<ul><li>render 함수가 종료된 후 호출되는 함수</li><li>즉 렌더링이 완료된 후 작업을 실행하는 함수</li></ul>|
|shouldComponentUpdate(nextProps, nextState)|<ul><li>화면을 `새로 출력해야하는지 판단`하는 함수</li><li>데이터를 비교하는 작업이 포함되므로, `리액트 성능에 영향을 많이 줌`</li><li>`검증 작업`할 때 주로 사용</li><li>forceUpdate를 호출하는 경우 실행되지 않음</li></ul>|
|getSnapshotBeforeUpdate(prevProps, prevState)|<ul><li>변경된 내용이 버츄얼 DOM에 완료된 후 호출되는 함수</li><li>render 되기 이전에 실행되어 `DOM 정보에 접근할 때 사용`</li></ul>|
|componentDidUpdate(prevProps, prevState, snapshot)|<ul><li>실제 화면에 출력된 이후 호출되는 함수</li><li>getSnapshotBeforeUpdate에서 반환된 값을 인자로 받고, `DOM 정보를 변경할 때 사용`</li></ul>|
|componentWillUnmount|<ul><li>컴포넌트가 소멸되기 직전에 호출하는 함수</li><li>컴포넌트에서 사용하는 메모리를 해제하기 위해 주로 사용한다.</li><li>`메모리 누수 현상 방지`</li></ul>|

* 실행확인
    * 생성: constructor - getDerivedStateFromProps - render - componentDidMount
    * 갱신(shouldComponentUpdate => true): getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate
    * 갱신(shouldComponentUpdate => false): getDerivedStateFromProps - shouldComponentUpdate
    * 갱신(forceUpdate): getDerivedStateFromProps - render - getSnapshotBeforeUpdate - componentDidUpdate
    * 소멸: componentWillUnmount

