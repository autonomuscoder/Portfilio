gsap.registerPlugin(ScrollTrigger);
gsap.from('.message-wrapper', {duration: 1, y: '-100%', ease: 'bounce'});
gsap.from('#hero-img', {duration: 1, scale: '0.5', ease: 'circ-out'});
gsap.from('.about', {scrollTrigger: '.about', duration: 1, x: '-100%'})
gsap.from('.card-wrapper', {scrollTrigger: '.card', duration: 1, y: '100%', ease: 'circ-out'})
gsap.from('.contact-card', {duration: 2, scale: '0.5', ease: 'circ-out'})
gsap.to('.contact-card', {scrollTrigger: '.contact-card', duration: 2, scale: '1', ease: 'circ-out'})
gsap.from('.email', {duration: 1, scale: '0.3', ease: 'circ-out'})
gsap.to('.email', {scrollTrigger: '.contact-card', duration: 1, scale: '1', ease: 'circ-out'})
gsap.from('.title-wrapper', {duration: 1, y: '-100%', ease: 'bounce'});
