# component Test

```
$ npm init -y
$ npm install pacel -D

$ vi package.json 
{
  "name": "component",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel ./index.html"  <<---- 수정
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.9.3"
  }
}

```