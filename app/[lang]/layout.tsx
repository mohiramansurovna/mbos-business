import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {i18n, type Locale} from '@/i18n-config';
import {getDictionary} from '@/get-dictionary';
import {Inter} from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-inter'
});

export const metadata: Metadata = {
	title: 'MBOS',
	description: 'MBOS - Raqamlashtirish orqali qulaylik yaratamiz',
	icons: {
		icon: '/logo.svg'
	}
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function layout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{lang: Locale}>;
}>) {
	const {lang} = await params;
	const t = await getDictionary(lang);
	return (
		<html lang={lang} className={`${inter.variable}`}>
			<body className='text-white m-0 p-0 text-mm font-inter bg-black w-screen overflow-x-hidden'>
				<Header t={t} />
				{children}
				<Footer t={t} />
			</body>
		</html>
	);
}
