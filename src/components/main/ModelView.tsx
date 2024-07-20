import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import Lights from "./Lights";
import BoomBox from "./BoomBox";
import * as THREE from "three"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ModelView = () => {
	const cameraRef = useRef(null);

	useGSAP(() => {
		if (cameraRef.current) {
			gsap.to(cameraRef.current.position, {
				y: -1.5,
				z: 5,
				// x: -10,
				scrollTrigger: {
					trigger: "#canvas",
					start: "top 10%",
					end: "bottom 60%",
					scrub: 1,
					// pin: true,
					// markers: true
				},

			});
		}
	}, [cameraRef.current]);

	return (
		<View className={`w-full h-full absolute`}>
			<PerspectiveCamera ref={cameraRef} makeDefault position={[-4, 2, 4]} />
			<ambientLight intensity={0.3} />
			<Lights />
			<OrbitControls
				makeDefault
				enableZoom={false}
				enablePan={false}
				enableRotate={false}
				rotateSpeed={0.4}
				target={new THREE.Vector3(0, 0, 0)}
			/>
			<group position={[-2.5, 1, -2]} rotation={[0, 0, 0]}>
				{/* <Suspense fallback={<Loader3D />}> */}
					<BoomBox scale={[3, 3, 3]} />
				{/* </Suspense> */}
			</group>
		</View>
	);
};

export default ModelView;