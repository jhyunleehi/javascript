///// Component /////
export class Component {
    constructor(payload = {}) {
      const {
        tagName = 'div',
        state ={}
      } = payload
      this.el = document.createElement(tagName) // 컴포넌트의 최상위 요소
      this.state=state
      this.render()
    }
    render() { // 컴포넌트를 렌더링하는 함수
      // ...
    }
  }
  