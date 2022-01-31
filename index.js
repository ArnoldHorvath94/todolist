let origin = window.location.origin;
document.getElementById("refresh").innerHTML = origin;

function refresh(){
    document.getElementById("refresh").addEventListener('onclick')
}