# react 


```
$ npm init react-app my-app3
$ npm install react-router-dom@6
```
## 시행착오
####  npx create-react-app 오류
* 현상
```sh
$ npx create-react-app ./
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\jhyun\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\jhyun\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in: C:\Users\jhyun\AppData\Local\npm-cache\_logs\2023-07-29T00_35_44_843Z-debug-0.log
```
* 조치
```sh
$ npm install npm -g

added 1 package in 5s

28 packages are looking for funding
  run `npm fund` for details
```