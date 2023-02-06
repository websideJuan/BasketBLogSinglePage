import { root, renderPageOne } from "./components/algoritmoRoot.js"
import { menuShowF } from "./otherLogic/menu.js"
import { gamesLive } from "./components/gamesLive.js"
import {cartDataAgg} from "./components/cartDataAgg.js"

document.addEventListener('DOMContentLoaded', () => {
    renderPageOne()
    menuShowF()

})


document.addEventListener('click', (e) => {
    if(e.target.dataset.click === 'live'){
        gamesLive(root)
    }

    if(e.target.dataset.text === 'Agregar al carrito'){
        const elementDataset = e.target.parentElement
        cartDataAgg(elementDataset)
    }
})