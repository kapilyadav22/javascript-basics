for(var i =0;i<10;i++){
    setTimeout(() => 
        console.log(i),0);
    }


/*
OUTPUT : 
10
10
10
10
10
10
10
10
10
10

var is global scobed, so after completing for loop, i will be set to 10, 
and then settimeout will execute
*/
