const liveGamesForWorld = document.getElementById('live')

export const gamesLive = (props) => {
    liveGamesForWorld.classList.add('activateMenu__items')

    let partidosLive = `
    <main class="liveHero">
        <h1 class="liveHero__title">Partidos en vivo</h1>


    </main>`

    props.innerHTML = partidosLive
}