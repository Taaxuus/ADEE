import About from "./(dashboard)/components/About";
import Header from "./(dashboard)/components/Header";
import Projects from "./(dashboard)/components/Projects";

export default function Home() {
	return (
		<main className="max-w-screen">
			<Header />
			<About />
			<Projects />
		</main>
	);
}
