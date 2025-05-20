'use client';
import {getDictionary} from '@/get-dictionary';
import {motion, MotionStyle, useScroll, useTransform} from 'framer-motion';
import {BarChart3, Bell, Globe, MapPin, Settings, Shield} from 'lucide-react';
import React, {useRef} from 'react';

export default function Features({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	const MotionGlobe = motion(Globe);
	const MotionBell = motion(Bell);
	const MotionSettings = motion(Settings);
	const MotionShield = motion(Shield);
	const MotionBarChart3 = motion(BarChart3);
	const MotionMapPin = motion(MapPin);
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start']
	});
	const all = [
		{
			color: useTransform(
				scrollYProgress,
				[0.2, 0.3],
				['#166cc8', '#7B1FA2']
			),
			hrColor: useTransform(scrollYProgress, [0.2, 0.3], ['0%', '100%']),
			icon: (style: MotionStyle) => (
				<MotionGlobe
					size={25}
					style={style}
					className='text-mbosColor bg-black z-20'
				/>
			),
			ml: ''
		},
		{
			color: useTransform(
				scrollYProgress,
				[0.3, 0.4],
				['#166cc8', '#7B1FA2']
			),
			hrColor: useTransform(scrollYProgress, [0.3, 0.4], ['0%', '100%']),
			icon: (style: MotionStyle) => (
				<MotionBell
					size={25}
					style={style}
					className='text-mbosColor bg-black z-20'
				/>
			),
			ml: 'md:ml-8'
		},
		{
			color: useTransform(
				scrollYProgress,
				[0.4, 0.5],
				['#166cc8', '#7B1FA2']
			),
			hrColor: useTransform(scrollYProgress, [0.4, 0.5], ['0%', '100%']),
			icon: (style: MotionStyle) => (
				<MotionSettings
					size={25}
					style={style}
					className='text-mbosColor bg-black z-20'
				/>
			),
			ml: 'md:ml-16'
		},
		{
			color: useTransform(
				scrollYProgress,
				[0.5, 0.6],
				['#166cc8', '#7B1FA2']
			),
			hrColor: useTransform(scrollYProgress, [0.5, 0.6], ['0%', '100%']),
			icon: (style: MotionStyle) => (
				<MotionShield
					size={25}
					style={style}
					className='text-mbosColor bg-black z-20'
				/>
			),
			ml: 'md:ml-16'
		},
		{
			color: useTransform(
				scrollYProgress,
				[0.6, 0.7],
				['#166cc8', '#7B1FA2']
			),
			hrColor: useTransform(scrollYProgress, [0.6, 0.7], ['0%', '100%']),
			icon: (style: MotionStyle) => (
				<MotionBarChart3
					size={25}
					style={style}
					className='text-mbosColor bg-black z-20'
				/>
			),
			ml: 'md:ml-8'
		},
		{
			color: useTransform(
				scrollYProgress,
				[0.7, 0.8],
				['#166cc8', '#7B1FA2']
			),
			hrColor: useTransform(scrollYProgress, [0.7, 0.8], ['0%', '100%']),
			icon: (style: MotionStyle) => (
				<MotionMapPin
					size={25}
					style={style}
					className='text-mbosColor bg-black z-20'
				/>
			),
			ml: ''
		}
	];

	return (
		<section id='features'>
			<div className='absolute'>
				<div className='size-[120vh] hidden md:block absolute border-mbosColor bg-black z-10 border translate-x-[-60%] -translate-y-[8vh] rounded-full'></div>
				<div className='size-[140vh] hidden md:block absolute border-purple-700 z-10 border translate-x-[-60%] -translate-y-[16vh] rounded-full'></div>
			</div>
			<ul
				ref={targetRef}
				className='flex flex-col font-semibold text-xl gap-4 justify-center w-full pl-4 pr-20 md:pl-96 '
			>
				{all.map((each, index) => {
					return (
						<li
							key={index}
							className={
								'bg-black z-20 rounded-full p-1 md:p-6 flex md:items-center ' +
								each.ml
							}
						>
							<motion.div
								style={{borderColor: each.color}}
								className='border bg-black z-20 border-mbosColor rounded-full aspect-square flex items-center justify-center size-12 md:size-16 mr-3'
							>
								{each.icon({color: each.color})}
							</motion.div>
							<div>
								<h1>{t.features[index].h1}</h1>
								<motion.hr
									style={{
										borderColor: '#7b1fa2',
										width: each.hrColor
									}}
								/>
								<p className='text-gray-400 font-light text-mm'>
									{t.features[index].p}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
