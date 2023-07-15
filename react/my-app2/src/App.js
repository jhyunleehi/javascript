
import './App.css';
import { useState } from 'react';

function Header(props) {
  return <header>
    <h1>
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a>
    </h1>
  </header>
}

function Nav(props) {
  //console.log(props)
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id} >
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}> {t.title}
      </a>
    </li>)
  };

  return <div>
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  </div>
}

function Article(props) {
  return <article>
    <h1>{props.title}</h1>
    {props.body}
  </article>

}

function App() {
  const [mode, setMode] = useState('S1');
  const [id, setId] = useState(null);
  console.log(mode);
  const topics = [
    { id: 1, title: "html1", body: 'html1 is...' },
    { id: 2, title: "html2", body: 'html2 is...' },
    { id: 3, title: "html3", body: 'html3 is...' },
    { id: 4, title: "html4", body: 'html4 is...' },
  ]

  let content = null;
  if (mode === 'S1') {
    content = <Article title="welcome" body="hello, Web" />
  } else if (mode === 'S2') {
    let t, b = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        t = topics[i].title;
        b = topics[i].body;
      }
    }
    content = <Article title={t} body={b} />
  }

  return (
    <div className="App">
      <Header title="Web" onChangeMode={function () {
        setMode('S1');
        //alert('Header')
      }} />
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('S2');
        setId(_id)
        //alert(id);
      }} />
      {content}
    </div>
  );
}

export default App;
