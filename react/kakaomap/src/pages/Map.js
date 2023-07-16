import './Map.css';
import { useEffect } from 'react';

function Map() {

    useEffect(() => {
        const kakao = window['kakao'];
        console.log(kakao)
        const mapContainer = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
            level: 3
        };
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, []);

    return ( <div>
            <div style={{ backgroundColor: "yellowgreen" }}> map area </div>
            <div id="map" style={{ width: '100%', height: '90%', border: "none", borderRadius: '3%' }} > </div>
        </div>);
    
}

export default Map;
