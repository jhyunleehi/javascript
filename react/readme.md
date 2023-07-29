# react 


```
$ npm init react-app my-app3
$ npm install react-router-dom@6
```
<<<<<<< HEAD
## 시행착오
####  npx create-react-app 오류
* 현상
```sh
$ npx create-react-app ./
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\jhyun\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\jhyun\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in: C:\Users\jhyun\AppData\Local\npm-cache\_logs\2023-07-29T00_35_44_843Z-debug-0.log
```
* 조치
```sh
$ npm install npm -g

added 1 package in 5s

28 packages are looking for funding
  run `npm fund` for details
```
=======

#### react에서 두번 렌더링 되는 이유
* 현상 : useEffect를 아무리 사용해도 렌더링이 두번 씩 발생함.
* 문서에서 한번만 렌더링 된다고 하는데...
* 부작용 : websocket을 한번만 만들려고 했는데 2번씩 만들어지는 문제점 발생
* 조치 : index.js 에서  <React.StrictMode> 이것을 제거함. 

노마드코더 영화 웹 서비스를 만들다가 리액트 렌더링이 두 번씩 발생하는 것을 발견하였다.
렌더링이 두 번 발생하는 이유는 React.StrictMode 때문입니다.
npx create-react-app 으로 생성하면 자동 설정이 되있습니다.
따라서 index.js 에서 이 Wrapper를 제거해주면 컴포넌트가 두번씩 호출되지 않습니다.

```
ReactDOM.render(
    <App />
);
javascript
``` 
 

StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다.
Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다.
Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.
리액트 공식문서

StrictMode는 아래와 같은 부분에서 도움이 됩니다.

안전하지 않은 생명주기를 사용하는 컴포넌트 발견
레거시 문자열 ref 사용에 대한 경고
권장되지 않는 findDOMNode 사용에 대한 경고
예상치 못한 부작용 검사
레거시 context API 검사
>>>>>>> 71f5440796cb755adce35c5dc33acc534c4e6b52
