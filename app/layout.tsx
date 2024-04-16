import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./(dashboard)/components/Nav";
import "leaflet/dist/leaflet.css";
const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ADEE",
	description: "Pracownia Architektoniczna Grzegorz Chodara",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Nav />

				{children}
			</body>
		</html>
	);
}
