var seconds_delay  = 4 ;
var myVar = setInterval( Tester , seconds_delay * 1000) ;
var b = 0 ; 
var j ={};
function Tester () {
	var x = document.getElementsByClassName("ZjFb7c");
	for (i=0 ; i< x.length ; i++ ){
        j["last"] = b ;
		if ( j[x[i].innerText] === undefined ){
            j[x[i].innerText] = {} ;
            j[x[i].innerText][ b ] = b ;
			j[x[i].innerText]['f'] = b ;
			j[x[i].innerText]['l'] = b ;
		}
        else if ( j[x[i].innerText][ j[x[i].innerText]['l'] ] === b-1 ){
            j[x[i].innerText][ j[x[i].innerText]['l'] ] = b ;
            j[x[i].innerText]['f'] = b ;
        }
        else if ( j[x[i].innerText][ j[x[i].innerText]['l'] ] === b ){
            continue;
        }
        else {
            j[x[i].innerText][ b ] = b ;
            j[x[i].innerText]['l'] = b ;
            j[x[i].innerText]['f'] = b ;
        }    
	}
    b=b+1;
    console.log( j )
    
    var inp = j
    var data = JSON.stringify({"data":j,"id":'1wbOlkwbg9j34hG0iNjz'})
    var url = 'http://localhost:8000/' 
    fetch(url, {
        method: 'post',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
    }) 
}