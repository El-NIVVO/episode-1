import { gsap } from "gsap/all";

export const slideAnimation = function(tlname) {


    const slide2MouseClick = gsap.timeline({paused: true})
        .to('#sl2Mou', {scale: .8, rotate: -10, duration: .15, transformOrigin: 'center', repeat: 1, yoyo: true})

    const slide5MouseClick = gsap.timeline({paused: true})
        .to('#sl5Mou', {scale: .8, rotate: -10, duration: .15, transformOrigin: 'center', repeat: 1, yoyo: true})

    const slide1 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl1', {opacity: 1})
        .to('#gsl11', {y: -1300, ease: 'none', duration: 3.5})
        .to('#gsl11', {y: 0, ease: 'none', duration: 3.5}, '>+1')
        .to('#gsl11 > *:not(#sl1Im)', {opacity: 0})

    const slide1i1 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl1T', {opacity: 1}, '<')
        .to('#gsl12', {opacity: 1}, '>+7.5')
        .to('#gsl12', {opacity: 0}, '>+7.5')
        .to('#gsl13', {opacity: 1}, '<')
        .to('#gsl11, #sl1T', {opacity: 0}, '<')
        .to('#sl1', {opacity: 0}, '>+13')

    const slide2 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl2', {opacity: 1}, '<')
        .fromTo(slide2MouseClick, {progress: 0}, {progress: 1, duration: .15, ease: 'none'})
        .set('#sl2N', {opacity: 0})
        .set('#sl2P', {opacity: 1}, '<')
        .to('#sl2Mou', {y: -850, x: -120, ease: 'none', duration: .8})
        .fromTo(slide2MouseClick, {progress: 0}, {progress: 1, duration: .15, ease: 'none'})
        .set('#sl2Mon', {opacity: 1})
        .to('#sl2', {opacity: 0}, '>+2')

    const slide3 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl3', {opacity: 1}, '<')
        .to('#gsl31', {opacity: 0}, '>+2')
        .to('#gsl32', {opacity: 1}, '<')
        .to('#gsl32', {opacity: 0}, '>+11')
        .to('#gsl33', {opacity: 1}, '<')
        .to('#sl3', {opacity: 0}, '>+5')

    const slide4 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl4', {opacity: 1}, '<')
        .to('#sl4', {opacity: 0}, '>+42')

    const slide5 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl5', {opacity: 1}, '<')
        .fromTo(slide5MouseClick, {progress: 0}, {progress: 1, duration: .15, ease: 'none'}, '>+.5')
        .set('#gsl51, #sl5Mou', {opacity: 0})
        .set('#gsl52', {opacity: 1}, '<')
        .to('#gsl52', {opacity: 0}, '>+3')
        .to('#gsl53', {opacity: 1}, '<')
        .to('#gsl53', {opacity: 0}, '>+3')
        .to('#gsl54', {opacity: 1}, '<')
        .to('#gsl54 > g:nth-of-type(2)', {y: -310}, '>+3')
        .to('#gsl54 > g:nth-of-type(1)', {y: 690}, '<')
        .to('#sl5', {opacity: 0}, '>+3')

    const slide6 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl6', {opacity: 1}, '<')
        .to('#gsl61', {opacity: 0}, '>+20')
        .to('#gsl62', {opacity: 1}, '<')
        .to('#sl6', {opacity: 0}, '>+20')

    const slide7 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl7', {opacity: 1}, '<')
        .to('#sl7', {opacity: 0}, '>+20')

    const slide8 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl8', {opacity: 1}, '<')
        .to('#gsl81', {opacity: 0}, '>+9')
        .to('#gsl82', {opacity: 1}, '<')
        .to('#sl8', {opacity: 0}, '>+17')

    // const slide9 = gsap.timeline({paused: true, defaults: {duration: 1}})
        // .to('.header', {y: 100}, '<')
        // .to('.header', {x: 0, y: 0}, '>+38')


    const slide10 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl10', {opacity: 1}, '<')
        .to('#sl10', {opacity: 0}, '>+62')

    const slide11 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl11', {opacity: 1}, '<')
        .to('#sl11g1, #sl11g1-2', {x: 500, y: -25, duration: 37, ease: 'none'})
        .to('#sl11g2, #sl11g2-2', {x: 500, duration: 37, ease: 'none'}, '<')
        .to('#sl11g3, #sl11g3-2', {x: 500, y: 25, duration: 37, ease: 'none'}, '<')
        .to('#sl11', {opacity: 0}, '<+35')

    const slide12 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl12', {opacity: 1}, '<')
        .to('#sl12', {opacity: 0}, '>+19')

    const slide13 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl13', {opacity: 1}, '<')
        .to('#gsl131', {opacity: 0}, '>+7')
        .to('#gsl132', {opacity: 1}, '<')
        .to('#gsl132', {opacity: 0}, '>+7')
        .to('#gsl133', {opacity: 1}, '<')
        .to('#sl13', {opacity: 0}, '>+7')

    const slide14 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl14', {opacity: 1}, '<')
        .to('#sl14', {opacity: 0}, '>+24')

    const slide15 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl15', {opacity: 1}, '<')
        .to('#gsl151', {opacity: 1}, '>+5')
        .to('#gslbat', {scaleX: .6, transformOrigin: '0% 50%', fill: '#FFD900'}, '>+5')
        .to('#gsl152', {opacity: 1}, '<')
        .to('#gslbat', {scaleX: .3, transformOrigin: '0% 50%', fill: '#FF0000'}, '>+5')
        .to('#gsl153', {opacity: 1}, '<')
        .to('#gsl154', {opacity: 1}, '>+5')
        .to('#gslbat', {scaleX: 1, transformOrigin: '0% 50%', fill: '#7AFAA1'}, '<')
        .to('#sl15', {opacity: 0}, '>+3')

    const slide16 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl16', {opacity: 1}, '<')
        .to('#gsl161', {opacity: 0}, '>+12')
        .to('#gsl162', {opacity: 1}, '<')
        .to('#sl16', {opacity: 0}, '>+12')

    const slide17 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl17', {opacity: 1}, '<')
        .to('#sl17', {opacity: 0}, '>+24')

    const slide18 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl18', {opacity: 1}, '<')
        .to('#sl18', {opacity: 0}, '>+21')

    const slide19 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl19', {opacity: 1}, '<')
        .to('#sl19', {opacity: 0}, '>+48')

    const slide20 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl20', {opacity: 1}, '<')
        .to('#sl20', {opacity: 0}, '>+33')

    const slide21 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl21', {opacity: 1}, '<')
        .to('#gsl212', {opacity: 1}, '>+30')
        .to('#sl21', {opacity: 0}, '>+33')

    const slide22 = gsap.timeline({paused: true, defaults: {duration: 1}})
        .to('#sl22', {opacity: 1}, '<')

    gsap.to('#sl11Cl > g:nth-of-type(1), #gsl154 > g:nth-of-type(1)', {rotate: 360, transformOrigin: 'center', duration: 5, repeat: -1, ease: 'none'})

    gsap.to('#sl11Cl > g:nth-of-type(2), #gsl154 > g:nth-of-type(2)', {rotate: 360, transformOrigin: 'center', duration: 10, repeat: -1, ease: 'none'})

    let tempSelectTl
    switch (tlname) {
        case "slide1" : tempSelectTl = slide1; break;
        case "slide1i1" : tempSelectTl = slide1i1; break;
        case "slide2" : tempSelectTl = slide2; break;
        case "slide3" : tempSelectTl = slide3; break;
        case "slide4" : tempSelectTl = slide4; break;
        case "slide5" : tempSelectTl = slide5; break;
        case "slide6" : tempSelectTl = slide6; break;
        case "slide7" : tempSelectTl = slide7; break;
        case "slide8" : tempSelectTl = slide8; break;
        case "slide9" : tempSelectTl = slide9; break;
        case "slide10" : tempSelectTl = slide10; break;
        case "slide11" : tempSelectTl = slide11; break;
        case "slide12" : tempSelectTl = slide12; break;
        case "slide13" : tempSelectTl = slide13; break;
        case "slide14" : tempSelectTl = slide14; break;
        case "slide15" : tempSelectTl = slide15; break;
        case "slide16" : tempSelectTl = slide16; break;
        case "slide17" : tempSelectTl = slide17; break;
        case "slide18" : tempSelectTl = slide18; break;
        case "slide19" : tempSelectTl = slide19; break;
        case "slide20" : tempSelectTl = slide20; break;
        case "slide21" : tempSelectTl = slide21; break;
        case "slide22" : tempSelectTl = slide22; break;

    }

    return tempSelectTl;
}
