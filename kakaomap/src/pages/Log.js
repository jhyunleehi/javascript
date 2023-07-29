import React from "react";

function Log(props) {
    return (
        <div> 
        <table border="1" cellPadding="5" cellSpacing="0" >
            <thead>
                <tr>
                    <th>faceId</th>
                    <th>Name</th>
                    <th>MqttId</th>
                    <th>address</th>
                    <th>manager</th>                    
                    <th>tel</th>
                </tr>
            </thead>
            <tbody>
                {(props.device).map(device => <Device key={device.faceId} d={device} />)}
            </tbody>
        </table>
        </div>
    )
}
export default Log;

function Device(props) {
    return (
        <tr>
            <td> {props.d.faceId}</td>
            <td> {props.d.name}</td>
            <td> {props.d.mqttId}</td>
            <td> {props.d.address}</td>
            <td> {props.d.manager}</td>
            <td> {props.d.tel}</td>
        </tr>
    )
}
