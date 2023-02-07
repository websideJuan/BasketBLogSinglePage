import { root, renderPageOne } from "./components/algoritmoRoot.js"
import { menuShowF } from "./otherLogic/menu.js"
import { gamesLive } from "./components/gamesLive.js"
import {cartDataAgg} from "./components/cartDataAgg.js"
import { consoleFunction } from "./otherLogic/eventScroollFunction.js"

document.addEventListener('DOMContentLoaded', () => {
    renderPageOne()
    menuShowF()
    consoleFunction()
})


document.addEventListener('click', ({target}) => {
    if(target.dataset.click === 'live'){gamesLive(root)}

    if(target.dataset.text === 'Agregar al carrito'){
        const elementDataset = target.parentElement
        cartDataAgg(elementDataset)
    }
})