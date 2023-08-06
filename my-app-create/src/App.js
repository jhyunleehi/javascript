
import './App.css';
import { useState } from 'react';

import Header from './component/Header';
import Create from './component/Create';
import Nav from './component/Nav';
import Update from './component/Update';


function Article(props) {
  return <div>
    <h1>{props.title}</h1>
    {props.body}
  </div>
}


function App() {
  const [mode, setMode] = useState('S1');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "한국", body: '한국 is...' },
    { id: 2, title: "일본", body: '일본 is...' },
    { id: 3, title: "중국", body: '중국 is...' },
    { id: 4, title: "러시아", body: '러시아 is...' },
  ]);

  let content = null;
  let contextControl = null;

  function createButtonOnClick(event){
    event.preventDefault();
    setMode('CREATE');
  }

  function updateButtonOnClick(event){
    event.preventDefault();
    setMode('UPDATE');
  }

  function deleteButtonOnClick(event){
    const tempTopics=[]
    for (let i=0; i< topics.length; i++){
      if (topics[i].id !==id){
        tempTopics.push(topics[i]);
      }
    }
    setTopics(tempTopics);
    setMode('WELCOME');
  }

  function CreateOnCreate (_title, _body) {    
    const newTopic = { id: nextId, title: _title, body: _body }
    const newTopics = [...topics]
    newTopics.push(newTopic)
    setTopics(newTopics);
    setMode('READ');
    setId(nextId);
    setNextId(nextId + 1);
  }

  function UpdateOnUpdate(_title, _body){
    const newTopics = [...topics]
    const updateTopic = { id: nextId, title: _title, body: _body }
    for (let i = 0; i < topics.length; i++) {
      if (newTopics[i].id === id) {
        newTopics[i] = updateTopic;
        break;
      };
    }
    setTopics(newTopics);
    setMode('READ');
    setId(nextId);
  }
  

  switch (mode) {
    case 'WELCOME':
      content = <Article title="환영" body="hello, Web" />
      break;
    case 'READ':
      let t, b = null;
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
          t = topics[i].title;
          b = topics[i].body;
        };
      }
      content = <Article title={t} body={b} />
      contextControl = <>
      <p>
      <input type="button" value="Create" onClick={createButtonOnClick}/> 
      <input type="button" value="update" onClick={updateButtonOnClick} />
      <input type="button" value="Delete" onClick={deleteButtonOnClick}/>
      </p>
      </>
      
      break;
    case 'CREATE':
      content = <Create onCreate={CreateOnCreate}></Create>
      break;
    case 'UPDATE':
      content = <Update onUpdate={UpdateOnUpdate}></Update>
      break
    default:
      console.log(mode);
      break
  }
 
  return (
    <div className="App">
      <Header title="List Create Update Delete" onChangeMode={function () {
        setMode('WELCOME');
      }} />
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
     }} />
 
      {content}
      <div>
        <input type="button" value="Create" onClick={createButtonOnClick}/>
      </div>
      <div>
        {contextControl}
      </div>
    </div>
  );
}
export default App;
