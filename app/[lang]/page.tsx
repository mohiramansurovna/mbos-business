import Features from '@/components/Features';
import Main from '@/components/Main';
import Services from '@/components/Services';
import Contacts from '@/components/Contacts';
import Questions from '@/components/Questions';
import {getDictionary} from '@/get-dictionary';
import {Locale} from '@/i18n-config';
export default async function page(props: {params: Promise<{lang: Locale}>}) {
	const {lang} = await props.params;
	const t = await getDictionary(lang);
	return (
		<>
			<main className='bg-main-gradient flex flex-col gap-20'>
				<Main t={t} />
				<Services t={t} />
				<Features t={t} />
				<Contacts t={t} />
				<Questions t={t} />
			</main>
		</>
	);
}
