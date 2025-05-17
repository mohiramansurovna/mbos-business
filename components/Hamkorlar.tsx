import React from 'react';
import {InfiniteMovingCards} from './ui/infinite-moving-cards';
const hamkorlar = [
	{
		src: '/hamkor1.svg',
		className: 'size-12 md:size-20',
		width: 75,
		height: 75
	},
	{
		src: '/hamkor2.svg',
		className: 'w-[130px] h-[45px] md:h-[74px] md:w-[205px]',
		width: 205,
		height: 74
	},
	{
		src: '/hamkor3.svg',
		className: 'size-12 md:size-20',
		width: 75,
		height: 75
	},
	{
		src: '/hamkor4.svg',
		className: 'w-[130px] h-[45px] md:h-[70px] md:w-[199px]',
		width: 199,
		height: 70
	},
	{
		src: '/hamkor5.svg',
		className: 'size-12 md:size-20',
		width: 75,
		height: 75
	},
	{
		src: '/hamkor1.svg',
		className: 'size-12 md:size-20',
		width: 75,
		height: 75
	},
	{
		src: '/hamkor2.svg',
		className: 'w-[130px] h-[45px] md:h-[74px] md:w-[205px]',
		width: 205,
		height: 74
	},
	{
		src: '/hamkor3.svg',
		className: 'size-12 md:size-20',
		width: 75,
		height: 75
	},
	{
		src: '/hamkor4.svg',
		className: 'w-[130px] h-[45px] md:h-[70px] md:w-[199px]',
		width: 199,
		height: 70
	},
	{
		src: '/hamkor5.svg',
		className: 'size-12 md:size-20',
		width: 75,
		height: 75
	}
];

export default function Hamkorlar() {
	return (
		<div className='overflow-x-hidden w-full md:pl-20'>
			<InfiniteMovingCards
				items={hamkorlar}
				direction='right'
				speed='normal'
				className='mt-10'
			/>
		</div>
	);
}
