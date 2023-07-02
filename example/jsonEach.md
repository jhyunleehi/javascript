### json key,value 

```json
var data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
```
####  json에서 key 출력
* data object 출력
```js
> console.log(data)

{debug: 'on', window: {…}, image: {…}, text: {…}}
```

* data.image object 
```js
> console.log(data.image);

VM1724:1 {src: 'Images/Sun.png', name: 'sun1', hOffset: 250, vOffset: 250, alignment: 'center'}
```

* data.image.src object
```js
>console.log(data.image.src);

VM1747:1 Images/Sun.png
```

* data 객체의 항목 
```js
> for(value in data){
    console.log(value);
}

VM1751:2 debug
VM1751:2 window
VM1751:2 image
VM1751:2 text

```

* data 객체의 key
```js
> for(key in data){
    console.log(data[key]);         
}

VM1755:2 on
VM1755:2 {title: 'Sample Konfabulator Widget', name: 'main_window', width: 500, height: 500}
VM1755:2 {src: 'Images/Sun.png', name: 'sun1', hOffset: 250, vOffset: 250, alignment: 'center'}
VM1755:2 {data: 'Click Here', size: 36, style: 'bold', name: 'text1', hOffset: 250, …}
```

* object의 key 추출
```js
> console.log(Object.keys(data));

VM1759:1 (4) ['debug', 'window', 'image', 'text']
```

*  forEach를 이용한 object 추출
```js
> Object.keys(data).forEach(function(v){
    console.log(data[v]);
})

VM1770:2 on
VM1770:2 {title: 'Sample Konfabulator Widget', name: 'main_window', width: 500, height: 500}
VM1770:2 {src: 'Images/Sun.png', name: 'sun1', hOffset: 250, vOffset: 250, alignment: 'center'}
VM1770:2 {data: 'Click Here', size: 36, style: 'bold', name: 'text1', hOffset: 250, …}
```

* value 속성이 number 이것만 추출 
```js
> var result =[];
> for(key in data){
     var inner = data[key];
     //console.log(inner);
     for(key2 in inner){
         //console.log(inner[key2]); //value 출력 
         if(typeof(inner[key2]) == 'number'){
            result.push(key2);
         }
     }
}
> console.log("result : "+result);

VM1774:12 result : width,height,hOffset,vOffset,size,hOffset,vOffset
```