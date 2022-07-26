let starts = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let omer = document.querySelector('.omer');
window, onscroll = function () {
    let value = this.scrollY;
    starts.style.left = value + 'px';
    moon.style.top = value * 2 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value * 1.2 + 'px';
    boat6.style.top = value * 1.1 + 'px';
    boat6.style.left = value * 1.1 + 'px';
    omer.style.fontSize = value + 'px';
    if (this.scrollY >= 72) {
        omer.style.fontSize = 72 + 'px';
        omer.style.position = 'fixed';
        if (this.scrollY >= 334) {
            omer.style.display = 'none';
    } else {
            omer.style.display = 'block';
    }
        if (this.scrollY >= 180) {
            this.document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f);'
    }
}
}
