'use client';
import React, {useCallback} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Menu, Phone, X} from 'lucide-react';
import {getDictionary} from '@/get-dictionary';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	const [open, setOpen] = React.useState<boolean>(false);
	const navigationRef = React.useRef<HTMLDivElement>(null);
	const handleMenu = useCallback(() => {
		if (open) {
			navigationRef.current?.classList.remove('in-menu');
			navigationRef.current?.classList.add('out-menu');
		} else {
			navigationRef.current?.classList.add('in-menu');
			navigationRef.current?.classList.remove('out-menu');
		}
		setOpen(!open);
	}, [open]);
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navigationRef.current &&
				!navigationRef.current.contains(event.target as Node) &&
				open
			) {
				handleMenu();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [open, handleMenu]);

	React.useEffect(() => {
		if (open) {
			setTimeout(() => {
				document.body.style.overflowX = 'hidden';
			}, 500);
		} else {
			document.body.style.overflow = '';
		}
	}, [open]);
	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<div className='fixed md:hidden bg-black/20 backdrop-blur-3xl top-0 left-0 w-screen h-16 z-60 flex justify-between items-center py-5 px-3'>
				<Link onClick={handleMenu} href='#home'>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={80}
						height={80}
					></Image>
				</Link>
				<div className='flex items-center'>
					<LocaleSwitcher />
					<button onClick={handleMenu} className='ml-2'>
						{!open ? <Menu /> : <X />}
					</button>
				</div>
			</div>
			<header
				ref={navigationRef}
				className={`transition-all duration-300
                    ${open ? 'right-0 opacity-100' : '-right-3/5 opacity-0'}
                    md:right-0 md:opacity-100 
                    fixed z-50 w-full bg-black/30 md:bg-black/20 text-lg md:text-mm  backdrop-blur-xl md:backdrop-blur-sm flex flex-col md:flex-row justify-between py-10 md:py-0 pt-20 md:pt-0 md:justify-around items-center h-screen md:h-25 overflow-hidden text-white`}
			>
				<Link onClick={handleMenu} href='#home'>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={140}
						height={60}
						className='hidden md:block'
					></Image>
				</Link>
				<nav className='flex flex-col md:text-[18px] text-[22px] font-light items-start md:flex-row gap-1 md:gap-3'>
					<Link
						onClick={handleMenu}
						href='#home'
						className='hover:text-gray-400 py-1.5 px-3 rounded-sm active:bg-white active:text-primary-blue'
					>
						{t.header.nav.main}
					</Link>
					<Link
						onClick={handleMenu}
						href='#services'
						className='hover:text-gray-400 py-1.5 px-3 rounded-sm active:bg-white active:text-primary-blue'
					>
						{t.header.nav.about}
					</Link>
					<Link
						onClick={handleMenu}
						href='#features'
						className='hover:text-gray-400 py-1.5 px-3 rounded-sm active:bg-white active:text-primary-blue '
					>
						{t.header.nav.services}
					</Link>
					<Link
						onClick={handleMenu}
						href='#contact'
						className='hover:text-gray-400 py-1.5 px-3 rounded-sm active:bg-white active:text-primary-blue '
					>
						{t.header.nav.partnership}
					</Link>
				</nav>
				<div className='flex gap-4 md:flex-row flex-col md:items-center'>
					<p className='flex items-center gap-2 text-[16px] font-light'>
						<Phone size={17} />
						62 227 7676
					</p>
					<div className='hidden md:block'>
						<LocaleSwitcher />
					</div>
					<button className='px-4 py-2.5 border-sm bg-mbosColor hover:bg-mbosColor/80 rounded-md text-white font-semibold'>
						{t.header.login}
					</button>
				</div>
			</header>
		</>
	);
}
