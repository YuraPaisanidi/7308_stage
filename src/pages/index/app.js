import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

gsap.set('svg', { opacity: 1 })
gsap.set('#accordion1Wrap', { height: 300 })
// gsap.set('#accordion2Wrap', { height: 148 })
// gsap.set('.stage__wrap', { transformOrigin: 'bottom right' })
// gsap.set('.stage__wrap', { transformOrigin: '50% 50%' })
gsap.set('#sidebar', { filter: 'brightness(100%)' })

gsap.set('#elem7Svg #item1', { autoAlpha: 0 })
gsap.set('#elem7Svg #itemsOther', { y: -370 })
gsap.set('#elem7Svg .hover', { fill: '#ffffff' })
gsap.set('#elem7Svg .arrow', { transformOrigin: '50% 50%' })
gsap.set('#elem7Svg #message1', { autoAlpha: 0 })
gsap.set('#elem7Svg #messageGroup', { y: -80 })


const stageTl = gsap.timeline({})
	.from('#elem2', { y: '100%', opacity: 0, duration: 5, ease: 'sine.inOut' })
	.to('.stage__wrap', { y: -350, duration: 7, ease: 'sine.inOut' }, '>-15%')
	.to('.stage__wrap', { y: -1400, duration: 12, ease: 'sine.inOut' })
	.to('.stage__wrap', { y: -2500, duration: 12, ease: 'sine.inOut' })
	.to('.stage__bg', { height: '100vh', borderRadius: 0, duration: 5, ease: 'sine.inOut' }, '<')

	// .from('#sidebar', { x: '-100%', duration: 5, filter: 'brightness(10%)', ease: 'sine.inOut' })
	.from('#sidebar', { duration: 5, opacity: 0, ease: 'sine.inOut' })
	.to('.stage__wrap', { scale: 0.8, x: 193, y: -2000, duration: 5, ease: 'sine.inOut' }, '<')


	.to('#accordion2Content .hover', { fill: '#E5EDFF', duration: 3, ease: 'sine.inOut' })
	.to('#accordion2Content .hover', { fill: '#F9FBFF', duration: 3, ease: 'sine.inOut' })
	.to('#accordion1Wrap', { height: 50, duration: 3, ease: 'sine.inOut' }, 'qq')
	.to('#accordion1Content .arrow', { scaleY: -1, duration: 3, transformOrigin: '50% 50%', ease: 'sine.inOut' }, '<')
	.to('#accordion2, #accordion3', { y: -137, duration: 3, ease: 'sine.inOut' }, '<+25%')


	// .to('#accordion2Content .hover', { fill: '#E5EDFF', duration: 3, ease: 'sine.inOut' })
	// .to('#accordion2Content .hover', { fill: '#F9FBFF', duration: 3, ease: 'sine.inOut' })
	.to('#accordion2Wrap', { height: 150, duration: 3, ease: 'sine.inOut' })
	.to('#accordion2Content .arrow', { scaleY: -1, duration: 3, transformOrigin: '50% 50%', ease: 'sine.inOut' }, '<')
	.to('#accordion3', { y: -40, duration: 3, ease: 'sine.inOut' }, '<')

	.to('.stage__wrap > *', { autoAlpha: 0, duration: 3, ease: 'sine.inOut' }, 'qq')
	.set('.stage__wrap > *', { display: 'none' })
	.set('#elem5', { display: 'block' }, '<')
	.set('.stage__wrap', { y: 0 }, '<')
	.to('#elem5', { autoAlpha: 1, duration: 3, ease: 'sine.inOut' }, '<')

	.to('.stage__wrap', { y: -500, duration: 10, ease: 'sine.inOut' }, '>+5')

	.to('#accordion3Content .hover', { fill: '#E5EDFF', duration: 3, ease: 'sine.inOut' })
	.to('#accordion3Content .hover', { fill: '#F9FBFF', duration: 3, ease: 'sine.inOut' })
	.to('#accordion2Wrap', { height: 50, duration: 3, ease: 'sine.inOut' }, 'qq1')
	.to('#accordion2Content .arrow', { scaleY: 1, duration: 3, transformOrigin: '50% 50%', ease: 'sine.inOut' }, '<')
	.to('#accordion3', { y: -137, duration: 3, ease: 'sine.inOut' }, '<+25%')

	// .to('#accordion3Content .hover', { fill: '#E5EDFF', duration: 3, ease: 'sine.inOut' })
	// .to('#accordion3Content .hover', { fill: '#F9FBFF', duration: 3, ease: 'sine.inOut' })
	.to('#accordion3Wrap', { height: 150, duration: 3, ease: 'sine.inOut' }, 'qq1')

	.to('#elem5', { autoAlpha: 0, duration: 3, ease: 'sine.inOut' }, 'qq1')
	.set('#elem5', { display: 'none' })
	.set('#elem6', { display: 'block' }, '<')
	.set('.stage__wrap', { y: 0 }, '<')
	.to('#elem6', { autoAlpha: 1, duration: 3, ease: 'sine.inOut' }, '<')

	.to('.stage__wrap', { y: -700, duration: 10, ease: 'sine.inOut' }, '>+5')

	.to('#elem6', { autoAlpha: 0, duration: 3, ease: 'sine.inOut' })
	// .to('#sidebar', { x: '-100%', duration: 5, filter: 'brightness(10%)', ease: 'sine.inOut' }, '<')
	.to('#sidebar', { opacity: 0, duration: 2, filter: 'brightness(10%)', ease: 'sine.inOut' }, '<')
	.to('.stage__wrap', { scale: 1, x: 0, y: 0, duration: 3, ease: 'sine.inOut' }, '<')
	.set('#elem6', { display: 'none' })

	.set('.stage__wrap', { y: 0 }, '<')
	.set('#elem7', { display: 'block' }, '<')
	.to('#elem7', { autoAlpha: 1, duration: 3, ease: 'sine.inOut' }, '<')

	.to('#elem7Svg #itemsOther', { y: -253, duration: 3, ease: 'sine.inOut' })
	.to('#elem7Svg #item1', { autoAlpha: 1, duration: 3, ease: 'sine.inOut' })

	.to('#elem7Svg .hover', { fill: '#E5EDFF', duration: 3, ease: 'sine.inOut' })
	.to('#elem7Svg .hover', { fill: '#ffffff', duration: 3, ease: 'sine.inOut' })

	.to('#elem7Svg .arrow', { scaleY: -1, duration: 3, ease: 'sine.inOut' })
	.to('#elem7Svg #itemsOther', { y: -100, duration: 3, ease: 'sine.inOut' }, '<')
	.to('#item1Wrap, #item1Wrap-2', { height: 255, duration: 3, ease: 'sine.inOut' }, '<+20%')

	.to('#elem7Svg #messageGroup', { y: 0, duration: 3, ease: 'sine.inOut' }, '>+2')
	.to('#elem7Svg #message1', { autoAlpha: 1, duration: 3, ease: 'sine.inOut' }, '<')
	.to('#item1Wrap, #item1Wrap-2', { height: 360, opacity: 0, duration: 3, ease: 'sine.inOut' }, '<')
	.to('#elem7Svg #itemsOther', { y: 0, duration: 3, ease: 'sine.inOut' }, '<')


ScrollTrigger.create({
	trigger: '.stage',
	animation: stageTl,
	start: '0% 0%',
	end: '100%+=' + (stageTl.duration() * 75) + '0%',
	scrub: 2,
	pin: 'body',
})
