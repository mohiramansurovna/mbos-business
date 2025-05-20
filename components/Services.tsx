'use client';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import {motion, useScroll} from 'framer-motion';
import {useAnimation} from 'motion/react';
import {useRef, useEffect} from 'react';
import {Button} from './ui/button';
import {getDictionary} from '@/get-dictionary';
import {useRouter} from 'next/navigation';

export default function Services({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	const sections = [
		{
			src: 'https://lottie.host/0781d380-5642-431f-bf2e-21ac133ffe14/IFTQuYUoCi.lottie',
			h1: t.services.section1.h1,
			p: t.services.section1.p,
			p2: t.services.section1.p2
		},
		{
			src: 'https://lottie.host/8468f96d-2c8a-4ad7-972e-3add97c92a60/jczwCgtdE1.lottie',
			h1: t.services.section2.h1,
			p: t.services.section2.p,
			p2: t.services.section2.p2
		},
		{
			src: 'https://lottie.host/ffec0e80-2df3-4904-839a-100070b166f2/bsIjSNN15N.lottie',
			h1: t.services.section3.h1,
			p: t.services.section3.p,
			p2: t.services.section3.p2
		},
		{
			src: 'https://lottie.host/4fbec6d5-c533-4ccf-8fed-6fe4c1b29c85/cXioqao7Ho.lottie',
			h1: t.services.section4.h1,
			p: t.services.section4.p,
			p2: t.services.section4.p2
		}
	];
	const router = useRouter();
	const containerRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: containerRef,
		offset: ['start end', 'end start']
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const control = [
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation()
	];
	const variants = {
		hidden: {
			opacity: 0,
			scale: 0.8
		},
		visible: {
			opacity: 1,
			scale: 1
		}
	};

	useEffect(() => {
		const scrolling = () => {
			const scroll = scrollYProgress.get();

			if (scroll <= 0.43) {
				control[0].start('visible');
				control[1].start('hidden');
				control[2].start('hidden');
				control[3].start('hidden');
			} else if (scroll > 0.43 && scroll <= 0.48) {
				control[0].start('hidden');
				control[1].start('visible');
				control[2].start('hidden');
				control[3].start('hidden');
			} else if (scroll > 0.48 && scroll <= 0.58) {
				control[0].start('hidden');
				control[1].start('hidden');
				control[2].start('visible');
				control[3].start('hidden');
			} else if (scroll > 0.58) {
				control[0].start('hidden');
				control[1].start('hidden');
				control[2].start('hidden');
				control[3].start('visible');
			}
		};
		window.addEventListener('scroll', scrolling);
		return () => window.removeEventListener('scroll', scrolling);
	}, [control, scrollYProgress]);

	return (
		<div ref={containerRef} id='services' className='relative '>
			<div className='top-0 flex flex-col items-center justify-center text-white'>
				{sections.map((section, index) => {
					return (
						<motion.div
							key={index}
							whileInView={{scale: 1, y: 0}}
							initial={{scale: 0.9, y: 50}}
							// animate={control[index]}
							// variants={variants}
							// transition={{
							// 	duration: 0.1,
							// 	ease: 'easeInOut'
							// }}
							// initial={'hidden'}
							className='flex md:flex-row h-[110vh] md:h-[90vh] flex-col justify-center gap-2 items-center md:pl-44 py-10 pt-28 md:pt-10 mx-12'
						>
							<div className='flex flex-col items-start gap-2'>
								<h1 className='text-3xl md:text-5xl font-bold mb-4'>
									{section.h1}
								</h1>
								<p className='mb-4'>{section.p}</p>
								<p>{section.p2}</p>
								<Button
									onClick={() => router.push('#contact')}
									className='mt-[1.6rem] mx-2 z-40 bg-[#166cc8]/10 border border-[#166cc8]'
								>
									{t.services.button}
								</Button>
							</div>
							<DotLottieReact
								src={section.src}
								loop
								autoplay
								className='w-full'
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
