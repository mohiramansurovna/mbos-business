'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import Link from 'next/link';
import {getDictionary} from '@/get-dictionary';
import Image from 'next/image';
import {FaInstagram, FaTelegram} from 'react-icons/fa6';
const Meteors = dynamic(() => import('@/components/ui/meteors'), {
	ssr: false
});

export default function Footer({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	return (
		<footer className='flex mt-24 justify-between items-center bg-[#100f16]'>
			<div className='relative w-full'>
				<div className='absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-400 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl' />
				<div className='relative flex h-full flex-col items-start justify-end overflow-hidden rounded-t-2xl border border-gray-800 bg-[#0a0c16] px-12 py-8 shadow-xl'>
					<section className='w-full flex flex-col gap-4 justify-start'>
						<h1 className='text-2xl font-semibold my-4 font-sans text-mbosColor'>
							{t.footer.h1}
						</h1>
						<Image
							src='/logo.svg'
							alt='MBOS'
							width={100}
							height={100}
							className='w-[100px] md:w-[200px]  object-contain'
						/>
						<p className='text-sm'>Copyright © 2025</p>
					</section>
					<section className='flex w-full flex-col justify-start items-end'>
						<ul className='flex flex-wrap items-center justify-start my-1.5 px-1 gap-3'>
							<li className='text-mm'>
								<Link href='#home'>{t.header.nav.main}</Link>
							</li>
							<li className='text-mm'>
								<Link href='#services'>
									{t.header.nav.about}
								</Link>
							</li>
							<li className='text-mm'>
								<Link href='#features'>
									{t.header.nav.services}
								</Link>
							</li>
							<li className='text-mm'>
								<Link href='#contact'>
									{t.header.nav.partnership}
								</Link>
							</li>
						</ul>
						<hr className='border-mbosColor my-4 border-t-transparent border w-full' />
						<ul className='flex items-center justify-start gap-3 px-1'>
							<li>+998 62 227 7676</li>
							<li>
								<Link href='###'>
									<FaTelegram />
								</Link>
							</li>
							<li>
								<Link href='###'>
									<FaInstagram />
								</Link>
							</li>
						</ul>
					</section>
					<Meteors number={20} />
				</div>
			</div>
		</footer>
	);
}
