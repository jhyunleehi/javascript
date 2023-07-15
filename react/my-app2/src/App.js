
import './App.css';

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
        props.onChangeMode(event.target.id);
      }}> {t.title}
      </a>
    </li>)
  };

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h1>{props.title}</h1>
    {props.body}
  </article>

}

function App() {
  const topics = [
    { id: 1, title: "html1", bod: 'html is...' },
    { id: 2, title: "html2", bod: 'html is...' },
    { id: 3, title: "html3", bod: 'html is...' },
    { id: 4, title: "html4", bod: 'html is...' },
  ]
  return (
    <div className="App">
      <Header title="Web" onChangeMode={function () {
        alert('Header')
      }} />
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }} />
      <Article title="welcome" body="hello, Web" />
      <Article title="welcome1" body="hello, Web2" />
      <Article />
    </div>
  );
}

export default App;
