import './App.css';
import { useState,useEffect } from 'react';
import Log from './pages/Log';
import KakaoMap from './pages/KMap';
import WebSocketMessage from './pages/WebSocketMessage';


function App(props) {
  const device = Object();
  const [devices, setTopics] = useState([device]);

  useEffect(() => {
    let tempDeviceList = [];
    //fetch('http://jhyunleehi.ipdisk.co.kr:18080/api/v1/iotgateways', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    fetch('http://localhost:8080/api/v1/iotgateways', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then(response => response.json())
      .then((datas) => {
        datas.forEach((d) => {
          var device = {
            faceId: d.faceid,
            name: d.name,
            mqttId: d.mqttId,
            address: d.address,
            x: d.x,
            y: d.y,
            manager: d.manager,
            tel: d.tel,
          };          
          tempDeviceList.push(device);
        })
        setTopics(tempDeviceList);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, []);


  return (
    <div className="App">
      <div><KakaoMap device={devices} /></div>
      <div><WebSocketMessage></WebSocketMessage></div>      
      <div><Log device={devices}/></div>
    </div>
  );
}

export default App;
