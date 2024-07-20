import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import "./css/Hero2.css";
import GuitarModel from "./GuitarModel";

const Hero2 = () => {
	return (
		<section id="hero-2" className="w-[98.9vw] h-screen">
			<div id="container-hero-2">
				<div className="circle"></div>
				<div className="blur"></div>
				<div className="noise"></div>
				<h1 className="pt-5 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/ text-blue-300 text-5xl font-bold">By RVR & JC</h1>
			</div>
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<div className="font-bold text-blue-400">
					<h1 className="text-8xl">Welcome To UniFestia</h1>
					<h1 className="text-2xl mt-4"></h1>
				</div>
			</div>
			<div
				id="canvas"
				className="z-[1] w-full h-[80vh] md:h-[90-vh] overflow-hidden absolute top-[10vh]"
			>
				<GuitarModel />
				<ModelView />
				<Canvas
					className="w-full h-full"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						overflow: "hidden",
					}}
					eventSource={document.getElementById("root") || undefined}
				>
					<View.Port />
				</Canvas>
			</div>
		</section>
	);
};

export default Hero2;
