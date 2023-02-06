export const root = document.getElementById('root');
const heroTemplate = document.getElementById('heroTemplate').content


export function renderPageOne() {
    let stringName = {
        titleCard:'!BASKETBALL COMO UNA PASION!',
        descriptionCard:'EL mejor Basket del Mundo Y una buena Difucion!',
        count: 1
    }

    heroTemplate.querySelector('.hero__title').textContent = stringName.titleCard
    heroTemplate.querySelector('.hero__paragraph').textContent = stringName.descriptionCard
    heroTemplate.querySelector('.card__like').dataset.after = `${stringName.count} MG`
    heroTemplate.querySelector('.fa-thumbs-up')
    
    const clone = heroTemplate.cloneNode(true)
    
    
    root.appendChild(clone)

    const liked = document.querySelector('.fa-thumbs-up')
    setRemderPage(liked)
}


const setRemderPage = (liked) => {
    liked.addEventListener('click', () => {
        let dataAttribute = 1
        const likedButton = document.querySelector('.card__like')
        likedButton.dataset.after = `${dataAttribute +1} MG`
        likedButton.style.color = 'wheat'
        likedButton.style.transition = 'color 1s ease'
    })
}