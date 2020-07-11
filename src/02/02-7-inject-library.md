# 02-7 라이브러리 의존성 관리
## 기존 스크립트 의존성 관리 방법
### 사용방식
```html
<html>
    <head>
        <script src="https://...min.js"></script>
        <script src="./lib/a.js"></script>
        <script src="./app.js"></script>
    </head>
</html>
```

### 문제점
> 여러 script 파일 중 script의 순서가 바뀌면 오류가 발생할 수 있습니다.

## ES6 의존성 관리 방법
### 사용방식
```js
import MyModule from './MyModule.js';
import { ModuleName } from './MyModule.js';
import { MoudleName as RenameModuleName } from './MyModule.js';
```