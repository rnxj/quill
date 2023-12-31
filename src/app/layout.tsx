import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import 'react-loading-skeleton/dist/skeleton.css';
import 'simplebar-react/dist/simplebar.min.css';
import Provider from './_trpc/Provider';
import './globals.css';

import { constructMetadata } from '@/lib/utils';

import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="light">
			<body
				className={cn(
					'min-h-screen font-sans antialiased grainy',
					inter.className
				)}
			>
				<Provider>
					<Toaster />
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
	);
}
