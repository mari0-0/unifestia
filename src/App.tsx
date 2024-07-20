import { useState, useEffect } from "react";
import Navbar from "./components/main/Navbar";
import ReactLenis from "lenis/react";

import Footer from "./components/main/Footer";

import { Outlet } from "react-router-dom";

function App() {
	const [_, setLoaderCompleted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoaderCompleted(true);
		}, 7500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<ReactLenis root>
			<Navbar />
			<Outlet />
			<Footer />

			{/* {!loaderCompleted && <Loader />}
			{loaderCompleted && (
				<>
					<Navbar />
					<Hero2 />
					<WhyUnifestia />
					<MapWithMarkers />
					<Footer />
				</>
			)} */}

			{/* <Events /> */}

			{/* <Hero /> */}
			{/* <HorizontalScroll /> */}
			{/* <AboutUs /> */}
		</ReactLenis>
	);
}

export default App;
