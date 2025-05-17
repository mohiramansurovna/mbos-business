'use client';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';
import {Button} from './ui/button';
import {getDictionary} from '@/get-dictionary';
import {useRouter} from 'next/navigation';

export default function Services({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	const containerRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: containerRef,
		offset: ['start end', 'end start']
	});
	const goUp = 75;
	const section1Opacity = useTransform(
		scrollYProgress,
		[0.0, 0.3, 0.35],
		[1, 1, 0]
	);
	const section2Opacity = useTransform(
		scrollYProgress,
		[0.3, 0.35, 0.45, 0.5],
		[0, 1, 1, 0]
	);
	const section3Opacity = useTransform(
		scrollYProgress,
		[0.45, 0.5, 0.7, 0.72],
		[0, 1, 1, 0]
	);
	const section4Opacity = useTransform(
		scrollYProgress,
		[0.7, 0.72, 1],
		[0, 1, 1]
	);
	const section1Y = useTransform(
		scrollYProgress,
		[0.0, 0.3, 0.35],
		[0, 0, -goUp]
	);
	const section2Y = useTransform(
		scrollYProgress,
		[0.2, 0.25, 0.45, 0.5],
		[goUp, 0, 0, -goUp]
	);
	const section3Y = useTransform(
		scrollYProgress,
		[0.45, 0.5, 0.7, 0.72],
		[goUp, 0, 0, -goUp]
	);
	const section4Y = useTransform(
		scrollYProgress,
		[0.7, 0.72, 1],
		[goUp, 0, 0]
	);
	const router = useRouter();
	return (
		<div ref={containerRef} id='services' className='relative h-[400vh]'>
			<div className='sticky top-0 h-screen flex items-center justify-center text-white'>
				<motion.div
					style={{opacity: section1Opacity, y: section1Y}}
					className='absolute flex md:flex-row flex-col justify-center gap-2 items-center w-full pt-20 md:pl-44 px-12'
				>
					<div className='flex flex-col items-start gap-2'>
						<h1 className='text-3xl md:text-5xl font-bold mb-4'>
							{t.services.section1.h1}
						</h1>
						<p className='mb-4'>{t.services.section1.p}</p>
						<p>{t.services.section1.p2}</p>
						<Button
							onClick={() => router.push('#contact')}
							className='mt-[1.6rem] mx-2 bg-[#166cc8]/10 border border-[#166cc8]'
						>
							{t.services.button}
						</Button>
					</div>
					<DotLottieReact
						src='https://lottie.host/0781d380-5642-431f-bf2e-21ac133ffe14/IFTQuYUoCi.lottie'
						loop
						autoplay
						className='w-full'
					/>
				</motion.div>

				<motion.div
					style={{opacity: section2Opacity, y: section2Y}}
					className='absolute flex md:flex-row flex-col justify-center gap-2 items-center w-full pt-44 md:pt-20 md:pl-44 px-12'
				>
					<div className='flex flex-col items-start gap-2'>
						<h1 className='text-3xl md:text-5xl font-bold mb-4'>
							{t.services.section2.h1}
						</h1>
						<p className='mb-4'>{t.services.section2.p}</p>
						<p>{t.services.section2.p2}</p>
						<Button
							onClick={() => router.push('#contact')}
							className='mt-[1.6rem] mx-2 bg-[#166cc8]/10 border border-[#166cc8]'
						>
							{t.services.button}
						</Button>
					</div>
					<DotLottieReact
						src='https://lottie.host/8468f96d-2c8a-4ad7-972e-3add97c92a60/jczwCgtdE1.lottie'
						loop
						autoplay
						className='w-full'
					/>
				</motion.div>

				<motion.div
					style={{opacity: section3Opacity, y: section3Y}}
					className='absolute flex md:flex-row flex-col justify-center gap-2 items-center w-full pt-44 md:pt-20 md:pl-44 px-12'
				>
					<div className='flex flex-col items-start gap-2'>
						<h1 className='text-3xl md:text-5xl font-bold mb-4'>
							{t.services.section3.h1}
						</h1>
						<p className='mb-4'>{t.services.section3.p}</p>
						<p>{t.services.section3.p2}</p>
						<Button
							onClick={() => router.push('#contact')}
							className='mt-[1.6rem] mx-2 bg-[#166cc8]/10 border border-[#166cc8]'
						>
							{t.services.button}
						</Button>
					</div>
					<DotLottieReact
						src='https://lottie.host/ffec0e80-2df3-4904-839a-100070b166f2/bsIjSNN15N.lottie'
						loop
						autoplay
						className='w-full'
					/>
				</motion.div>
				<motion.div
					style={{opacity: section4Opacity, y: section4Y}}
					className='absolute flex md:flex-row flex-col justify-center gap-2 items-center w-full pt-44 md:pt-20 md:pl-44 px-12'
				>
					<div className='flex flex-col items-start gap-2'>
						<h1 className='text-3xl md:text-5xl font-bold mb-4'>
							{t.services.section4.h1}
						</h1>
						<p className='mb-4'>{t.services.section4.p}</p>
						<p>{t.services.section4.p2}</p>
						<Button
							onClick={() => router.push('#contact')}
							className='mt-[1.6rem] mx-2 bg-[#166cc8]/10 border border-[#166cc8]'
						>
							{t.services.button}
						</Button>
					</div>
					<DotLottieReact
						src='https://lottie.host/0781d380-5642-431f-bf2e-21ac133ffe14/IFTQuYUoCi.lottie'
						loop
						autoplay
						className='w-full'
					/>
				</motion.div>
			</div>
		</div>
	);
}
