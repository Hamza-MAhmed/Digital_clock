
setInterval(set , 1000)
function set(){
    let time = new Date()
    document.getElementById("hr").innerHTML = time.getHours()%12 >= 10 ? time.getHours()%12 : "0"+time.getHours()%12
    document.getElementById("min").innerHTML = time.getMinutes() >= 10 ? time.getMinutes() : "0"+time.getMinutes()
    document.getElementById("sec").innerHTML = time.getSeconds() >= 10 ? time.getSeconds() : "0"+time.getSeconds()
}




























// document.getElementsByClassName("c")[0].innerHTML = new Date()
//c = new Date()
// let hr = new Date().getHours()
// document.getElementsByClassName("hr")[0].innerHTML = hr
// document.getElementsByClassName("colon")[0].innerHTML = ":"