import { gsap } from 'gsap';

export default class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
    }

    show() {
        gsap.to(this.preloader, { // Corrected to gsap.to
            duration: 1,
            opacity: 1,
            ease: 'power2.inOut',
        });
        if (!this.preloader) {
            console.error("Preloader element not found!");
        }
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
