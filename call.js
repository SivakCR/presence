
var inp= { 1:2 , 3:{3:4}}
var data = JSON.stringify(inp)
var url = 'http://localhost:8080/' 

fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: data
}) 