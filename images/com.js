function OpenMenu(){
    let sidebar = document.querySelector('.sidebar_wrap');
    sidebar.style.visibility  = 'visible'; 

}
function CloseMenu(){

}

function OpenMenuIcon(){
    let icons = document.querySelector('.icons-wrap');
    icons = icons.children

    icons[0].style.display = 'none';
    for(let i = 1 ; i < icons.length ; i++){
        icons[i].style.display = 'block';
    }
}

function CloseMenuIcon(){
    let icons = document.querySelector('.icons-wrap');
    icons = icons.children

    icons[0].style.display = 'block';
    for(let i = 1 ; i < icons.length ; i++){
        icons[i].style.display = 'none';
    }
}

function  Closelnb(){
    let lnb = document.querySelector('.lnb');
    lnb.style .display = 'none'
    items = lnb.children;

    for(let i=1 ; i <items.length;i++){
        items[i].style.display='none';
    }
}

function Opencategory(){
    Closelnb();
    let lnb = document.querySelector('.lnb');
    lnb.style .display = 'block';
    let items = document.querySelector('.lnb-menu');
    items.style.display='block';
}
function Opensearch(){
    Closelnb();
    let lnb = document.querySelector('.lnb');
    lnb.style .display = 'block';
    let items = document.querySelector('.lnb-search');
    items.style.display='block';
}

function OpenInfo(){
    Closelnb();
    let lnb = document.querySelector('.lnb');
    lnb.style .display = 'block';
    let items = document.querySelector('.lnb-info');
    items.style.display='block';
}

