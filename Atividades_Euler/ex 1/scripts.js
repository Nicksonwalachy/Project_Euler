let multi = 0
let n1 = prompt("digite o primeiro numero")
let n2 = prompt("digite o segundo numero")

for(let i = 0; i<1000; i++) {
 if(i % n1 == 0 || i% n2 ==0 ){
    multi = multi + i
   
 }
} 

alert(multi)