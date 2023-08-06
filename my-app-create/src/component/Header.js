import React from 'react'

const Header = (props) => {
  function callback(e) {
    e.preventDefault();
    props.onChangeMode();
  }

  return (
    <h1>
      <a href="/" onClick={callback}>{props.title}</a>
    </h1>
  )
}

export default Header