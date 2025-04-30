import { gsap } from 'gsap';
export default class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
    }

    show() {
        gsap(this.preloader, {
            duration: 1,
            opacity: 1,
            ease: 'power2.inOut',
        });
    }
    hide() {
        gsap.to(this.preloader, {
            duration: 1,
            opacity: 0,
            y: "-100%",
            display: 'none',    
            ease: 'power2.inOut',
        });
    }
}
