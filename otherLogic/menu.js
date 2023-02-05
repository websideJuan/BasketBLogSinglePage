const showMenu = document.getElementById('showMenu')
const navbar_item = document.querySelector('.navbar_item')
const navbar_menu = document.querySelector('.navbar_menu')


export function menuShowF () {
    showMenu.addEventListener('click', () => {
        navbar_item.classList.toggle('showMenuItem')
        
        if(navbar_item.classList.contains('showMenuItem')){
            navbar_menu.classList.replace('fa-bars', 'fa-xmark')
        }else{
            navbar_menu.classList.replace('fa-xmark', 'fa-bars')
        }
    })

}
