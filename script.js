function clickToChat(){
    window.open('https://wa.me/918999972119', '_blank');
    // alert('button clicked');
}

const hamMenu = document.getElementById('ham-icon');
let menu = document.getElementsByClassName('header-menu')[0];
let crossIcon = document.getElementById('cross-icon');

hamMenu.addEventListener('click', function(){
    menu.classList.add('active');
    crossIcon.classList.add('active');
    // let listItem = '';
    // listItem = menu.innerHTML;
    // menu.innerHTML = '';
    // menu.innerHTML = `
    // <li><img id="cross-icon" onclick="closeMenu()" src="Img/cross-icon.png" alt="cross-icon"></li>
    // ${listItem}
    // `
    // console.log(listItem)
})

function closeMenu(){
    menu.classList.remove('active');
    crossIcon.classList.remove('active');
}

// const closeMenu = document.getElementById('cross-icon');


// closeMenu.addEventListener('click', function(){
//     alert('hello')
// })