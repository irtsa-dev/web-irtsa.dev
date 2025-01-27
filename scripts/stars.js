const StarDivs = document.getElementsByClassName('stars');
const starDivsLength = StarDivs.length;

for (var i = 0; i < starDivsLength; i++) {
    let starspan = StarDivs[i].children[0];
    let starcount = starspan.innerHTML;
    starspan.remove();

    for (var x = 0; x < 5; x++) {
        let ele = document.createElement('img');
        ele.setAttribute('src', './assets/star.svg');
        ele.setAttribute('width', '25px');
        if (x < starcount) {ele.setAttribute('class', 'star f');}
        else {ele.setAttribute('class', 'star');}
        StarDivs[i].appendChild(ele);
    }
}