'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion';
import {getDictionary} from '@/get-dictionary';

export default function Questions({
	t
}: {
	t: Awaited<ReturnType<typeof getDictionary>>;
}) {
	return (
		<section className='px-12 md:px-44 flex flex-col gap-4 items-center'>
			<h1 className='text-3xl contacts-text font-semibold'>
				{t.questions.h1}
			</h1>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1' className='border-mbosColor'>
					<AccordionTrigger className='text-lg md:text-xl font-light'>
						{t.questions.q1}
					</AccordionTrigger>
					<AccordionContent className='md:text-lg font-semibold'>
						{t.questions.a1}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2' className='border-mbosColor'>
					<AccordionTrigger className='text-lg md:text-xl font-light'>
						{t.questions.q2}
					</AccordionTrigger>
					<AccordionContent className='md:text-lg font-semibold'>
						{t.questions.a2}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3' className='border-mbosColor'>
					<AccordionTrigger className='text-lg md:text-xl font-light'>
						{t.questions.q3}
					</AccordionTrigger>
					<AccordionContent className='md:text-lg font-semibold'>
						{t.questions.a3}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4' className='border-mbosColor'>
					<AccordionTrigger className='text-lg md:text-xl font-light'>
						{t.questions.q4}
					</AccordionTrigger>
					<AccordionContent className='md:text-lg font-semibold'>
						{t.questions.a4}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-5' className='border-mbosColor'>
					<AccordionTrigger className='text-lg md:text-xl font-light'>
						{t.questions.q5}
					</AccordionTrigger>
					<AccordionContent className='md:text-lg font-semibold'>
						{t.questions.a5}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-6' className='border-mbosColor'>
					<AccordionTrigger className='text-lg md:text-xl font-light'>
						{t.questions.q6}
					</AccordionTrigger>
					<AccordionContent className='md:text-lg font-semibold'>
						{t.questions.a6}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
