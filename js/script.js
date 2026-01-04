let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};



function login()
{
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}
function register()
{
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}
function cclose()
{
    
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
}
