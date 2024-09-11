let count = 0

let number = document.getElementById("btn1").onclick = function(){
    count++;
    document.getElementById("p1").textContent = `${count}`
}

document.getElementById("btn2").onclick = function(){
    window.alert("Hello World")
}