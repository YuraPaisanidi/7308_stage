import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

gsap.set('svg', { opacity: 1 })

const stageTl = gsap.timeline()
	.from('#elem2', { y: '100%', opacity: 0, duration: 1, ease: 'sine.out' })
	.to('.stage__wrap', { y: -350, duration: 1, ease: 'sine.out' }, '>-15%')
	.to('.stage__wrap', { y: -1400, duration: 3, ease: 'sine.out' })
	.to('.stage__wrap', { y: -2500, duration: 4, ease: 'sine.out' })
	.to('.stage__bg', { height: '100vh', borderRadius: 0, duration: 2 }, '<')
// .to('#elem2', { y: 0, opacity: 1, duration: 2, ease: 'none' })
// .to('#elem1', { y: '-100%', opacity: 0, duration: 2, ease: 'none' }, '<+30%')

ScrollTrigger.create({
	trigger: '.stage',
	animation: stageTl,
	start: '0% 0%',
	end: '100% 0%',
	scrub: 2,
	pin: 'body',
})