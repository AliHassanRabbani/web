function parcentagecalc() {
    let stdtm = document.getElementById("tm1").value;
    let stdobt = document.getElementById("obt1").value;
    let res = (stdobt / stdtm)* 100;
    alert(res  + "%");
    document.getElementById("abc").innerHTML=(res + "%");
} 
 function abc() {
    document.getElementById("imgchange").src=("./sss.webp")
    
 }


