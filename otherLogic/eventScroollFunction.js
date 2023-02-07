export function consoleFunction() {

    // window.addEventListener('scrollx')
        return window.addEventListener('scroll', () => {
            // console.log(Math.round(scrollY / 4))
            // // console.log(Math.round())
            // console.log(Math.trunc(window.pageYOffset / 2))


            if(Math.round(scrollY / 4) > Math.trunc(window.pageYOffset / 2)){
                return console.log('pasaste la mitad de la pantalla :)')
            }
        })
    // return console.log('first')
}