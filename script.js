function intoSeconds(){
    var get = document.getElementById("seconds").value
    var pro = get * 60 * 60 
    document.getElementById("r1").innerHTML = pro
}
function calcAge(){
    var get = document.getElementById("year").value
    var pro = get * 365 
    document.getElementById("r2").innerHTML = pro
}
function invertArry(){
var get = document.getElementById("arry").value*-1
var get2 = prompt("Enter the Second Number")*-1
var get3 = prompt("Enter the 3rd Number")*-1
var get4 = prompt("Enter the 4th Number")*-1
var get5 = prompt("Enter the 5th Number")*-1
var get6 = prompt("Enter the 6th Number")*-1
document.getElementById("r3").innerHTML = [get , get2 , get3 , get4 , get5 , get6 ]
}
function compare(){
    var get = document.getElementById("S1").value
    var  get2 = document.getElementById("S2").value
    if(get.length == get2.length){
        document.getElementById("r4").innerHTML = `True`
        console.log(`true`);
    }else{
        document.getElementById("r4").innerHTML = `False`
    }
}
function converter(){
var get =document.getElementById("con").value
var get2 = prompt("Enter the 2nd Integer OR String")
var get3 = prompt("Enter the 3rd Integer OR String")
var get4 = prompt("Enter the 4th Integer OR String")
var get5 = prompt("Enter the 5th Integer OR String")
var get6 = prompt("Enter the 6th Integer OR String")
document.getElementById("r5").innerHTML = [get , get2 , get3 , get4 , get5 , get6 ]
console.log(get);
}
function leap(){
var gey = document.getElementById('leap').value
let uy = gey % 4
if(gey % 4 === 0){
    document.getElementById("r6").innerHTML = `True`
    console.log(uy);
}else{
    document.getElementById("r6").innerHTML = `False`
    console.log(uy);
}
}
function corona(){
    var get = document.getElementById("coro").value
    var get1 = document.getElementById("cor").value
    var get2 = document.getElementById("co").value
    let rus = get - get1 - get2 / 3
    let  result = parseInt( rus/365)*-1
    document.getElementById("r7").innerHTML = `InshAllah Corona Will End in ${result} Days` 
    console.log(result);
}



