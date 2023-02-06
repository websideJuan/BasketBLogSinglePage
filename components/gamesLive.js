import { nameFunction } from "./fetchData.js"

const liveGamesCards = document.getElementById('liveGamesCards').content
const fragment = document.createDocumentFragment()
const liveGamesForWorld = document.getElementById('live')


export const gamesLive = async (props) => {
    props.classList.add('liveHero__wrapper')
    liveGamesForWorld.classList.add('activateMenu__items')

    props.innerHTML = ''
    const result = await nameFunction()

    console.log(result)
    const {result:{resultList}} = result


    console.log(resultList)
    resultList.forEach(gamesLiveCard => {

        console.log(gamesLiveCard)

        liveGamesCards.querySelector('.liveHero__img').setAttribute('src', gamesLiveCard.item.image)
        liveGamesCards.querySelector('.liveHero__points').innerHTML= gamesLiveCard.item.sku.def.price
        liveGamesCards.querySelector('.liveHero__team').textContent = gamesLiveCard.item.title
        liveGamesCards.querySelector('.cta__product').dataset.id = gamesLiveCard.item.itemId
        

        const clone = liveGamesCards.cloneNode(true)

        fragment.appendChild(clone)
    });

    props.appendChild(fragment)
}