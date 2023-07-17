import './KMap.css';
import { useEffect } from 'react';

function KakaoMap(props) {

  useEffect(() => {

    console.log('script loaded!!!');
    const kakao = window['kakao'];

    const mapContainer = document.getElementById("kakaomapid");
    const options = {
      //center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
      center: new window.kakao.maps.LatLng(37.4798, 126.729),
      level: 5
    };
    const map = new kakao.maps.Map(mapContainer, options); //맵생성

    //CreateMarker(props.device, map);
    props.device.forEach((p) => {
      console.log(p)
      const markerPosition = new window.kakao.maps.LatLng(p.y, p.x);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    });
 
  
  }, [props.device]);

  return (
    <div className="App">
      <div id="kakaomapid" className="map" />
    </div>
  );

}

export default KakaoMap;


// function CreateMarker(devices, map) {  
//   console.log("=========>>>",map)
//   devices.forEach((p) => {
//     console.log(p)
//     const markerPosition = new window.kakao.maps.LatLng(p.x, p.y);
//     const marker = new window.kakao.maps.Marker({
//       position: markerPosition,
//     });

//     marker.setMap(map);
//   });
// };
