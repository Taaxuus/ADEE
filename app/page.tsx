import About from "./(dashboard)/components/About";
import Header from "./(dashboard)/components/Header";

export default function Home() {
	return (
		<main className="max-w-screen">
			<Header />
			<About />
		</main>
	);
}
