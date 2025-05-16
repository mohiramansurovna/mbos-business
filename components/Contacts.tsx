'use client';
import React from 'react';
import {useForm} from 'react-hook-form';
import Image from 'next/image';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from './ui/form';
import {Button} from './ui/button';
import {Input} from './ui/input';
import {Textarea} from './ui/textarea';
import {motion, scale} from 'framer-motion';
import {getDictionary} from '@/get-dictionary';
export default function Contacts({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	const form = useForm();
	const onSubmit = () => {
		console.log('hi');
	};
	const MotionImage = motion(Image);
	return (
		<section
			id='contact'
			className='flex items-center flex-col md:flex-row justify-center size-screen mx-4 md:mx-44 my-20 py-12 rounded-3xl border border-[#7B1FA2]'
		>
			<section className='flex flex-col items-center w-full'>
				<h1 className='text-4xl my-12 contacts-text font-bold'>
					{t.contacts.h1}
				</h1>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full px-12 space-y-6'
					>
						<FormField
							control={form.control}
							name='name'
							render={({field}) => (
								<FormItem>
									<FormLabel>{t.contacts.name}</FormLabel>
									<FormControl>
										<Input
											style={{
												border: '1px solid #7B1FA2'
											}}
											placeholder='John Doe'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({field}) => (
								<FormItem>
									<FormLabel>{t.contacts.phone}</FormLabel>
									<FormControl>
										<Input
											style={{
												border: '1px solid #7B1FA2'
											}}
											placeholder='+998 62 277 7676'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='message'
							render={({field}) => (
								<FormItem>
									<FormLabel>{t.contacts.message}</FormLabel>
									<FormControl>
										<Textarea
											style={{
												border: '1px solid #7B1FA2'
											}}
											placeholder='....'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type='submit'
							className='border bg-mbosColor/20 border-mbosColor'
						>
							{t.contacts.send}
						</Button>
					</form>
				</Form>
			</section>
			<MotionImage
				className='rounded-full w-[300px] md:w-[400px]'
				animate={{rotateX: [0, 5, 0], rotateZ: [10, -10, 10]}}
				transition={{duration: 5, repeat: Infinity}}
				src='/tech.jpg'
				alt='tech'
				width={400}
				height={400}
			/>
		</section>
	);
}
