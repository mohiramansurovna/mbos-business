'use client'
import React from 'react';
import {BoxReveal} from '@/components/magicui/box-reveal';
import {Button} from '@/components/ui/button';
import {BackgroundBeams} from '@/components/ui/background-beams';
import Hamkorlar from './Hamkorlar';
import {getDictionary} from '@/get-dictionary';

export default function Main({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	return (
		<section
			id='home'
			className='flex flex-col items-center text-start justify-center min-h-96 pt-44 gap-6'
		>
			<BackgroundBeams />
			<div className='w-full md:max-w-1/2 text-center flex flex-col items-center justify-center mt-8'>
				<BoxReveal boxColor={'#166cc8'} duration={0.5}>
					<p className='text-[2rem]/[2rem] md:text-[4rem]/[4rem] font-semibold mb-3'>
						<span className='text-transparent'>.</span>
						{t.home.firsth1}
						<br />
						<span className='text-mbosColor'>
							{t.home.span}
						</span>{' '}
						{t.home.secondh1}
					</p>
				</BoxReveal>

				<BoxReveal boxColor={'#166cc8'} duration={0.5}>
					<h2 className='mt-[.5rem] text-[1rem]/[1rem] my-3'>
						{t.home.h2}
					</h2>
				</BoxReveal>
				<BoxReveal boxColor={'#166cc8'} duration={0.5}>
					<p className='mt-[.5rem] text-[1rem]/[1rem]'>
						{t.home.p}
					</p>
				</BoxReveal>

				<BoxReveal boxColor={'#166cc8'} duration={0.5}>
					<Button className='mt-[1.6rem] hover:bg-[#166cc8]/60 bg-[#166cc8]'>
						{t.header.nav.contact}
					</Button>
					<Button className='mt-[1.6rem] mx-2 bg-[#166cc8]/10 border border-[#166cc8]'>
						{t.services.button}
					</Button>
				</BoxReveal>
			</div>
			<Hamkorlar />
		</section>
	);
}
