import { root, renderPageOne } from "./components/algoritmoRoot.js"
import { menuShowF } from "./otherLogic/menu.js"
import { gamesLive } from "./components/gamesLive.js"





document.addEventListener('DOMContentLoaded', () => {
    renderPageOne()
    menuShowF()
    gamesLive(root)
})