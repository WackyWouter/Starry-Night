function timer() {
    var start = new Date(2019, 11, 31, 21, 0);

    var t = new Date() - start;
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor((t / 1000 / 60 / 60) % 24);
    if (h < 10) {
        h = "0" + h;
    }
    var min = Math.floor((t / 1000 / 60) % 60);
    if (min < 10) {
        min = "0" + min;
    }
    var s = Math.floor((t / 1000) % 60);
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("min").innerHTML = min;
    document.getElementById("s").innerHTML = s;
}

timer();
setInterval(timer, 1000);
