import localFont from 'next/font/local'


const MontRegular = localFont({
    src: '../assets/fonts/MontRegular.woff2',
    weight: '400', variable: '--regular',
    style: 'normal', preload: false
})

const MontSemiBold =  localFont({
    src: '../assets/fonts/MontSemiBold.woff2',
    weight: '600', variable: '--semibold',
    style: 'normal', preload: false
})


export {
    MontRegular, MontSemiBold
}