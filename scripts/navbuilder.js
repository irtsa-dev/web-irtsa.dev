const navmenu = document.getElementsByClassName('navMenu')[0];
const Links = [['index.html','Home'],['blog.html','Blog'],['projects.html','Projects'],['gamereviews.html','Reviews'],['contact.html','Contact']];
const linksLength = Links.length;
for (var i = 0; i < linksLength; i++) {
    let ele = document.createElement('a');
    let prepath = './';
    
    if (document.URL.split('/').includes('posts')) {prepath = '../';}
    ele.setAttribute('href', (prepath + Links[i][0]));
    ele.innerHTML = Links[i][1];
    navmenu.appendChild(ele);
}

let ele = document.createElement('div');
ele.setAttribute('class', 'dot');
navmenu.appendChild(ele);