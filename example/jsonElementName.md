# json

###  json 데이터 중, type 이 "sk"인 element의 "name" 으로 구성된 배열 출력 

```json
var data=[{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]
```

#### recursive function search 

```js
var result=[];

function search(array, result){
    array.forEach(element => {
       
        if(element.type === "sk"){
             result.push(element.name);
        }
        console.log("===>", element.childnode)
        if(element.childnode){
           search(element.childnode, result);
        }
})
}

search(data, result);
undefined
console.log(result);
VM1857:1 (5) ['Yong', 'hary', 'solvin', 'hani', 'chulsu']
```


#### 배열forEach
* 선언된 함수 
```js
const arr=[1,2,3,4,5,6,7,8,9];

arr.forEach(function(element){
    console.log(element);
})
```
* 전통적 방법
```js
const arr=[1,2,3,4,5,6,7,8,9];
function f1(element){ console.log(element); }
arr.forEach(f1);
```
왜 함수를 이렇게  선언해서 사용했을까 생각해보니..
처음에 이 언어를 설계할때는 함수를 포인터로 넘겨 려고 했던것 같다. 그런데. 함수 선언하고 또 그것 참조하고 하는 것들이 결국 반복되고 여기 저기 펼쳐저 있는 것들이  지져분해서 이렇게 하지 않았을까 하는생각이 든다. 하지만 이렇게 일회용 함수를 쓰면 실제 stack를 사용하는지 궁금하기는 하다. stack 사용하기는 할 것 같은데...

* 일회용 함수 : 화살표 함수 
```js
const arr=[1,2,3,4,5,6,7,8,9];

arr.forEach(element => console.log(element));
```

* javascript가 뭔가 유연하게?
```js
const arr=[1,2,3,4,5,6,7,8];
var result =[];

arr.forEach(function(element){
    if(element%2 !=0){
        result.push(element);
    }
});

console.log(result);
```
일회용 함수를 사용하면서..유연하게 망가지는 것인가?