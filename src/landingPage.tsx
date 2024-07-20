import { useState, useEffect } from "react";
import Loader from "./components/main/Loader";
import Navbar from "./components/main/Navbar";
import MapWithMarkers from "./components/main/MapWithMarkers";
import ReactLenis from "lenis/react";
import Hero2 from "./components/main/Hero2";
import Footer from "./components/main/Footer";
import WhyUnifestia from "./components/main/WhyUnifestia";
import GalleryShowcase from "./components/main/GalleryShowcase";


function LandingPage() {
	const [loaderCompleted, setLoaderCompleted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoaderCompleted(true);
		}, 7300);

		return () => clearTimeout(timer);
	}, []);

	return (
		<ReactLenis root>

			{!loaderCompleted && <Loader />}
			{loaderCompleted && (
				<>
					<Navbar />
					<Hero2 />
					<WhyUnifestia />
					<MapWithMarkers />
          <GalleryShowcase />
					<Footer />
				</>
			)}
		</ReactLenis>
	);
}

export default LandingPage;
