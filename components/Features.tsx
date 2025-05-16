'use client';
import {getDictionary} from '@/get-dictionary';
import {motion, useScroll, useTransform, useAnimation} from 'framer-motion';
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
	const color1 = useTransform(
		scrollYProgress,
		[0.2, 0.3],
		['#166cc8', '#7B1FA2']
	);
	const color2 = useTransform(
		scrollYProgress,
		[0.3, 0.4],
		['#166cc8', '#7B1FA2']
	);
	const color3 = useTransform(
		scrollYProgress,
		[0.4, 0.5],
		['#166cc8', '#7B1FA2']
	);
	const color4 = useTransform(
		scrollYProgress,
		[0.5, 0.6],
		['#166cc8', '#7B1FA2']
	);
	const color5 = useTransform(
		scrollYProgress,
		[0.6, 0.7],
		['#166cc8', '#7B1FA2']
	);
	const color6 = useTransform(
		scrollYProgress,
		[0.7, 0.8],
		['#166cc8', '#7B1FA2']
	);
	const color1Hr = useTransform(scrollYProgress, [0.2, 0.3], ['0%', '100%']);
	const color2Hr = useTransform(scrollYProgress, [0.3, 0.4], ['0%', '100%']);
	const color3Hr = useTransform(scrollYProgress, [0.4, 0.5], ['0%', '100%']);
	const color4Hr = useTransform(scrollYProgress, [0.5, 0.6], ['0%', '100%']);
	const color5Hr = useTransform(scrollYProgress, [0.6, 0.7], ['0%', '100%']);
	const color6Hr = useTransform(scrollYProgress, [0.7, 0.8], ['0%', '100%']);
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
				<li className='bg-black z-20 rounded-full p-3 md:p-6 flex items-center'>
					<MotionGlobe
						style={{color: color1, borderColor: color1}}
						className='text-mbosColor bg-black z-20 border border-mbosColor rounded-full size-16 p-3 inline-block mr-3'
					/>

					<div>
						<h1>{t.features.li1.h1}</h1>
						<motion.hr
							style={{borderColor: '#7b1fa2', width: color1Hr}}
						/>
						<p className='text-gray-400 font-light text-mm'>
							{t.features.li1.p}
						</p>
					</div>
				</li>
				<li className='bg-black z-20 rounded-full p-3 md:p-6 md:ml-8 flex items-center'>
					<MotionBell
						style={{color: color2, borderColor: color2}}
						className='text-mbosColor bg-black z-20 border border-mbosColor rounded-full size-16 p-3 inline-block mr-3'
					/>
					<div>
						<h1>{t.features.li2.h1}</h1>
						<motion.hr
							style={{borderColor: '#7b1fa2', width: color2Hr}}
						/>

						<p className='text-gray-400 font-light text-mm'>
							{t.features.li2.p}
						</p>
					</div>
				</li>
				<li className='bg-black z-20 rounded-full p-3 md:p-6 md:ml-16 flex items-center'>
					<MotionSettings
						style={{color: color3, borderColor: color3}}
						className='text-mbosColor bg-black z-20 border border-mbosColor rounded-full size-16 p-3 inline-block mr-3'
					/>
					<div>
						<h1>{t.features.li3.h1}</h1>
						<motion.hr
							style={{borderColor: '#7b1fa2', width: color3Hr}}
						/>

						<p className='text-gray-400 font-light text-mm'>
							{t.features.li3.p}
						</p>
					</div>
				</li>
				<li className='bg-black z-20 rounded-full p-3 md:p-6 md:ml-16 flex items-center'>
					<MotionShield
						style={{color: color4, borderColor: color4}}
						className='text-mbosColor bg-black z-20 border border-mbosColor rounded-full size-16 p-3 inline-block mr-3'
					/>
					<div>
						<h1>{t.features.li4.h1}</h1>
						<motion.hr
							style={{borderColor: '#7b1fa2', width: color4Hr}}
						/>

						<p className='text-gray-400 font-light text-mm'>
							{t.features.li4.p}
						</p>
					</div>
				</li>
				<li className='bg-black z-20 rounded-full p-3 md:p-6 md:ml-8 flex items-center'>
					<MotionBarChart3
						style={{color: color5, borderColor: color5}}
						className='text-mbosColor bg-black z-20 border border-mbosColor rounded-full size-16 p-3 inline-block mr-3'
					/>
					<div>
						<h1>{t.features.li5.h1}</h1>
						<motion.hr
							style={{borderColor: '#7b1fa2', width: color5Hr}}
						/>

						<p className='text-gray-400 font-light text-mm'>
							{t.features.li5.p}
						</p>
					</div>
				</li>
				<li className='bg-black z-20 rounded-full p-3 md:p-6 flex items-center'>
					<MotionMapPin
						style={{color: color6, borderColor: color6}}
						className='text-mbosColor bg-black z-20 border border-mbosColor rounded-full size-16 p-3 inline-block mr-3'
					/>
					<div>
						<h1>{t.features.li6.h1}</h1>
						<motion.hr
							style={{borderColor: '#7b1fa2', width: color6Hr}}
						/>

						<p className='text-gray-400 font-light text-mm'>
							{t.features.li6.p}
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
