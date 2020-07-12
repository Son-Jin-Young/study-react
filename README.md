# Do it! 리액트 프로그래밍
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
* 값을 저장하거나 변경할 수 있는 객체
* `this.state` 를 이용하여 데이터 초기화 및 변경
* 주의사항
    * 생성자에서 `반드시 초기화`
    * state를 변경할 때엔 `setState() 함수`를 사용하여야 한다.
    * setState() 함수는 `비동기로 처리`, 이후 연결된 함수의 실행 종료 후 동기화 된다.