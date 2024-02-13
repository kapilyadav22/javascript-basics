for(let i =0;i<10;i++){
    setTimeout(() => 
        console.log(i),0);
    }

/*
OUTPUT : 
0
1
2
3
4
5
6
7
8
9


let is blocked scope, so it is creating a new variable for every execution  and
sending the particular value of i in settimeout
 */
