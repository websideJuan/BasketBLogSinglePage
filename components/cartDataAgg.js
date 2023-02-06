
export function cartDataAgg (props) {
    let cta__product = props.querySelector('.cta__product')

    if(cta__product.dataset.text === 'Agregar al carrito') {
        cta__product.dataset.text = '🛒'
        cta__product.classList.add('animationCar')
    }
 
    setCartDataAgg(props)
}

const objs = {}

const setCartDataAgg = (props) => {

    const product = {
        titleProduct: props.querySelector('.liveHero__points').textContent,
        imageProduct: props.querySelector('img').getAttribute('src'),
        id: props.querySelector('.cta__product').dataset.id,
        count : 1
    }

    if(objs.hasOwnProperty(product.id)){
        product.count = objs[product.id].count + 1 
    }

    
    objs[product.id] = {...product}
    console.log(objs)
}