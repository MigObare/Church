
var menuBtn = document.getElementById('menuBtn')
var menu = document.getElementById('menu')
var sidenav= document.getElementById('sidenav')

sidenav.style.right = '-350';

menuBtn.onclick = function(){
    if(sidenav.style.right == '-350px'){
        sidenav.style.right = '0';

    }
    else{
        sidenav.style.right = '-350px';
    }
}
