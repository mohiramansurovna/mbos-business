import React from 'react';
import Link from 'next/link';
import {getDictionary} from '@/get-dictionary';

export default function Footer({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	return (
		<footer className='py-10 mt-24 bg-footer'>
			<section className='border border-transparent border-b-mbosColor pl-4 md:px-24 w-full mb-2 pb-2'>
				<ul className='flex items-center justify-start my-1.5 px-1 flex-wrap gap-3'>
					<li className='text-[16px]/[27px]'>
						<Link href='#home'>{t.header.nav.main}</Link>
					</li>
					<li className='text-[16px]/[27px]'>
						<Link href='#services'>{t.header.nav.about}</Link>
					</li>
					<li className='text-[16px]/[27px]'>
						<Link href='#features'>{t.header.nav.services}</Link>
					</li>
					<li className='text-[16px]/[27px]'>
						<Link href='#contact'>{t.header.nav.partnership}</Link>
					</li>
				</ul>
			</section>
			<section className=' px-10 md:px-22 border p-3 border-transparent border-b-mbosColor/50 w-full flex flex-col gap-3 items-start'>
				<h2 className='text-[20px]/[40px] font-medium'>
					{t.footer.phone}
					<br />
					<span className='text-[27px]/[35px] font-semibold'>
						+998 62 227 7676
					</span>
				</h2>
				<p>{t.footer.license}</p>
				<p>{t.footer.p}</p>
			</section>
			<p className=' px-10 md:px-22'>© 2013 - 2025.</p>
		</footer>
	);
}
