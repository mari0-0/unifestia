import { useState, useEffect } from "react";
import Hero from "./components/main/Hero";
import Loader from "./components/main/Loader";
import Navbar from "./components/main/Navbar";
import HorizontalScroll from "./components/main/HorizontalScroll";
import MapWithMarkers from "./components/main/MapWithMarkers";
import ReactLenis, { useLenis } from "lenis/react";
import Hero2 from "./components/main/Hero2";
import AboutUs from "./components/main/AboutUs";
import Events from "./components/main/Events";
import Footer from "./components/main/Footer";
import WhyUnifestia from "./components/main/WhyUnifestia";
import { Outlet } from "react-router-dom";

function App() {
	const [loaderCompleted, setLoaderCompleted] = useState(false);

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
